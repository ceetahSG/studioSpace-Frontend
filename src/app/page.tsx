import { Suspense } from "react";
import Hero from "@/components/Hero";
import FeatureStudios from "@/components/FeatureStudios";
import HowItWorks from "@/components/HowItWorks";
import HostFeature from "@/components/HostFeature";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<FeaturedStudiosLoading />}>
        <FeatureStudios />
      </Suspense>
      <HowItWorks />
      <HostFeature />
      <FinalCta />
    </>
  );
}

function FeaturedStudiosLoading() {
  return (
    <section className="bg-[#f7f5f1] px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-330 animate-pulse border-t border-stone-300 pt-8">
        <div className="h-8 w-72 rounded bg-stone-200" />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          <div className="h-96 rounded-lg bg-stone-200" />
          <div className="h-96 rounded-lg bg-stone-200" />
          <div className="h-96 rounded-lg bg-stone-200" />
        </div>
      </div>
    </section>
  );
}
