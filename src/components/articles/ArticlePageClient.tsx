 "use client";

import { Post, samplePosts } from "@/lib/posts";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = {
  post: Post;
};

export function ArticlePageClient({ post }: Props) {
  const paragraphs = post.content.split("\n\n");
  const { scrollYProgress } = useScroll();
  const [showOverview, setShowOverview] = useState(true);

  // Track recently viewed posts in localStorage for "Continue reading"
  useEffect(() => {
    if (typeof window === "undefined") return;

    const key = "aurora-recent-posts";
    const raw = window.localStorage.getItem(key);
    const existing: { slug: string; viewedAt: number }[] = raw
      ? JSON.parse(raw)
      : [];

    const next = [
      { slug: post.slug, viewedAt: Date.now() },
      ...existing.filter((item) => item.slug !== post.slug),
    ].slice(0, 10);

    window.localStorage.setItem(key, JSON.stringify(next));
  }, [post.slug]);

  const related = useMemo(
    () =>
      samplePosts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 3),
    [post.id, post.category]
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-[53px] z-40 h-[2px] origin-left bg-gradient-to-r from-sky-400 via-emerald-400 to-fuchsia-400"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-medium text-slate-300"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-[11px]">
            ←
          </span>
          <span className="transition-colors group-hover:text-white">
            Back to all stories
          </span>
        </Link>

        <article className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 shadow-[0_30px_120px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
          <div className="relative overflow-hidden rounded-t-2xl">
            <div className="relative h-64 sm:h-80">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 sm:px-7 sm:pb-7">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-3"
              >
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-200">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 font-medium uppercase tracking-[0.22em]">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {post.publishedAt}
                    <span className="h-1 w-px bg-white/20" />
                    {post.readingTime}
                  </span>
                </div>
                <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-10 px-5 pb-8 pt-7 sm:px-7 sm:pb-10 sm:pt-8 lg:grid-cols-[minmax(0,2.2fr),minmax(0,1.1fr)] lg:gap-12">
            {/* Layered descriptions */}
            <div className="space-y-7">
              <section className="rounded-xl border border-emerald-400/25 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.35)] sm:text-[15px]">
                <p className="font-semibold uppercase tracking-[0.22em] text-emerald-200">
                  Brief
                </p>
                <p className="mt-1.5 leading-relaxed text-emerald-50/90">
                  {post.brief}
                </p>
              </section>

              <section className="space-y-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                    Story overview
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowOverview((v) => !v)}
                    className="text-[11px] font-medium text-sky-300 hover:text-sky-200"
                  >
                    {showOverview ? "Hide TL;DR" : "Show TL;DR"}
                  </button>
                </div>
                {showOverview && (
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                    {post.summary}
                  </p>
                )}
              </section>

              <section className="space-y-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  Full story
                </p>
                <div className="prose prose-invert prose-slate max-w-none text-sm leading-relaxed sm:text-[15px]">
                  {paragraphs.map((para, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.05 + index * 0.04,
                      }}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </section>
            </div>

            {/* Right rail */}
            <aside className="space-y-5 lg:pt-1">
              <div className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-4 text-xs text-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Reading mode
                </p>
                <p className="mt-2 leading-relaxed">
                  This article is structured in three layers: a quick brief, a summary
                  you can skim in under a minute, and the full narrative if you want to
                  go all the way in.
                </p>
                <p className="mt-2 leading-relaxed text-slate-400">
                  Scroll at your own pace—subtle motion and gradients keep the canvas
                  alive without pulling focus from the words.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-sky-400/30 bg-sky-500/5 px-4 py-4 text-xs text-sky-50 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                  Next up
                </p>
                <ul className="space-y-2">
                  {samplePosts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/articles/${p.slug}`}
                          className="group flex flex-col gap-0.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-900/80"
                        >
                          <span className="text-[13px] font-medium text-slate-50 group-hover:text-sky-200">
                            {p.title}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {p.category} • {p.readingTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="border-t border-white/10 bg-slate-950/80 px-5 py-6 sm:px-7 sm:py-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Continue the journey
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/articles/${p.slug}`}
                    className="group rounded-xl border border-white/10 bg-slate-950/80 px-3 py-3 text-xs text-slate-200 transition-colors hover:border-sky-400/60 hover:bg-slate-900/80"
                  >
                    <p className="line-clamp-1 font-medium text-slate-50 group-hover:text-sky-200">
                      {p.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[11px] text-slate-400">
                      {p.brief}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      {p.category} • {p.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

