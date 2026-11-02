"use client";
import { type FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUp, Check, ChevronRight, Sparkles, Wifi } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import getTokenFromClient from "@/lib/getTokenFromClient";
import { redirect } from "next/navigation";
import { useToastManager } from "@/components/ui/toast";
import { Studio } from "@/app/explore-studios/[id]/page";

const amenities = [
  "High-speed Wi-Fi",
  "Air conditioning",
  "Lighting equipment",
  "Soundproofing",
  "Free parking",
  "Makeup room",
  "Green screen",
  "Camera equipment",
];

const inputClass =
  "mt-2 h-12 w-full rounded-md border border-stone-200 bg-[#faf9f6] px-4 text-sm text-stone-700 outline-none placeholder:text-stone-400";

const sectionClass =
  "grid gap-8 border-t border-stone-200 py-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10";

export default function EditStudioForm({ studio }: { studio: Studio }) {
  const [studioTitle, setStudioTitle] = useState(studio.title);
  const [category, setCategory] = useState(studio.category);
  const [description, setDescription] = useState(studio.overview);
  const [city, setCity] = useState(studio.location);
  const [address, setAddress] = useState(studio.address);
  const [hourlyRate, setHourlyRate] = useState(studio.hourlyRate.toString());
  const [securityDeposit, setSecurityDeposit] = useState(
    studio.securityDeposit.toString(),
  );
  const [maximumCapacity, setMaximumCapacity] = useState(
    studio.maxCapacity.toString(),
  );
  const [imageLink, setImageLink] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    ...(Array.isArray(studio.amenities) ? studio.amenities : []),
  ]);
  const [rating, setRating] = useState(studio.rating);
  const [hostName, setHostName] = useState(studio.ownerName);
  const [hostEmail, setHostEmail] = useState(studio.ownerEmail);
  const toastManager = useToastManager();

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((current) =>
      current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity],
    );
  };
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const handleEditStudio = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      ...Object.fromEntries(formData.entries()),
      amenities: formData.getAll("amenities"),
      rating: 0.0,
    };
    // console.log("Studio data to be published:", userData);
    const token = await getTokenFromClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/studio/${studio._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      },
    );
    if (!res.ok) {
      if (error && typeof error === "object" && "digest" in error) throw error;
      toastManager.add({
        title: "Update failed",
        description: "The studio could not be updated. Please try again.",
        type: "error",
      });
      // console.error("Error publishing studio:", res);
      return;
    }
    // console.log("Studio Edited successfully:", await res.json());
    toastManager.add({
      title: "Studio updated",
      description: "Your listing changes have been saved.",
      type: "success",
    });
    redirect("/my-listing");
  };

  return (
    <section className="min-h-screen bg-[#f7f6f2] text-stone-900">
      <div className="mx-auto max-w-245 px-6 pb-10 pt-10 lg:px-0">
        <nav className="flex items-center gap-2 text-[12px] text-stone-500">
          <Link href="/" className="transition-colors hover:text-stone-900">
            Dashboard
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={1.5} />
          <span>Edit studio</span>
        </nav>

        <header className="mt-10 flex items-end justify-between border-b border-stone-200 pb-9">
          <div>
            <h1 className="text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
              Bring your space to life.
            </h1>
            <p className="mt-3 text-base text-stone-500">
              Share your creative environment with people who need it.
            </p>
          </div>
          <span className="hidden pb-1 text-[11px] text-stone-500 sm:block">
            Draft autosaved
          </span>
        </header>

        <form onSubmit={handleEditStudio}>
          <div className={sectionClass}>
            <SectionIntro
              number="01"
              title="Basic information"
              description="Help creators understand what makes your space special."
            />
            <div className="grid gap-6">
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  name="studioTitle"
                  label="Studio title"
                  placeholder="e.g. The White Room"
                  value={studioTitle}
                  onChange={setStudioTitle}
                />
                <Field
                  name="category"
                  label="Category"
                  value={category}
                  onChange={setCategory}
                  select
                />
              </div>
              <label className="text-xs font-medium text-stone-700">
                Detailed description
                <textarea
                  name="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="mt-2 min-h-38 w-full resize-y rounded-md border border-stone-200 bg-[#faf9f6] p-4 text-sm leading-6 text-stone-700 outline-none"
                />
                <span className="mt-2 block text-[11px] font-normal text-stone-500">
                  Give creators enough detail to plan their production. Minimum
                  80 characters.
                </span>
              </label>
            </div>
          </div>

          <div className={sectionClass}>
            <SectionIntro
              number="02"
              title="Location"
              description="Your exact address is only shared after a booking is confirmed."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="city" label="City" value={city} onChange={setCity} />
              <Field
                name="address"
                label="Full address"
                placeholder="Street, area, postal code"
                value={address}
                onChange={setAddress}
              />
            </div>
          </div>

          <div className={sectionClass}>
            <SectionIntro
              number="03"
              title="Pricing & capacity"
              description="Set clear rates and a comfortable working capacity."
            />
            <div className="grid gap-5 md:grid-cols-3">
              <Field
                name="hourlyRate"
                label="Hourly rate (USD)"
                value={hourlyRate}
                onChange={setHourlyRate}
              />
              <Field
                name="securityDeposit"
                label="Security deposit (USD)"
                value={securityDeposit}
                onChange={setSecurityDeposit}
              />
              <Field
                name="maximumCapacity"
                label="Maximum capacity"
                value={maximumCapacity}
                onChange={setMaximumCapacity}
              />
            </div>
          </div>

          <div className={sectionClass}>
            <SectionIntro
              number="04"
              title="Studio images"
              description="Listings with at least five high-quality images receive more bookings."
            />
            <label className="text-xs font-medium text-stone-700">
              Image link
              <input
                name="imageLink"
                type="url"
                value={imageLink}
                onChange={(event) => setImageLink(event.target.value)}
                placeholder="https://example.com/studio-image.jpg"
                className={inputClass}
              />
              <span className="mt-2 block text-[11px] font-normal text-stone-500">
                Paste a direct JPG or PNG image URL.
              </span>
            </label>
          </div>

          <div className={sectionClass}>
            <SectionIntro
              number="05"
              title="Amenities"
              description="Select everything included in the hourly rate."
            />
            <div className="grid gap-2 sm:grid-cols-2">
              {amenities.map((amenity, index) => (
                <button
                  type="button"
                  key={amenity}
                  onClick={() => toggleAmenity(amenity)}
                  className={`flex h-13 items-center gap-3 rounded-md border px-4 text-left text-xs ${
                    selectedAmenities.includes(amenity)
                      ? "border-[#df5232] bg-[#fffaf8] text-stone-800"
                      : "border-stone-200 bg-white text-stone-500"
                  }`}
                >
                  {index === 0 ? (
                    <Wifi className="size-4 text-[#df5232]" strokeWidth={1.5} />
                  ) : index < 3 ? (
                    <Sparkles
                      className="size-4 text-[#df5232]"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Check
                      className="size-4 text-[#df5232]"
                      strokeWidth={1.5}
                    />
                  )}
                  {amenity}
                </button>
              ))}
              {selectedAmenities.map((amenity) => (
                <input
                  key={amenity}
                  type="hidden"
                  name="amenities"
                  value={amenity}
                />
              ))}
            </div>
          </div>

          <div className={sectionClass}>
            <SectionIntro
              number="06"
              title="Host information"
              description="This information comes from your StudioSpace profile."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                name="hostName"
                label="Host name"
                value={session?.user?.name || hostName}
                onChange={setHostName}
              />
              <Field
                name="hostEmail"
                label="Host email"
                value={session?.user?.email || hostEmail}
                onChange={setHostEmail}
              />
            </div>
          </div>

          <footer className="flex justify-end gap-3 border-t border-stone-200 pt-6">
            <button
              type="button"
              className="rounded-md border border-stone-200 bg-white px-5 py-3 text-sm text-stone-900"
            >
              Save draft
            </button>
            <button
              type="submit"
              className="flex items-center gap-3 rounded-md bg-[#df5232] px-5 py-3 text-sm font-semibold text-white"
            >
              Edit studio
              <ArrowUp className="size-4 rotate-45" />
            </button>
          </footer>
        </form>
      </div>
    </section>
  );
}

function SectionIntro({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <span className="pt-1 text-[11px] font-semibold tracking-widest text-[#df5232]">
          {number}
        </span>
        <h2 className="text-lg tracking-[-0.03em]">{title}</h2>
      </div>
      <p className="mt-3 max-w-52 pl-7 text-xs leading-5 text-stone-500 md:pl-7">
        {description}
      </p>
    </div>
  );
}

function Field({
  name,
  label,
  value,
  placeholder,
  onChange,
  select = false,
}: {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  select?: boolean;
}) {
  return (
    <label className="text-xs font-medium text-stone-700">
      {label}
      {select ? (
        <select
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        >
          <option>Photography Studio</option>
          <option>Music Studio</option>
          <option>Production Space</option>
        </select>
      ) : (
        <input
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </label>
  );
}
