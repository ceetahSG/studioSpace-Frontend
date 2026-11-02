import { Suspense } from "react";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import FeatureStudios from "@/components/FeatureStudios";
import HowItWorks from "@/components/HowItWorks";
import HostFeature from "@/components/HostFeature";
import FinalCta from "@/components/FinalCta";
import BrandedLoader from "@/components/BrandedLoader";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<FeaturedStudiosLoading />}>
        <FeatureStudios />
      </Suspense>
      <Category />
      <HowItWorks />
      <HostFeature />
      <FinalCta />
    </>
  );
}

function FeaturedStudiosLoading() {
  return <BrandedLoader label="Curating featured studios" />;
}
