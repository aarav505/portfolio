#!/usr/bin/env node

/**
 * Article Stats Initializer
 *
 * Seeds (display baselines) live in src/data/article-seed-overrides.json
 * and auto-generation logic in src/lib/article-seeds.js.
 * This script only sets REAL interaction counts in data/article-stats.json.
 * Displayed counts = seed + real.
 */

const fs = require('fs');
const path = require('path');

const STATS_FILE = path.join(process.cwd(), 'data', 'article-stats.json');
const OVERRIDES_FILE = path.join(process.cwd(), 'src/data/article-seed-overrides.json');

function loadOverrides() {
  if (!fs.existsSync(OVERRIDES_FILE)) return {};
  return JSON.parse(fs.readFileSync(OVERRIDES_FILE, 'utf-8'));
}

function hashSlug(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getDaysSince(dateValue) {
  if (!dateValue) return 0;
  const published = new Date(dateValue).getTime();
  if (Number.isNaN(published)) return 0;
  return Math.max(0, Math.floor((Date.now() - published) / (1000 * 60 * 60 * 24)));
}

function getGeneratedSeed(article) {
  const hash = hashSlug(article.slug);
  const daysSincePublish = getDaysSince(article.date);
  const baseViews = 140 + (hash % 320);
  const dailyViews = 2 + (hash % 6);
  const passiveViews = Math.min(daysSincePublish * dailyViews, 500);
  const likeRatio = 0.11 + (hash % 9) / 100;
  const baseLikes = Math.max(8, Math.floor((baseViews + passiveViews) * likeRatio));

  return {
    views: baseViews + passiveViews,
    likes: baseLikes,
  };
}

function getArticleSeed(slug, articles, overrides) {
  if (overrides[slug]) {
    return {
      views: overrides[slug].views ?? 0,
      likes: overrides[slug].likes ?? 0,
    };
  }

  const article = articles.find((item) => item.slug === slug);
  if (!article) return { views: 0, likes: 0 };

  if (article.seedViews != null || article.seedLikes != null) {
    return {
      views: article.seedViews ?? 0,
      likes: article.seedLikes ?? 0,
    };
  }

  return getGeneratedSeed(article);
}

function loadArticles() {
  const articlesPath = path.join(process.cwd(), 'src/data/articles.js');
  const source = fs.readFileSync(articlesPath, 'utf-8');
  const match = source.match(/export const articles = (\[[\s\S]*\]);/);
  if (!match) return [];

  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${match[1]});`)();
}

function ensureDataDir() {
  const dir = path.dirname(STATS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getStats() {
  try {
    if (!fs.existsSync(STATS_FILE)) {
      return {};
    }
    return JSON.parse(fs.readFileSync(STATS_FILE, 'utf-8'));
  } catch (error) {
    return {};
  }
}

function saveStats(stats) {
  ensureDataDir();
  fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
}

function initializeArticle(slug, views, likes, articles, overrides) {
  const stats = getStats();
  stats[slug] = {
    views: parseInt(views, 10) || 0,
    bonusLikes: parseInt(likes, 10) || 0,
    liked: [],
  };
  saveStats(stats);

  const seed = getArticleSeed(slug, articles, overrides);
  const realLikes = stats[slug].bonusLikes;
  console.log(
    `✓ Set real stats for ${slug}: ${views} views, ${likes} bonus likes (display: ${seed.views + Number(views)} views, ${seed.likes + realLikes} likes)`
  );
}

function initializeAll(views, likes, articles, overrides) {
  const stats = getStats();
  const bonusLikes = parseInt(likes, 10) || 0;

  articles.forEach((article) => {
    stats[article.slug] = {
      views: parseInt(views, 10) || 0,
      bonusLikes,
      liked: [],
    };
    const seed = getArticleSeed(article.slug, articles, overrides);
    console.log(
      `  ${article.slug}: display ${seed.views + Number(views)} views, ${seed.likes + bonusLikes} likes`
    );
  });

  saveStats(stats);
  console.log(`\n✓ Initialized real stats for all ${articles.length} articles`);
}

function resetArticle(slug) {
  const stats = getStats();
  delete stats[slug];
  saveStats(stats);
  console.log(`✓ Reset real stats for ${slug}`);
}

const args = process.argv.slice(2);
const articles = loadArticles();
const overrides = loadOverrides();

if (args.length === 0) {
  console.log(`
Article Stats Initializer

Seeds (baseline display numbers) are configured in:
  src/data/article-seed-overrides.json

This script sets REAL interaction counts only.
Displayed counts = seed + real.

Usage:
  node scripts/init-article-stats.js [slug] [realViews] [realLikes]
  node scripts/init-article-stats.js --all [realViews] [realLikes]
  node scripts/init-article-stats.js --reset [slug]
  node scripts/init-article-stats.js --list
  node scripts/init-article-stats.js --seeds

Examples:
  node scripts/init-article-stats.js building-dsfl-a-full-stack-fantasy-league 12 3
  node scripts/init-article-stats.js --all 0 0
  node scripts/init-article-stats.js --list
  `);
  process.exit(0);
}

if (args[0] === '--seeds') {
  console.log('\nSeed baselines (before real interactions):\n');
  articles.forEach((article) => {
    const seed = getArticleSeed(article.slug, articles, overrides);
    console.log(`${article.slug}: ${seed.views} views, ${seed.likes} likes`);
  });
  console.log('');
  process.exit(0);
}

function normalizeEntry(data = {}) {
  const liked = data.liked || [];
  const bonusLikes =
    data.bonusLikes ?? Math.max(0, (data.likes || 0) - liked.length);

  return {
    views: data.views || 0,
    bonusLikes,
    liked,
  };
}

if (args[0] === '--list') {
  const stats = getStats();
  console.log('\nArticle stats (display = seed + bonus + user likes):\n');

  const slugs = new Set([...Object.keys(stats), ...articles.map((article) => article.slug)]);
  slugs.forEach((slug) => {
    const data = normalizeEntry(stats[slug]);
    const seed = getArticleSeed(slug, articles, overrides);
    const displayLikes = seed.likes + data.bonusLikes + data.liked.length;
    console.log(
      `${slug}: ${seed.views + data.views} views (${seed.views} seed + ${data.views} real), ${displayLikes} likes (${seed.likes} seed + ${data.bonusLikes} bonus + ${data.liked.length} users)`
    );
  });
  console.log('');
  process.exit(0);
}

if (args[0] === '--reset') {
  if (!args[1]) {
    console.error('Error: Please provide a slug to reset');
    process.exit(1);
  }
  resetArticle(args[1]);
  process.exit(0);
}

if (args[0] === '--all') {
  if (args.length < 3) {
    console.error('Error: Please provide realViews and realLikes for --all');
    process.exit(1);
  }
  initializeAll(args[1], args[2], articles, overrides);
  process.exit(0);
}

if (args.length >= 3) {
  initializeArticle(args[0], args[1], args[2], articles, overrides);
  process.exit(0);
}

console.error('Error: Invalid arguments');
process.exit(1);
