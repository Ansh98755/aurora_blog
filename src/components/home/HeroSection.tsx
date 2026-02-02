 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { samplePosts } from "@/lib/posts";
import Link from "next/link";

const featured = samplePosts.filter((p) => p.featured);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950/90">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-40 -top-40 h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_20%_20%,rgba(251,113,133,0.28),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(94,234,212,0.3),transparent_55%)] blur-3xl" />
        <motion.div
          className="absolute inset-x-0 top-40 h-72 bg-[radial-gradient(circle_at_0%_0%,rgba(129,140,248,0.35),transparent_55%),radial-gradient(circle_at_100%_20%,rgba(56,189,248,0.32),transparent_55%)] blur-3xl"
          animate={{ y: [0, -25, 10, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
        {/* Left: headline */}
        <div className="relative z-10 max-w-xl space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300 backdrop-blur-lg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Live journal for design, code & energy
          </motion.div>

          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          >
            Where{" "}
            <span className="bg-gradient-to-br from-sky-300 via-emerald-300 to-fuchsia-400 bg-clip-text text-transparent">
              ideas glow
            </span>{" "}
            in motion.
          </motion.h1>

          <motion.p
            className="max-w-lg text-pretty text-sm leading-relaxed text-slate-300 sm:text-base"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            A calm, cinematic blog experience built for deep thinking. Drift
            through animated stories on design, frontend craft, and the small
            habits that keep your creativity bright.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 pt-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.16 }}
          >
            <Link
              href="#articles"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,0.55)] transition-transform duration-200 hover:translate-y-0.5 hover:shadow-[0_18px_60px_rgba(56,189,248,0.75)]"
            >
              <span className="relative z-10">Start reading</span>
              <motion.span
                className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950/10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(15,23,42,0.3),transparent_60%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="flex -space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-900 bg-slate-800/80 text-[10px] font-medium text-slate-200 shadow-[0_0_0_1px_rgba(15,23,42,0.85)]"
                  >
                    {["A", "Y", "✶"][i]}
                  </div>
                ))}
              </div>
              <span>Designed for long, slow scrolling.</span>
            </div>
          </motion.div>
        </div>

        {/* Right: animated feature carousel */}
        <motion.div
          className="relative z-10 flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-[0_32px_120px_rgba(15,23,42,0.85)] backdrop-blur-2xl">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(251,113,133,0.28),transparent_55%)] opacity-70 mix-blend-screen"
                animate={{ opacity: [0.4, 0.82, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative px-4 pb-4 pt-4 sm:px-5 sm:pt-5">
                <motion.div
                  className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 sm:h-64"
                  initial={false}
                >
                  {featured.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.04, x: 40 }}
                      animate={{
                        opacity: index === 0 ? 1 : 0,
                        scale: index === 0 ? 1 : 1.04,
                        x: index === 0 ? 0 : -40,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    </motion.div>
                  ))}

                  <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/45 px-2 py-1">
                      Featured story
                    </span>
                    <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-100">
                      Smooth reading mode
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 space-y-2">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-300">
                      Fresh this week
                    </p>
                    <p className="line-clamp-2 text-sm font-semibold text-slate-50 sm:text-base">
                      {featured[0]?.title}
                    </p>
                    <p className="line-clamp-2 text-xs text-slate-300">
                      {featured[0]?.brief}
                    </p>
                  </div>
                </motion.div>

                <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-300">
                  <p className="line-clamp-2 text-[11px] text-slate-400">
                    Built with motion‑first design, soft gradients, and a layout that
                    keeps your focus on the story.
                  </p>
                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    Scroll to explore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

