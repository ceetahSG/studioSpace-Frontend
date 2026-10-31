import React from "react";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Star } from "lucide-react";
export type Studio = {
  _id: string;
  title: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  images?: string[];
};

const FeatureStudiosCard = ({ studio }: { studio: Studio }) => {
  return (
    <article className="group">
      <div className="relative aspect-[1.35] overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: studio.images?.[0]
              ? `url('${studio.images[0]}')`
              : undefined,
          }}
        />
        <button
          type="button"
          className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-white text-[#df5232] transition-colors hover:bg-[#df5232] hover:text-white"
          aria-label={`Save ${studio.title}`}
        >
          <Heart className="size-5" fill="currentColor" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#df5232]">
            {studio.category}
          </p>
          <span className="flex items-center gap-1 text-[12px] text-stone-500">
            <Star className="size-3.5 fill-[#df5232] text-[#df5232]" />
            <strong className="font-medium text-stone-900">
              {studio.rating.toFixed(1)}
            </strong>
            ({studio.reviewCount})
          </span>
        </div>
        <h3 className="mt-3 text-xl tracking-[-0.04em] text-stone-900">
          {studio.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-[13px] text-stone-500">
          <MapPin className="size-4" strokeWidth={1.5} />
          {studio.location}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-stone-300 pt-4">
          <p className="text-[16px] font-medium text-stone-900">
            ${studio.hourlyRate}{" "}
            <span className="text-[12px] font-normal text-stone-500">
              / hour
            </span>
          </p>
          <Link
            href={`/explore-studios/${studio._id}`}
            className="flex items-center gap-2 text-[12px] text-stone-900 transition-colors hover:text-[#df5232]"
          >
            View details
            <ArrowRight className="size-4" strokeWidth={1.7} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeatureStudiosCard;
