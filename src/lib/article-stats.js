const STORAGE_KEY = 'portfolio-article-stats-v1';

function readStorage() {
  if (typeof window === 'undefined') return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStorage(data) {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage write errors in private browsing or unsupported environments.
  }
}

export function getArticleSlug(article) {
  return article.slug || article.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getArticleStats(article, index) {
  const slug = getArticleSlug(article);
  const storage = readStorage();
  const entry = storage[slug] || {};
  const baseViews = article.views ?? 180 + index * 16;
  const baseLikes = article.likes ?? 14 + index * 3;

  return {
    views: baseViews + (entry.viewsDelta || 0),
    likes: baseLikes + (entry.likesDelta || 0),
    liked: Boolean(entry.liked),
  };
}

export function incrementArticleView(article, index) {
  const slug = getArticleSlug(article);
  const storage = readStorage();
  const entry = storage[slug] || {};
  const nextEntry = { ...entry, viewsDelta: (entry.viewsDelta || 0) + 1 };
  const nextStorage = { ...storage, [slug]: nextEntry };
  writeStorage(nextStorage);

  return getArticleStats(article, index);
}

export function toggleArticleLike(article, index) {
  const slug = getArticleSlug(article);
  const storage = readStorage();
  const entry = storage[slug] || {};
  const liked = Boolean(entry.liked);
  const nextEntry = {
    ...entry,
    liked: !liked,
    likesDelta: (entry.likesDelta || 0) + (liked ? -1 : 1),
  };
  const nextStorage = { ...storage, [slug]: nextEntry };
  writeStorage(nextStorage);

  return getArticleStats(article, index);
}

export function getAllArticleTags(articles) {
  const tags = new Set();
  articles.forEach((article) => {
    (article.tags || []).forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
