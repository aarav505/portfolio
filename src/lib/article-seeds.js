import { articles } from '../data/articles';
import seedOverrides from '../data/article-seed-overrides.json';

function hashSlug(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function findArticle(slug) {
  return articles.find((article) => article.slug === slug);
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

export function getArticleSeed(slug) {
  const override = seedOverrides[slug];
  if (override) {
    return {
      views: override.views ?? 0,
      likes: override.likes ?? 0,
    };
  }

  const article = findArticle(slug);
  if (!article) {
    return { views: 0, likes: 0 };
  }

  if (article.seedViews != null || article.seedLikes != null) {
    return {
      views: article.seedViews ?? 0,
      likes: article.seedLikes ?? 0,
    };
  }

  return getGeneratedSeed(article);
}

export function getPublicStats(slug, stored = {}, userId) {
  const seed = getArticleSeed(slug);
  const realViews = stored.views || 0;
  const likedBy = stored.liked || [];
  const bonusLikes =
    stored.bonusLikes ?? Math.max(0, (stored.likes || 0) - likedBy.length);
  const userLikes = likedBy.length;

  return {
    views: seed.views + realViews,
    likes: seed.likes + bonusLikes + userLikes,
    liked: userId ? likedBy.includes(userId) : false,
  };
}

export { seedOverrides as ARTICLE_SEED_OVERRIDES };
