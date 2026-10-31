import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SearchCategory from "@/components/SearchCategory";

export default function Hero() {
  return (
    <section className="relative bg-[#f7f5f1] pb-20">
      <div
        className="relative min-h-[min(700px,calc(100vh-70px))] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20, 20, 18, 0.78) 0%, rgba(20, 20, 18, 0.54) 42%, rgba(20, 20, 18, 0.12) 100%), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85')",
        }}
      >
        <div className="mx-auto flex min-h-[min(700px,calc(100vh-70px))] max-w-330 items-center px-6 pb-28 pt-20 lg:px-8">
          <div className="max-w-180 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18768]">
              Spaces for serious making
            </p>
            <h1 className="mt-4 text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-[76px]">
              Your next great idea
              <br />
              needs the{" "}
              <em className="font-serif font-medium tracking-[-0.07em]">
                right space.
              </em>
            </h1>
            <p className="mt-7 max-w-150 text-base leading-7 text-stone-200 sm:text-lg">
              Discover exceptional creative spaces built for the work you
              love—from daylight studios to cinematic sound stages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#explore"
                className="flex items-center gap-3 rounded-lg bg-[#df5232] px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#c9472a]"
              >
                Explore studios
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </Link>
              <Link
                href="#list-your-space"
                className="rounded-lg border border-stone-300/80 px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                List your space
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-[2.5rem] z-10 px-6 lg:px-8">
        <SearchCategory />
      </div>
    </section>
  );
}
