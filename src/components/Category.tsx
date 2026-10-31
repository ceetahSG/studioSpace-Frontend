import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Photo Studios",
    apiCategory: "Photo Studio",
    description: "Daylight, cycloramas & equipment",
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    number: "02",
    title: "Film Stages",
    apiCategory: "Film Stage",
    description: "Built for stories in motion",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Podcast Rooms",
    apiCategory: "Podcast Lounge",
    description: "Broadcast-ready sound",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Music Suites",
    apiCategory: "Music Suite",
    description: "Tuned rooms, serious gear",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    title: "Art Workshops",
    apiCategory: "Art Workshop",
    description: "Room to make a beautiful mess",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Category() {
  return (
    <div className="bg-[#f1f0eb] py-24 lg:py-28">
      <div className="mx-auto max-w-330 px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
          Browse by craft
        </p>
        <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] text-stone-900 sm:text-5xl">
          Find your creative environment.
        </h2>
        <p className="mt-3 text-base text-stone-500">
          Purpose-built rooms for every way you make.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {categories.map((category) => (
            <Link
              key={category.number}
              href={`/filteredstudios/${encodeURIComponent(category.apiCategory)}`}
              className={`group relative min-h-64 overflow-hidden rounded-lg ${
                category.featured ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-[11px] text-stone-300">
                  {category.number}
                </span>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl tracking-[-0.05em]">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-stone-300">
                      {category.description}
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/60 transition-colors group-hover:bg-white group-hover:text-stone-900">
                    <ArrowRight className="size-4" strokeWidth={1.7} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
