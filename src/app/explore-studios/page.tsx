import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FeatureStudiosCard, {
  type Studio,
} from "@/components/FeatureStudiosCard";

export default async function ExploreStudiosPage() {
  const res = await fetch("http://localhost:5000/studios");
  const Studios = await res.json();

  <section className="bg-[#f7f5f1] px-6 py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-360">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
        The directory
      </p>
      <h1 className="mt-5 text-5xl font-medium tracking-[-0.07em] text-stone-900">
        Explore creative spaces.
      </h1>
      <p className="mt-6 text-sm text-stone-500">
        Studios are temporarily unavailable. Please try again later.
      </p>
    </div>
  </section>;

  return (
    <section className="bg-[#f7f5f1] pb-24 pt-5 lg:pb-32">
      <div className="mx-auto max-w-360 px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 text-[12px] text-stone-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-stone-900">
            Home
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={1.5} />
          <span className="text-stone-700">Explore studios</span>
        </nav>

        <header className="mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
            The directory
          </p>
          <h1 className="mt-5 text-5xl font-medium tracking-[-0.07em] text-stone-900 sm:text-6xl lg:text-7xl">
            Explore creative spaces.
          </h1>
          <p className="mt-4 text-base text-stone-500 sm:text-lg">
            Exceptional rooms, stages, and studios, vetted for ambitious
            creative work.
          </p>
        </header>

        <div className="mt-16 flex items-center justify-between border-b border-stone-300 pb-5">
          <p className="text-sm text-stone-500">
            <strong className="font-semibold text-stone-900">
              {Studios.length} creative{" "}
              {Studios.length === 1 ? "space" : "spaces"}
            </strong>{" "}
            in Dhaka
          </p>
        </div>

        {Studios.length > 0 ? (
          <div className="mt-8 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {Studios.map((studio: Studio) => (
              <FeatureStudiosCard
                key={`${studio.title}-${studio.location}`}
                studio={studio}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-stone-500">
            No studios are available right now.
          </p>
        )}
      </div>
    </section>
  );
}
