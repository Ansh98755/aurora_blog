import { HeroSection } from "@/components/home/HeroSection";
import { ArticleGrid } from "@/components/home/ArticleGrid";
import { ContinueReading } from "@/components/home/ContinueReading";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 pb-16">
      <HeroSection />
      <ArticleGrid />
      <ContinueReading />
      <section
        id="about"
        className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-black pb-16 pt-12"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            ABOUT THIS SPACE
          </p>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Crafted for slow, intentional reading.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            This blog is designed as a calm, high‑contrast canvas for your ideas. You
            get layered article structures, animated imagery, and soft gradients that
            feel alive—but never overwhelm the words. Swap the sample stories with your
            own and you&apos;ve got a premium‑feeling publication ready to publish.
          </p>
        </div>
      </section>
    </main>
  );
}

