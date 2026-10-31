"use client";

import {
  CalendarDays,
  Camera,
  ChevronDown,
  MapPin,
  Search,
} from "lucide-react";

const fields = [
  { label: "Location", value: "Dhaka", icon: MapPin },
  { label: "Studio type", value: "All creative spaces", icon: Camera },
  { label: "Booking date", value: "", icon: CalendarDays },
];

export default function SearchCategory() {
  return (
    <form className="mx-auto grid max-w-330 gap-4 rounded-xl bg-white p-3 shadow-[0_12px_35px_rgba(27,25,22,0.12)] md:grid-cols-[1fr_1.2fr_1fr_auto] md:gap-0 md:p-3">
      {fields.map((field, index) => {
        const Icon = field.icon;
        const isDate = field.label === "Booking date";

        return (
          <label
            key={field.label}
            className={`flex min-h-14 items-center gap-3 px-5 ${
              index > 0 ? "md:border-l md:border-stone-200" : ""
            }`}
          >
            <Icon
              className="size-4 shrink-0 text-stone-800"
              strokeWidth={1.7}
            />
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-wide text-stone-900">
                {field.label}
              </span>
              {isDate ? (
                <input
                  type="date"
                  aria-label={field.label}
                  className="w-full bg-transparent text-[13px] text-stone-500 outline-none"
                />
              ) : (
                <span className="flex items-center justify-between gap-2 text-[13px] text-stone-500">
                  {field.value}
                  {field.label === "Studio type" && (
                    <ChevronDown
                      className="size-4 text-stone-500"
                      strokeWidth={1.7}
                    />
                  )}
                </span>
              )}
            </span>
          </label>
        );
      })}
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
