import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import DeleteListing from "@/components/DeleteListing";
import EditListing from "@/components/EditListing";

type Listing = {
  _id: string;
  studioTitle: string;
  category: string;
  description: string;
  city: "Dhaka";
  address: string;
  hourlyRate: string;
  securityDeposit: string;
  maximumCapacity: string;
  imageLink: string;
  amenities: string[];
  hostName: string;
  hostEmail: string;
  status: "Active" | "Draft";
  rating: number;
};

export default async function MyListingPage() {
  const res = await fetch("http://localhost:5000/studios/sajim@gmail.com");
  const listings = await res.json();
  return (
    <main className="min-h-screen bg-[#f7f6f2] px-6 py-12 text-[#071a2e] sm:px-8 lg:px-9 lg:py-12">
      <div className="mx-auto max-w-[1214px]">
        <header className="flex flex-col gap-7 border-b border-[#deddd7] pb-9 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#df5232]">
              Host collection
            </p>
            <h1 className="mt-2 text-[38px] font-normal leading-none tracking-[-0.06em] text-[#061a2e] sm:text-[44px]">
              My studio listings
            </h1>
            <p className="mt-4 text-[15px] text-[#68717a]">
              Manage your creative spaces and keep your listings up to date.
            </p>
          </div>

          <Link
            href="/add-studio"
            className="inline-flex h-12 items-center justify-center gap-3 self-start rounded-md bg-[#df5232] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#c9472a] sm:self-auto"
          >
            Add a studio
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </Link>
        </header>

        <section
          aria-label="Listing summary"
          className="flex gap-16 border-b border-[#deddd7] py-6 sm:gap-24"
        >
          <Metric value={listings.length} label="Total listings" />
          <Metric value={listings.length} label="Active listings" />
          <Metric value="1,284" label="Total views" />
        </section>

        {listings.length === 0 ? (
          <div className="mt-10 rounded-xl border border-stone-200 bg-white p-10 text-center shadow-[0_12px_35px_rgba(27,25,22,0.05)]">
            <CalendarDays
              className="mx-auto size-8 text-[#df5232]"
              strokeWidth={1.5}
            />
            <h2 className="mt-5 text-2xl tracking-[-0.05em] text-stone-900">
              No studio listings yet
            </h2>
            <p className="mt-3 text-sm text-stone-500">
              Add your first creative space and start welcoming new clients.
            </p>
            <Link
              href="/add-studio"
              className="mt-7 inline-flex rounded-lg bg-[#df5232] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9472a]"
            >
              Add a studio
            </Link>
          </div>
        ) : (
          <div className="mt-5 overflow-x-auto rounded-lg border border-[#deddd7] bg-[#fbfaf7]">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[minmax(330px,1.8fr)_minmax(180px,1fr)_minmax(115px,.65fr)_minmax(115px,.65fr)_125px] items-center border-b border-[#deddd7] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.04em] text-[#68717a]">
                <span>Studio</span>
                <span>Category</span>
                <span>Rate</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {listings.map((listing: Listing) => (
                <div
                  key={listing.studioTitle}
                  className="grid grid-cols-[minmax(330px,1.8fr)_minmax(180px,1fr)_minmax(115px,.65fr)_minmax(115px,.65fr)_125px] items-center border-b border-[#deddd7] px-5 py-3.5 text-[11px] last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={listing.imageLink}
                      alt=""
                      className="h-11 w-14 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#071a2e]">
                        {listing.studioTitle}
                      </p>
                      <p className="mt-0.5 text-[9px] text-[#68717a]">
                        {listing.city}
                      </p>
                    </div>
                  </div>
                  <span className="text-[#071a2e]">{listing.category}</span>
                  <span className="font-semibold text-[#071a2e]">
                    {listing.rating}
                  </span>
                  <span>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[9px] ${
                        listing.status === "Active"
                          ? "bg-[#f8eee0] text-[#b77b35]"
                          : "bg-[#e7f1ee] text-[#4c927d]"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </span>
                  <div className="flex gap-1.5">
                    <EditListing studioId={listing._id} />
                    <DeleteListing studioId={listing._id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[20px] leading-none tracking-[-0.04em] text-[#071a2e]">
        {value}
      </p>
      <p className="mt-1 text-[9px] text-[#68717a]">{label}</p>
    </div>
  );
}
