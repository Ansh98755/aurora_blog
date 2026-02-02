 "use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/#articles" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 via-sky-400 to-emerald-400 shadow-[0_0_40px_rgba(56,189,248,0.75)]">
            <motion.div
              className="h-10 w-10 rounded-3xl bg-[radial-gradient(circle_at_10%_0%,rgba(251,113,133,0.8),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(45,212,191,0.7),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.9),transparent_55%)]"
              animate={{ rotate: [0, 8, -6, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-300">
              AURORA
            </p>
            <p className="text-sm text-slate-400">
              thoughts in motion
            </p>
          </div>
        </motion.div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-white"
            >
              <span>{item.label}</span>
              <motion.span
                className="absolute inset-0 -z-10 rounded-full bg-white/5"
                initial={{ opacity: 0, scale: 0.4 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

