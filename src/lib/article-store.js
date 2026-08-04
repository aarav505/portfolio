import fs from 'fs';
import path from 'path';
import { getPublicStats } from './article-seeds';

const STATS_FILE = path.join(process.cwd(), 'data', 'article-stats.json');

function ensureDataDir() {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function initializeStats() {
  ensureDataDir();
  if (!fs.existsSync(STATS_FILE)) {
    fs.writeFileSync(STATS_FILE, JSON.stringify({}, null, 2));
  }
}

function getStoredStatsMap() {
  try {
    initializeStats();
    const data = fs.readFileSync(STATS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading stats:', error);
    return {};
  }
}

function normalizeStoredStats(raw = {}) {
  const liked = raw.liked || [];
  const bonusLikes =
    raw.bonusLikes ?? Math.max(0, (raw.likes || 0) - liked.length);

  return {
    views: raw.views || 0,
    bonusLikes,
    liked,
  };
}

function getStoredStats(slug) {
  const stats = getStoredStatsMap();
  return normalizeStoredStats(stats[slug]);
}

function updateStoredStats(slug, updates) {
  try {
    ensureDataDir();
    const stats = getStoredStatsMap();
    const current = normalizeStoredStats(stats[slug]);

    stats[slug] = {
      views: updates.views ?? current.views,
      bonusLikes: updates.bonusLikes ?? current.bonusLikes,
      liked: updates.liked ?? current.liked,
    };

    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
    return stats[slug];
  } catch (error) {
    console.error('Error updating stats:', error);
    return null;
  }
}

export function getArticleStats(slug, userId) {
  return getPublicStats(slug, getStoredStats(slug), userId);
}

export function incrementViews(slug) {
  const current = getStoredStats(slug);
  const stored = updateStoredStats(slug, {
    views: (current.views || 0) + 1,
  });

  return getPublicStats(slug, stored);
}

export function toggleLike(slug, userId) {
  const current = getStoredStats(slug);
  const isLiked = current.liked.includes(userId);

  const updatedLiked = isLiked
    ? current.liked.filter((id) => id !== userId)
    : [...current.liked, userId];

  const stored = updateStoredStats(slug, {
    liked: updatedLiked,
  });

  return getPublicStats(slug, stored, userId);
}

export function setInitialStats(slug, initialViews = 0, initialLikes = 0) {
  const stored = updateStoredStats(slug, {
    views: initialViews,
    bonusLikes: initialLikes,
    liked: [],
  });

  return getPublicStats(slug, stored);
}

export function getStoredStatsForSlug(slug) {
  return getStoredStats(slug);
}
