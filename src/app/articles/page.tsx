'use client'

import Link from 'next/link';
import React, { useMemo, useState, useEffect } from 'react';
import { ArrowUpRight, Heart, Eye, Search, ChevronDown } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { articles } from '../../data/articles';
import { getArticleSlug } from '../../lib/article-stats';

export default function ArticlesPage() {
  const [search, setSearch] = useState('');
  const [contentType, setContentType] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All');
  const [statsMap, setStatsMap] = useState<Record<string, { views?: number; likes?: number }>>({});

  // Fetch all article stats in parallel on mount
  useEffect(() => {
    async function fetchAllStats() {
      const results = await Promise.all(
        articles.map(async (article) => {
          const slug = getArticleSlug(article);
          try {
            const response = await fetch(`/api/articles/${slug}/stats`);
            if (!response.ok) throw new Error('Failed to fetch');
            const stats = await response.json();
            return { slug, stats };
          } catch (error) {
            console.error(`Error fetching stats for ${slug}:`, error);
            return { slug, stats: { views: 0, likes: 0 } };
          }
        })
      );

      const newStatsMap: Record<string, { views?: number; likes?: number }> = {};
      results.forEach(({ slug, stats }) => {
        newStatsMap[slug] = stats;
      });

      setStatsMap(newStatsMap);
    }
    fetchAllStats();
  }, []);

  const contentTypes = ['All', 'FullStack', 'Nextjs', 'React', 'Python', 'Engineering', 'Leadership', 'Projects', 'Hardware', 'SocialImpact'];
  const timePeriods = [
    { label: 'All Time', value: 'All' },
    { label: 'Last 30 Days', value: '30' },
    { label: 'Last 3 Months', value: '90' },
    { label: 'Last Year', value: '365' },
  ];

  const filteredArticles = useMemo(() => {
    const query = search.toLowerCase();
    const now = new Date().getTime();

    return [...articles]
      .sort((a, b) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return bDate - aDate;
      })
      .filter((article) => {
        const matchesContent = contentType === 'All' || (article.tags || []).includes(contentType);
        const matchesQuery =
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          (article.tags || []).some((tag) => tag.toLowerCase().includes(query));

        let matchesTime = true;
        if (timeFilter !== 'All') {
          const daysDiff = Math.floor((now - new Date(article.date).getTime()) / (1000 * 60 * 60 * 24));
          matchesTime = daysDiff <= parseInt(timeFilter);
        }

        return matchesContent && matchesQuery && matchesTime;
      });
  }, [contentType, search, timeFilter]);

  return (
    <div className="min-h-screen bg-background text-zinc-900 dark:text-white">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-28 md:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            blog
          </p>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            notes, thinking, and things I&apos;ve learned.
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A simple place to keep reflections, lessons, and experiments in one spot.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3">
          <label className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2.5 text-sm text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
            <Search size={16} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles"
              className="w-full bg-transparent outline-none placeholder:text-zinc-400"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="appearance-none rounded-full border border-zinc-200 bg-white/70 px-4 py-2 pr-8 text-sm text-zinc-700 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
              >
                {contentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Topics' : type}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
            </div>

            <div className="relative">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="appearance-none rounded-full border border-zinc-200 bg-white/70 px-4 py-2 pr-8 text-sm text-zinc-700 shadow-sm transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
              >
                {timePeriods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredArticles.map((article) => {
            const slug = getArticleSlug(article);
            const stats = statsMap[slug];
            const views = stats?.views ?? 0;
            const likes = stats?.likes ?? 0;
            const coverSrc = article.cover || `/articles/default-cover.svg`;

            return (
              <Link
                key={slug}
                href={`/articles/${slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <img
                  src={coverSrc}
                  alt={article.title}
                  onError={(event) => {
                    event.currentTarget.src = '/articles/default-cover.svg';
                  }}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between">
                    {article.platform ? (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                        {article.platform}
                      </span>
                    ) : <span />}
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {article.title}
                  </h2>
                  <p className="mb-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span>{new Date(article.date).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    {article.readTime ? <><span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" /><span>{article.readTime}</span></> : null}
                    <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                      <Eye size={12} /> {views.toLocaleString()} views
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                      <Heart size={12} /> {likes.toLocaleString()} likes
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}