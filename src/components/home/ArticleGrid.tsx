 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories, Post, samplePosts } from "@/lib/posts";
import Image from "next/image";
import { useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.08 + index * 0.04,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export function ArticleGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered =
    activeCategory === "All"
      ? samplePosts
      : samplePosts.filter((p) => p.category === activeCategory);

  return (
    <section
      id="articles"
      className="relative border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_60%),radial-gradient(circle_at_bottom,_rgba(251,113,133,0.06),transparent_65%)] pb-20 pt-12 sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              ARTICLES
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Deep dives, tiny sparks, and everything between.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Each article opens with a quick brief, then expands into layered sections
              so you can skim, swim, or dive all the way down.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative overflow-hidden rounded-full border px-3 py-1.5 font-medium transition-colors ${
                  activeCategory === category
                    ? "border-transparent bg-white text-slate-950"
                    : "border-white/10 bg-slate-900/40 text-slate-200 hover:border-white/40"
                }`}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-400 via-emerald-300 to-fuchsia-400"
                    layoutId="category-pill"
                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.02 } },
          }}
        >
          {filtered.map((post, index) => (
            <ArticleCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArticleCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-[1px] shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -4 }}
    >
      <Link href={`/articles/${post.slug}`} className="flex flex-1 flex-col rounded-[1.05rem] bg-slate-950/90">
        <div className="relative overflow-hidden rounded-[1.05rem] bg-slate-900">
          <div className="relative h-40 overflow-hidden sm:h-44">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.02 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>
          <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-100">
            {post.category}
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-slate-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {post.readingTime}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="space-y-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
              {post.publishedAt}
            </p>
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              <span className="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {post.title}
              </span>
            </h3>
          </div>

          {/* Brief description on hover */}
          <p className="line-clamp-2 text-xs text-slate-300">
            {post.brief}
          </p>

          <div className="mt-auto flex items-center justify-between pt-1 text-[11px] text-slate-300">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-[10px] font-medium">
                ✶
              </span>
              <span className="hidden text-[11px] sm:inline">
                Tap in to see the full story and layered details.
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-300">
              Read brief
              <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

