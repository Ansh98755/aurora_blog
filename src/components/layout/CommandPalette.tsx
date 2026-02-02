"use client";

import { useEffect, useMemo, useState } from "react";
import { samplePosts } from "@/lib/posts";
import { useRouter } from "next/navigation";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const isShortcut =
        (isMac && event.metaKey && event.key.toLowerCase() === "k") ||
        (!isMac && event.ctrlKey && event.key.toLowerCase() === "k");

      if (isShortcut) {
        event.preventDefault();
        setOpen((prev) => !prev);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return samplePosts.slice(0, 10);

    return samplePosts
      .filter((post) => {
        const haystack = `${post.title} ${post.category} ${post.brief}`.toLowerCase();
        return haystack.includes(normalized);
      })
      .slice(0, 12);
  }, [query]);

  function goTo(path: string) {
    setOpen(false);
    setQuery("");
    router.push(path);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm sm:pt-32">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_40px_120px_rgba(15,23,42,0.9)]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-slate-950/80 px-4 py-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-[11px] text-slate-300">
            ⌘K
          </div>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, moods, or quick notes…"
            className="flex-1 bg-transparent text-sm text-slate-50 outline-none placeholder:text-slate-500"
          />
        </div>
        <div className="max-h-80 overflow-y-auto bg-slate-950/90">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-sm text-slate-400">
              No stories match that yet. Try a different keyword.
            </div>
          ) : (
            <ul className="divide-y divide-white/5">
              {results.map((post) => (
                <li key={post.id}>
                  <button
                    type="button"
                    onClick={() => goTo(`/articles/${post.slug}`)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm text-slate-100 hover:bg-slate-900"
                  >
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="mt-0.5 line-clamp-1 text-xs text-slate-400">
                        {post.brief}
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-[11px] text-slate-400">
                      <span className="rounded-full border border-white/15 px-2 py-0.5">
                        {post.category}
                      </span>
                      <span className="mt-1">
                        {post.publishedAt} • {post.readingTime}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

