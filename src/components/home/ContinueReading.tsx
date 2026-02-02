"use client";

import { useEffect, useState } from "react";
import { samplePosts } from "@/lib/posts";
import Link from "next/link";

type Recent = { slug: string; viewedAt: number };

export function ContinueReading() {
  const [recent, setRecent] = useState<Recent[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem("aurora-recent-posts");
    const parsed: Recent[] = raw ? JSON.parse(raw) : [];
    setRecent(parsed);
  }, []);

  const posts = recent
    .map((item) => samplePosts.find((p) => p.slug === item.slug))
    .filter(Boolean);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-white/10 bg-slate-950/90 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Continue reading
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Pick up where you left off in the Aurora Journal.
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {posts.map((post) => (
            <Link
              key={post!.slug}
              href={`/articles/${post!.slug}`}
              className="min-w-[220px] max-w-xs flex-1 rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-xs text-slate-200 transition-colors hover:border-sky-400/60 hover:bg-slate-900/80"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                {post!.category}
              </p>
              <p className="mt-1 line-clamp-1 text-sm font-semibold text-slate-50">
                {post!.title}
              </p>
              <p className="mt-1 line-clamp-2 text-[11px] text-slate-400">
                {post!.brief}
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                {post!.publishedAt} • {post!.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

