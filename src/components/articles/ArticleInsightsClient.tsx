"use client";

import { Post } from "@/lib/posts";
import Link from "next/link";

type Props = {
  post: Post;
};

export function ArticleInsightsClient({ post }: Props) {
  const insights = post.insights ?? [];

  return (
    <div className="min-h-screen bg-slate-950 pb-16 pt-10 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/articles/${post.slug}`}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-300"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-[11px]">
            ←
          </span>
          Back to article
        </Link>

        <header className="mt-6 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
            ARTICLE INSIGHTS
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Deep notes for &ldquo;{post.title}&rdquo;
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            This page is a second layer for each story: key ideas, next steps, and
            internal notes. Use it as a private thinking surface or as extra context
            for your readers.
          </p>
        </header>

        <main className="mt-8 space-y-5">
          {insights.length === 0 ? (
            <section className="rounded-2xl border border-dashed border-white/20 bg-slate-950/70 px-5 py-6 text-sm text-slate-300">
              <p>
                There are no insights configured for this article yet. You can add them
                in{" "}
                <code className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[11px]">
                  src/lib/posts.ts
                </code>{" "}
                under the{" "}
                <code className="rounded bg-slate-900/80 px-1.5 py-0.5 text-[11px]">
                  insights
                </code>{" "}
                field of the post.
              </p>
            </section>
          ) : (
            insights.map((insight, index) => (
              <section
                key={insight.id}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/90 px-5 py-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Layer {index + 1}
                </p>
                <h2 className="mt-2 text-base font-semibold text-slate-50 sm:text-lg">
                  {insight.title}
                </h2>
                <p className="mt-1 text-xs text-slate-300">{insight.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                  {insight.content}
                </p>
              </section>
            ))
          )}
        </main>
      </div>
    </div>
  );
}

