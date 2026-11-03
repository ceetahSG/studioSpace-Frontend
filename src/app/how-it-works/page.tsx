import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";

const creatorSteps = [
  {
    number: "01",
    icon: Search,
    title: "Search with purpose",
    description:
      "Browse a considered collection of creative spaces and filter by the kind of work you want to make.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Choose your date",
    description:
      "Review the space details, amenities, and location, then select the day that fits your project.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Set your hours",
    description:
      "Book only the time you need with clear hourly pricing and no surprises at checkout.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Make something great",
    description:
      "Arrive ready to work, knowing your space is prepared for the ideas you brought with you.",
  },
];

const hostSteps = [
  "Create your listing with photos, details, and amenities.",
  "Set your availability and hourly rate.",
  "Connect with creators looking for a space like yours.",
  "Welcome guests and grow your creative community.",
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f7f5f1] text-stone-900">
      <section className="border-b border-stone-300 px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-330">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
            How it works
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.84] tracking-[-0.09em]">
              From first idea to final frame.
            </h1>
            <p className="max-w-sm text-sm leading-6 text-stone-500 lg:pb-2">
              A simpler way to find the right room, plan your time, and get on
              with the work that brought you there.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-330">
          <div className="flex items-end justify-between border-b border-stone-300 pb-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
                For creators
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.07em] sm:text-5xl">
                Your process, made easy.
              </h2>
            </div>
            <Check className="hidden size-8 text-[#df5232] sm:block" strokeWidth={1.4} />
          </div>
          <div className="grid border-l border-stone-300 md:grid-cols-4">
            {creatorSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="border-b border-r border-stone-300 px-6 py-8 first:border-t md:min-h-80 md:px-7 md:first:border-t-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500">{step.number}</span>
                    <Icon className="size-5 text-[#df5232]" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-16 text-xl tracking-[-0.04em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e4da] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-330 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              For hosts
            </p>
            <h2 className="mt-5 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-5xl">
              Turn your space into someone&apos;s starting point.
            </h2>
            <Link
              href="/add-studio"
              className="mt-8 inline-flex h-12 items-center gap-3 rounded-md bg-[#df5232] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c9472a]"
            >
              List your space
              <ArrowRight className="size-4" strokeWidth={1.8} />
            </Link>
          </div>
          <ol className="border-t border-stone-400">
            {hostSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-6 border-b border-stone-400 py-6 text-lg tracking-[-0.03em] sm:gap-10"
              >
                <span className="text-[11px] text-[#df5232]">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-330 flex-col items-start justify-between gap-8 rounded-2xl bg-[#151715] p-8 text-stone-100 sm:p-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-medium leading-none tracking-[-0.07em] sm:text-5xl">
              Find a space that gets your project.
            </h2>
          </div>
          <Link
            href="/explore-studios"
            className="inline-flex h-12 items-center gap-3 rounded-md bg-[#df5232] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c9472a]"
          >
            Start exploring
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </main>
  );
}
