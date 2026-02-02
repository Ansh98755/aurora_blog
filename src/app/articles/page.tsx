import { samplePosts } from "@/lib/posts";
import Link from "next/link";

export default function ArticlesIndexPage() {
  const sorted = [...samplePosts].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-slate-950 pb-16 pt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="space-y-3 pb-6 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            LIBRARY
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            All stories in the Aurora Journal
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            Browse every article, note, and gradient‑soaked idea in one place. Use this
            page as a starting point for exploring your writing once you swap in your
            own posts.
          </p>
        </header>

        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
          {sorted.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-3 px-4 py-4 transition-colors hover:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between sm:px-5"
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                  {post.category}
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                  <Link href={`/articles/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-1 line-clamp-2 text-xs text-slate-300">
                  {post.brief}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 text-[11px] text-slate-400 sm:flex-col sm:items-end sm:text-right">
                <span>
                  {post.publishedAt} • {post.readingTime}
                </span>
                <div className="flex gap-2">
                  <Link
                    href={`/articles/${post.slug}`}
                    className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 hover:border-sky-400 hover:text-sky-200"
                  >
                    Read
                  </Link>
                  <Link
                    href={`/articles/${post.slug}/insights`}
                    className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200 hover:border-sky-300 hover:bg-sky-500/20"
                  >
                    Insights
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

