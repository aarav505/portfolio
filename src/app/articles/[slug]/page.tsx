'use client'

import { useParams } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Eye, Heart, Sparkles } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import { articles } from '../../../data/articles';
import { getArticleSlug } from '../../../lib/article-stats';

export const dynamicParams = true;

export default function ArticlePage() {
  const routeParams = useParams();
  const slug = Array.isArray(routeParams?.slug) ? routeParams.slug[0] : routeParams?.slug;
  const [stats, setStats] = useState<{ views: number; likes: number }>({ views: 0, likes: 0 });
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  const article = articles.find((item) => {
    const itemSlug = getArticleSlug(item);
    return itemSlug === slug;
  });

  const coverSrc = article?.cover || '/articles/default-cover.svg';

  // Fetch initial stats and increment views safely
  useEffect(() => {
    if (!article || !slug) return;

    async function loadStats() {
      try {
        // Fetch current stats
        const statsResponse = await fetch(`/api/articles/${slug}/like`);
        if (statsResponse.ok) {
          const currentStats = await statsResponse.json();
          if (currentStats && typeof currentStats === 'object') {
            setStats({
              views: currentStats.views ?? 0,
              likes: currentStats.likes ?? 0,
            });
            setLiked(Boolean(currentStats.liked));
          }
        }

        // Increment view count
        const viewResponse = await fetch(`/api/articles/${slug}/view`, { method: 'POST' });
        if (viewResponse.ok) {
          const updatedStats = await viewResponse.json();
          if (updatedStats && typeof updatedStats === 'object') {
            setStats({
              views: updatedStats.views ?? 0,
              likes: updatedStats.likes ?? 0,
            });
          }
        }
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [article, slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-zinc-900 dark:text-white">
        <Navbar />
        <main className="mx-auto flex max-w-4xl flex-col px-6 py-28 md:px-10">
          <h1 className="text-3xl font-bold tracking-tighter">Article not found.</h1>
          <Link href="/articles" className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-600 hover:underline dark:text-zinc-300">
            <ArrowLeft size={16} /> Back to articles
          </Link>
        </main>
      </div>
    );
  }

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/articles/${slug}/like`, { method: 'POST' });
      if (response.ok) {
        const updatedStats = await response.json();
        if (updatedStats && typeof updatedStats === 'object') {
          setStats({
            views: updatedStats.views ?? stats.views,
            likes: updatedStats.likes ?? stats.likes,
          });
          setLiked(Boolean(updatedStats.liked));
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const viewsCount = stats?.views ?? 0;
  const likesCount = stats?.likes ?? 0;

  return (
    <div className="min-h-screen bg-background text-zinc-900 dark:text-white">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col px-6 pb-20 pt-28 md:px-10">
        <Link href="/articles" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          <ArrowLeft size={16} /> Back to articles
        </Link>

        <img
          src={coverSrc}
          alt={article.title}
          className="mb-8 h-64 w-full rounded-[2rem] object-cover md:h-80"
        />

        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            {article.platform ? <span>{article.platform}</span> : null}
            {article.platform ? <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" /> : null}
            <span>{new Date(article.date).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            {article.readTime ? <><span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" /><span>{article.readTime}</span></> : null}
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
            <Sparkles size={12} /> Featured note
          </div>

          <h1 className="mb-5 text-4xl font-bold tracking-tighter md:text-5xl">
            {article.title}
          </h1>

          <p className="mb-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {article.excerpt}
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
              <Eye size={14} /> {viewsCount.toLocaleString()} views
            </span>
            <button
              type="button"
              onClick={handleLike}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm shadow-sm transition ${liked ? 'border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300' : 'border-zinc-200 bg-white/70 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-800'}`}
            >
              <Heart size={14} fill={liked ? 'currentColor' : 'none'} /> {likesCount.toLocaleString()} likes
            </button>
          </div>

          <article className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 prose-headings:tracking-tight prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:mb-6 prose-p:leading-8 prose-p:text-zinc-700 prose-p:text-base prose-ul:mb-6 prose-ul:space-y-3 prose-ul:pl-5 prose-ul:text-zinc-700 prose-ol:mb-6 prose-ol:space-y-3 prose-ol:pl-5 prose-ol:text-zinc-700 prose-blockquote:my-6 prose-blockquote:border-l-4 prose-blockquote:border-zinc-300 prose-blockquote:pl-4 prose-blockquote:text-zinc-600 prose-blockquote:italic prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-1 prose-code:font-mono prose-code:text-[12px] prose-code:text-zinc-700 prose-code:before:content-none prose-code:after:content-none prose-strong:font-semibold prose-strong:text-zinc-900 dark:prose-headings:text-white dark:prose-p:text-zinc-300 dark:prose-ul:text-zinc-300 dark:prose-ol:text-zinc-300 dark:prose-blockquote:border-zinc-600 dark:prose-blockquote:text-zinc-400 dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-200 dark:prose-strong:text-white">
            <ReactMarkdown>{article.content || article.excerpt}</ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  );
}