import { Check, Clock3, Search, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover spaces",
    description: "Find a studio that matches your creative vision.",
    icon: Search,
  },
  {
    number: "02",
    title: "Select your hours",
    description: "Choose your date and preferred production hours.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Book your space",
    description: "Confirm with clear, transparent pricing.",
    icon: Check,
  },
  {
    number: "04",
    title: "Create something great",
    description: "Arrive, create, and bring your ideas to life.",
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f7f5f1] py-24 lg:py-32">
      <div className="mx-auto max-w-330 px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
          Simple by design
        </p>
        <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] text-stone-900 sm:text-5xl">
          From search to set in four steps.
        </h2>
        <div className="mt-14 grid border-t border-stone-300 md:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="min-h-44 border-b border-stone-300 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">{step.number}</span>
                  <Icon className="size-5 text-[#df5232]" strokeWidth={1.7} />
                </div>
                <h3 className="mt-11 text-[18px] tracking-[-0.04em] text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-52 text-[13px] leading-5 text-stone-500">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
