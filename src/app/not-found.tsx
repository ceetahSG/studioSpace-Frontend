import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe2, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-7rem)] items-center overflow-hidden bg-[#f7f5f1] px-6 py-16 text-stone-900 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-330 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <section>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
            <Sparkles className="size-3.5" />
            StudioSpace
          </div>
          <p className="mt-8 font-serif text-[clamp(7rem,18vw,12rem)] leading-[0.75] tracking-[-0.09em] text-stone-950">
            404
          </p>
          <h1 className="mt-10 max-w-md text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-5xl">
            This room is still being built.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-stone-500">
            The page you&apos;re looking for has moved, been removed, or is
            waiting for its next creative direction.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-md bg-[#df5232] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c9472a] focus:outline-none focus:ring-2 focus:ring-[#df5232]/30 focus:ring-offset-2"
          >
            <ArrowLeft className="size-4" />
            Return to Home
          </Link>
        </section>

        <div
          className="relative aspect-[1.15] min-h-80 overflow-hidden rounded-2xl bg-[#d7d1c5] shadow-[0_24px_70px_rgba(27,25,22,0.12)] sm:min-h-105"
          aria-label="Illustration of an empty creative studio"
          role="img"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(255,255,255,0.8),transparent_28%),linear-gradient(135deg,#e7e1d6_0%,#d1c8b9_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#b8aa96]" />
          <div className="absolute left-[12%] top-[12%] h-[51%] w-[42%] border-[10px] border-[#8f8374] bg-[#b9d1cf] shadow-[inset_0_0_0_5px_#d8d0c3]">
            <div className="absolute inset-y-0 left-1/2 w-1 bg-[#8f8374]" />
            <div className="absolute inset-x-0 top-1/2 h-1 bg-[#8f8374]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-[#6d8d8d]/25" />
          </div>
          <div className="absolute bottom-[18%] left-[18%] h-2 w-[54%] rounded-full bg-[#897a68]/40 blur-sm" />
          <div className="absolute bottom-[19%] left-[28%] h-24 w-36 rounded-[45%_45%_8%_8%] bg-[#df5232] shadow-[0_15px_0_#b73f28]">
            <div className="absolute -top-5 left-8 h-8 w-20 rounded-t-full bg-[#df5232]" />
            <div className="absolute -bottom-8 left-4 h-10 w-3 rounded-full bg-[#5b5045]" />
            <div className="absolute -bottom-8 right-4 h-10 w-3 rounded-full bg-[#5b5045]" />
          </div>
          <div className="absolute bottom-[19%] right-[17%] h-32 w-5 rounded-full bg-[#5b5045]">
            <div className="absolute -left-8 top-2 h-3 w-20 -rotate-12 rounded-full bg-[#5b5045]" />
            <div className="absolute -left-12 -top-3 h-14 w-14 rounded-full border-[6px] border-[#5b5045] bg-transparent" />
          </div>
          <div className="absolute right-[10%] top-[11%] rotate-6 rounded-md bg-[#f8f4eb] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-600 shadow-md">
            Out of frame
          </div>
          <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#5b5045]">
            <Globe2 className="size-3.5" />
            Find your next space
            <ArrowUpRight className="size-3.5" />
          </div>
        </div>
      </div>
    </main>
  );
}
