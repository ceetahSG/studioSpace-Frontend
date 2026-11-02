import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import CancelBooking from "@/components/CancelBooking";

type Booking = {
  _id?: string;
  id?: string;
  studioId?: string;
  studioTitle?: string;
  title?: string;
  date?: string;
  guestCount?: number | string;
  status?: string;
  image?: string;
  studioImage?: string;
  img?: string;
  location?: string;
  createdAt?: string;
};

const formatDate = (date?: string) => {
  if (!date) return "Date not selected";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const getStatusStyles = (status?: string) => {
  switch (status?.toLowerCase()) {
    case "confirmed":
      return "bg-emerald-50 text-emerald-700";
    case "cancelled":
    case "rejected":
      return "bg-red-50 text-red-700";
    default:
      return "bg-[#f3eee8] text-[#a34c32]";
  }
};

export default async function MyBookingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${session?.user?.email}`,
  );
  const bookingData = await res.json();
  console.log("Bookings Data:", bookingData);

  let loadError = false;

  return (
    <section className="bg-[#f7f5f1] pb-24 pt-5 lg:pb-32">
      <div className="mx-auto max-w-360 px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 text-[12px] text-stone-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-stone-900">
            Home
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={1.5} />
          <span className="text-stone-700">My bookings</span>
        </nav>

        <header className="mt-16 border-b border-stone-300 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
            Your reservations
          </p>
          <h1 className="mt-5 text-5xl font-medium tracking-[-0.07em] text-stone-900 sm:text-6xl">
            My bookings.
          </h1>
          <p className="mt-4 max-w-xl text-base text-stone-500">
            Keep track of your upcoming creative sessions and booking requests.
          </p>
        </header>

        {loadError ? (
          <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
            We couldn&apos;t load your bookings right now. Please try again
            later.
          </div>
        ) : bookingData.length === 0 ? (
          <div className="mt-10 rounded-xl border border-stone-200 bg-white p-10 text-center shadow-[0_12px_35px_rgba(27,25,22,0.05)]">
            <CalendarDays
              className="mx-auto size-8 text-[#df5232]"
              strokeWidth={1.5}
            />
            <h2 className="mt-5 text-2xl tracking-[-0.05em] text-stone-900">
              No bookings yet
            </h2>
            <p className="mt-3 text-sm text-stone-500">
              Find a studio and request your first creative session.
            </p>
            <Link
              href="/explore-studios"
              className="mt-7 inline-flex rounded-lg bg-[#df5232] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9472a]"
            >
              Explore studios
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {bookingData.map((booking: Booking, index: number) => {
              const bookingId = booking._id ?? booking.id ?? String(index);
              const title =
                booking.studioTitle ?? booking.title ?? "Creative workspace";
              const image = booking.img;

              return (
                <article
                  key={bookingId}
                  className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_12px_35px_rgba(27,25,22,0.06)]"
                >
                  <div className="relative h-52 bg-[#e8e4dc]">
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="size-full object-cover"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-[linear-gradient(#e3e1da_1px,transparent_1px),linear-gradient(90deg,#e3e1da_1px,transparent_1px)] bg-[length:34px_34px]">
                        <CalendarDays
                          className="size-10 text-stone-400"
                          strokeWidth={1.2}
                        />
                      </div>
                    )}
                    <span
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold capitalize ${getStatusStyles(booking.status)}`}
                    >
                      {booking.status ?? "pending"}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="truncate text-xl font-medium tracking-[-0.04em] text-stone-900">
                      {title}
                    </h2>
                    {booking.location && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-stone-500">
                        <MapPin className="size-4" strokeWidth={1.6} />
                        {booking.location}
                      </p>
                    )}

                    <div className="mt-6 grid gap-3 border-y border-stone-200 py-5 text-sm text-stone-500">
                      <p className="flex items-center gap-3">
                        <CalendarDays
                          className="size-4 text-stone-700"
                          strokeWidth={1.6}
                        />
                        {formatDate(booking.date)}
                      </p>
                      <p className="flex items-center gap-3">
                        <Clock3
                          className="size-4 text-stone-700"
                          strokeWidth={1.6}
                        />
                        10:00 AM–2:00 PM
                      </p>
                      <p className="flex items-center gap-3">
                        <Users
                          className="size-4 text-stone-700"
                          strokeWidth={1.6}
                        />
                        {booking.guestCount ?? 1}{" "}
                        {String(booking.guestCount ?? 1) === "1"
                          ? "guest"
                          : "guests"}
                      </p>
                    </div>

                    <p className="mt-5 text-xs leading-5 text-stone-500">
                      Your host will respond to this request. You won&apos;t be
                      charged until the booking is confirmed.
                    </p>

                    <CancelBooking bookingId={bookingId}></CancelBooking>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
