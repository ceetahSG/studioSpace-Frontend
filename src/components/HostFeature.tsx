import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Verified creator profiles",
  "Transparent booking management",
  "Equipment and space safety",
  "Dedicated host support",
];

export default function HostFeature() {
  return (
    <section
      id="list-your-space"
      className="bg-[#202220] py-16 text-stone-100 lg:py-20"
    >
      <div className="mx-auto grid max-w-330 items-center gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:px-8">
        <div className="relative">
          <div
            className="aspect-[0.95] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85')",
            }}
          />
          <span className="absolute -bottom-3 right-[-0.5rem] rounded-md bg-stone-100 px-4 py-3 text-[10px] font-medium uppercase tracking-wide text-stone-800 shadow-lg sm:right-[-1.25rem]">
            Built for independent hosts
          </span>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18768]">
            For space owners
          </p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.03] tracking-[-0.06em] sm:text-5xl">
            Your space. Your terms.
            <br />
            <em className="font-serif font-medium tracking-[-0.07em]">
              Your creative community.
            </em>
          </h2>
          <p className="mt-7 max-w-130 text-base leading-7 text-stone-300">
            Turn your studio into a thriving creative destination with tools
            designed around how production really works.
          </p>
          <ul className="mt-8 grid gap-4 text-[13px] sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex size-6 items-center justify-center rounded-full border border-stone-600">
                  <Check className="size-3 text-stone-300" strokeWidth={1.8} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            href="add-studio"
            className="mt-9 inline-flex items-center gap-4 rounded-lg bg-[#df5232] px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#c9472a]"
          >
            Become a host
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
