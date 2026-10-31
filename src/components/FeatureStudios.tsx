import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeatureStudiosCard from "./FeatureStudiosCard";

type Studio = {
  _id: string;
  title: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  images?: string[];
};

export default async function FeatureStudios() {
  const res = await fetch("http://localhost:5000/featured-studios");
  const featureStudios: Studio[] = await res.json();

  return (
    <section id="explore" className="bg-[#f7f5f1] py-24 lg:py-28">
      <div className="mx-auto max-w-330 px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              Curated for creators
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] text-stone-900 sm:text-5xl">
              Spaces worth creating in.
            </h2>
            <p className="mt-3 text-base text-stone-500">
              A handpicked selection of exceptional spaces ready for your next
              project.
            </p>
          </div>
          <Link
            href="explore-studios"
            className="flex w-fit items-center gap-4 border-b border-stone-800 pb-2 text-[13px] text-stone-900 transition-colors hover:border-[#df5232] hover:text-[#df5232]"
          >
            View all studios
            <ArrowRight className="size-4" strokeWidth={1.7} />
          </Link>
        </div>
        {featureStudios.length > 0 ? (
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {featureStudios.map((studio) => (
              <FeatureStudiosCard key={`${studio._id}`} studio={studio} />
            ))}
          </div>
        ) : (
          <p className="mt-12 border-t border-stone-300 pt-8 text-sm text-stone-500">
            No featured studios are available right now.
          </p>
        )}
      </div>
    </section>
  );
}
