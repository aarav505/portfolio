'use client'

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';

const formatDate = (value) => {
  if (!value) return '';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export default function ArticleCard({
  title,
  excerpt,
  content,
  date,
  readTime,
  tags = [],
  platform,
  cover,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        {cover ? (
          <div className="overflow-hidden">
            <img
              src={cover}
              alt={title}
              className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            {platform ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                {platform}
              </span>
            ) : (
              <span />
            )}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            {title}
          </h3>

          <div className="mb-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-zinc-800 dark:text-zinc-200">{children}</strong>,
                em: ({ children }) => <em className="italic text-zinc-700 dark:text-zinc-300">{children}</em>,
                code: ({ children }) => <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">{children}</code>,
              }}
            >
              {excerpt}
            </ReactMarkdown>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>{formatDate(date)}</span>
            {(readTime || tags.length > 0) && <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />}
            {readTime ? <span>{readTime}</span> : null}
            {readTime && tags.length > 0 ? <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" /> : null}
            {tags.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </button>

      {isOpen ? (
        <div className="mt-6 rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 md:p-8 lg:p-10">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <ChevronLeft size={16} />
            Back to articles
          </button>

          {cover ? (
            <img src={cover} alt={title} className="mb-8 h-56 w-full rounded-[1.5rem] object-cover md:h-72" />
          ) : null}

          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              {platform ? <span>{platform}</span> : null}
              {platform ? <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" /> : null}
              <span>{formatDate(date)}</span>
              {readTime ? <><span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" /><span>{readTime}</span></> : null}
            </div>

            <h3 className="mb-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
              {title}
            </h3>

            <p className="mb-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {excerpt}
            </p>

            <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 prose-h2:mt-8 prose-h2:text-2xl prose-h3:mt-6 prose-h3:text-xl prose-p:mb-4 prose-p:leading-8 prose-p:text-zinc-700 prose-ul:mb-4 prose-ul:space-y-2 prose-ul:pl-5 prose-ol:mb-4 prose-ol:space-y-2 prose-ol:pl-5 prose-blockquote:border-zinc-300 prose-blockquote:text-zinc-600 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-[11px] prose-code:text-zinc-700 dark:prose-headings:text-white dark:prose-p:text-zinc-300 dark:prose-blockquote:border-zinc-700 dark:prose-blockquote:text-zinc-400 dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-200">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">{children}</h1>,
                  h2: ({ children }) => <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">{children}</h2>,
                  h3: ({ children }) => <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 leading-8 text-zinc-700 dark:text-zinc-300">{children}</p>,
                  ul: ({ children }) => <ul className="mb-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-4 list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">{children}</ol>,
                  li: ({ children }) => <li>{children}</li>,
                  blockquote: ({ children }) => <blockquote className="mb-4 border-l-2 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">{children}</blockquote>,
                  a: ({ children, href }) => <a href={href} className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">{children}</a>,
                  code: ({ children }) => <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">{children}</code>,
                }}
              >
                {content || excerpt}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
