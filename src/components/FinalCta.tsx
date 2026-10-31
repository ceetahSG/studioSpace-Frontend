import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="bg-[#f7f5f1] px-6 py-28 text-center lg:py-36">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
        The room is waiting
      </p>
      <h2 className="mx-auto mt-5 max-w-180 text-5xl font-medium leading-[0.98] tracking-[-0.07em] text-stone-900 sm:text-6xl">
        Make room for your
        <br />
        <em className="font-serif font-medium tracking-[-0.08em]">
          next big idea.
        </em>
      </h2>
      <p className="mt-7 text-base text-stone-500">
        Your perfect production space is closer than you think.
      </p>
      <Link
        href="#explore"
        className="mt-8 inline-flex items-center gap-4 rounded-lg bg-stone-900 px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-stone-700"
      >
        Explore studios
        <ArrowRight className="size-4" strokeWidth={1.8} />
      </Link>
    </section>
  );
}
