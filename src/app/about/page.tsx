import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Make room for ideas",
    description:
      "The right environment changes what is possible. We make inspiring spaces easier to discover and use.",
  },
  {
    icon: Heart,
    title: "Put people first",
    description:
      "We build for the makers, hosts, and communities who give every room its character and purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Keep it considered",
    description:
      "Clear details, honest pricing, and thoughtful standards make every booking feel simple and dependable.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f5f1] text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-300 px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid max-w-330 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              <Globe2 className="size-3.5" />
              About StudioSpace
            </p>
            <h1 className="mt-7 max-w-2xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.09em]">
              Make space for what matters.
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-lg text-xl leading-8 tracking-[-0.02em] text-stone-700 sm:text-2xl">
              StudioSpace connects people with rooms that help ideas become
              real.
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-stone-500">
              From a sunlit portrait studio to a quiet room for a first cut,
              we believe the places where creative work happens deserve to be
              found, shared, and celebrated.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-330 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              Our point of view
            </p>
            <h2 className="mt-5 max-w-sm text-4xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-5xl">
              Every great project starts somewhere.
            </h2>
          </div>
          <div className="grid gap-8 text-base leading-7 text-stone-600 sm:grid-cols-2 sm:gap-12">
            <p>
              A space is more than four walls. It is the light on a subject,
              the sound in a room, the table where a team gathers, and the
              feeling that says: this is the place.
            </p>
            <p>
              StudioSpace was created to make those places more accessible.
              We give independent hosts a way to share their spaces and give
              creators the confidence to find their next setting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e4da] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-330">
          <div className="flex flex-col justify-between gap-6 border-b border-stone-400 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
                What guides us
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.07em] sm:text-5xl">
                Built with intention.
              </h2>
            </div>
            <Lightbulb className="size-8 text-[#df5232]" strokeWidth={1.4} />
          </div>
          <div className="grid md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="border-b border-stone-400 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500">
                      0{index + 1}
                    </span>
                    <Icon className="size-5 text-[#df5232]" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-12 text-xl tracking-[-0.04em]">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-stone-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#151715] px-6 py-20 text-stone-100 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-330 flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              Find your place
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-medium leading-none tracking-[-0.07em] sm:text-6xl">
              Your next idea deserves a room.
            </h2>
          </div>
          <Link
            href="/explore-studios"
            className="inline-flex h-12 items-center gap-3 self-start rounded-md bg-[#df5232] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c9472a]"
          >
            Explore studios
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </main>
  );
}
