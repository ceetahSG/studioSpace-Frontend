"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Camera, MapPin, Search } from "lucide-react";

const studioTypes = [
  { label: "Photo Studio", value: "Photo Studio" },
  { label: "Film Stage", value: "Film Stage" },
  { label: "Podcast Lounge", value: "Podcast Lounge" },
  { label: "Music Suite", value: "Music Suite" },
  { label: "Art Workshop", value: "Art Workshop" },
];

export default function SearchCategory() {
  const router = useRouter();
  const [studioType, setStudioType] = useState(studioTypes[0].value);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/filteredstudios/${encodeURIComponent(studioType)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid max-w-330 gap-4 rounded-xl bg-white p-3 shadow-[0_12px_35px_rgba(27,25,22,0.12)] md:grid-cols-[1fr_1.2fr_1fr_auto] md:gap-0 md:p-3"
    >
      <label className="flex min-h-14 items-center gap-3 px-5">
        <MapPin className="size-4 shrink-0 text-stone-800" strokeWidth={1.7} />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wide text-stone-900">
            Location
          </span>
          <span className="text-[13px] text-stone-500">Dhaka</span>
        </span>
      </label>

      <label className="flex min-h-14 items-center gap-3 border-stone-200 px-5 md:border-l">
        <Camera className="size-4 shrink-0 text-stone-800" strokeWidth={1.7} />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wide text-stone-900">
            Studio type
          </span>
          <select
            value={studioType}
            onChange={(event) => setStudioType(event.target.value)}
            aria-label="Studio type"
            className="w-full appearance-none bg-transparent text-[13px] text-stone-500 outline-none"
          >
            {studioTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </span>
      </label>

      <label className="flex min-h-14 items-center gap-3 border-stone-200 px-5 md:border-l">
        <CalendarDays
          className="size-4 shrink-0 text-stone-800"
          strokeWidth={1.7}
        />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wide text-stone-900">
            Booking date
          </span>
          <input
            type="date"
            aria-label="Booking date"
            className="w-full bg-transparent text-[13px] text-stone-500 outline-none"
          />
        </span>
      </label>

      <button
        type="submit"
        className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#df5232] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#c9472a]"
      >
        <Search className="size-4" strokeWidth={2} />
        Search spaces
      </button>
    </form>
  );
}
