import Link from "next/link";
import {
  CalendarDays,
  Check,
  Clock3,
  Heart,
  MapPin,
  Share2,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

type Studio = {
  _id: string;
  title: string;
  category: string;
  hourlyRate: number;
  securityDeposit: number;
  maxCapacity: number;
  location: string;
  address: string;
  images: string[];
  amenities: string[];
  overview: string;
  ownerName: string;
  ownerEmail: string;
  rating: number;
  reviewCount: number;
  status: string;
};

export default async function StudioDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`http://localhost:5000/studio/${id}`);
  const studioData: Studio = await response.json();
  console.log("Studio Data:", studioData);

  return (
    <section className="bg-[#f7f5f1] text-stone-900">
      <div className="mx-auto max-w-360 px-6 pb-24 pt-6 lg:px-8 lg:pb-32">
        <nav className="flex items-center gap-3 text-[12px] text-stone-500">
          <Link href="/" className="hover:text-stone-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/explore-studios" className="hover:text-stone-900">
            Studios
          </Link>
          <span>/</span>
          <span className="text-stone-700">{studioData.title}</span>
        </nav>

        <header className="mt-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
              {studioData.category}
            </p>
            <h1 className="mt-4 text-5xl font-medium tracking-[-0.07em] sm:text-6xl">
              {studioData.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <MapPin className="size-4" strokeWidth={1.6} />
              <span>{studioData.location}</span>
              <span className="text-stone-300">·</span>
              <Star className="size-4 fill-[#df5232] text-[#df5232]" />
              <strong className="font-medium text-stone-900">
                {studioData.rating.toFixed(1)}
              </strong>
              <span>({studioData.reviewCount})</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-3 text-[13px] hover:border-stone-500"
            >
              <Share2 className="size-4" />
              Share
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-3 text-[13px] hover:border-stone-500"
            >
              <Heart className="size-4 fill-stone-900" />
              Save
            </button>
          </div>
        </header>

        <div className="mt-9 grid h-[min(510px,55vw)] min-h-80 grid-cols-2 grid-rows-2 gap-1.5 overflow-hidden rounded-lg lg:grid-cols-[1.5fr_0.75fr_0.75fr]">
          <div
            className="row-span-2 bg-cover bg-center lg:col-span-1"
            style={{ backgroundImage: `url('${studioData.images[0]}')` }}
          />
          {[1, 2, 3, 4].map((image) => (
            <div
              key={image}
              className={`hidden bg-cover bg-center sm:block ${
                image === 1 ? "lg:col-start-2" : ""
              }`}
              style={{ backgroundImage: `url('${studioData.images[image]}')` }}
            />
          ))}
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
          <div>
            <section className="border-b border-stone-300 pb-10">
              <div className="flex items-center justify-between gap-6">
                <h2 className="text-2xl tracking-[-0.05em]">
                  A refined production space for focused work.
                </h2>
                <span className="hidden text-sm text-stone-500 sm:block">
                  Hosted by {studioData.ownerName} · Professional host
                </span>
              </div>
              <div className="mt-7 grid gap-3 rounded-lg bg-[#eeece6] p-5 text-sm sm:grid-cols-3">
                <span className="flex items-center gap-3">
                  <Users className="size-5" />
                  Up to {studioData.maxCapacity} guests
                </span>
                <span className="flex items-center gap-3">
                  <CalendarDays className="size-5" />
                  Flexible booking
                </span>
                <span className="flex items-center gap-3">
                  <Clock3 className="size-5" />
                  {studioData.status}
                </span>
              </div>
            </section>

            <section className="border-b border-stone-300 py-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#59665d] text-sm font-medium text-white">
                    {studioData.ownerName
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <p className="text-sm">
                      Hosted by <strong>{studioData.ownerName}</strong>
                    </p>
                    <p className="mt-1 text-[12px] text-stone-500">
                      {studioData.ownerEmail}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-[13px] hover:border-stone-500"
                >
                  Contact host
                </button>
              </div>
            </section>

            <section className="border-b border-stone-300 py-10">
              <h2 className="text-2xl tracking-[-0.05em]">About this space</h2>
              <p className="mt-6 max-w-180 whitespace-pre-line text-[15px] leading-7 text-stone-500">
                {studioData.overview}
              </p>
            </section>

            <section className="border-b border-stone-300 py-10">
              <h2 className="text-2xl tracking-[-0.05em]">
                What this space offers
              </h2>
              <ul className="mt-7 grid gap-5 text-sm sm:grid-cols-2">
                {studioData.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-3">
                    <Check className="size-4 text-stone-800" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-10">
              <h2 className="text-2xl tracking-[-0.05em]">
                Where you&apos;ll create
              </h2>
              <p className="mt-5 text-[15px] text-stone-500">
                {studioData.address}
              </p>
              <div className="mt-7 flex h-64 items-center justify-center rounded-lg bg-[linear-gradient(#e3e1da_1px,transparent_1px),linear-gradient(90deg,#e3e1da_1px,transparent_1px)] bg-[length:38px_38px]">
                <div className="flex items-center gap-2 rounded-lg bg-[#df5232] px-4 py-3 text-xs font-medium text-white shadow-lg">
                  <MapPin className="size-4" />
                  {studioData.title}
                </div>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-xl border border-stone-200 bg-white p-7 shadow-[0_12px_35px_rgba(27,25,22,0.08)] lg:sticky lg:top-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-3xl font-semibold">
                ${studioData.hourlyRate}
                <span className="text-sm font-normal text-stone-500">
                  {" "}
                  / hour
                </span>
              </p>
              <span className="flex items-center gap-1 text-sm text-stone-500">
                <Star className="size-4 fill-[#df5232] text-[#df5232]" />
                {studioData.rating.toFixed(1)} ({studioData.reviewCount})
              </span>
            </div>
            <div className="mt-8 grid gap-4">
              <label className="text-[11px] font-medium uppercase tracking-wide">
                Date
                <input
                  type="date"
                  className="mt-2 w-full rounded-md border border-stone-300 bg-[#f7f5f1] px-3 py-3 text-sm outline-none"
                />
              </label>
              <label className="text-[11px] font-medium uppercase tracking-wide">
                Guests
                <select className="mt-2 w-full rounded-md border border-stone-300 bg-[#f7f5f1] px-3 py-3 text-sm outline-none">
                  <option>1 guest</option>
                  <option>{studioData.maxCapacity} guests</option>
                </select>
              </label>
            </div>
            <div className="mt-7 space-y-4 border-y border-stone-200 py-5 text-sm text-stone-500">
              <div className="flex justify-between">
                <span>Studio fee</span>
                <span>${studioData.hourlyRate}</span>
              </div>
              <div className="flex justify-between">
                <span>Refundable security deposit</span>
                <span>${studioData.securityDeposit}</span>
              </div>
              <div className="flex justify-between font-semibold text-stone-900">
                <span>Estimated total</span>
                <span>
                  ${studioData.hourlyRate + studioData.securityDeposit}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-[#df5232] px-5 py-4 text-sm font-semibold text-white hover:bg-[#c9472a]"
            >
              Book workspace now
            </button>
            <p className="mt-4 flex items-center gap-2 text-[11px] text-stone-500">
              <ShieldCheck className="size-4" />
              Your card won&apos;t be charged until the host confirms.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
