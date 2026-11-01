"use client";

import React from "react";
import BookNowButton from "./BookNowButton";

interface BookingPanelProps {
  user?: {
    name: string;
    email: string;
  };
  selectedStudio: {
    maxCapacity: number;
    hourlyRate: number;
    securityDeposit: number;
    [key: string]: unknown;
  };
}

const BookingPanel = ({ user, selectedStudio }: BookingPanelProps) => {
  const [selectedDate, setSelectedDate] = React.useState("");
  const [guestCount, setGuestCount] = React.useState("1");
  // console.log("studioData in BookingPanel:", selectedStudio);
  // console.log("user in BookingPanel:", user?.email);

  return (
    <>
      <div className="mt-8 grid gap-4">
        <label className="text-[11px] font-medium uppercase tracking-wide">
          Date
          <input
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            className="mt-2 w-full rounded-md border border-stone-300 bg-[#f7f5f1] px-3 py-3 text-sm outline-none"
          />
        </label>
        <label className="text-[11px] font-medium uppercase tracking-wide">
          Guests
          <select
            value={guestCount}
            onChange={(event) => setGuestCount(event.target.value)}
            className="mt-2 w-full rounded-md border border-stone-300 bg-[#f7f5f1] px-3 py-3 text-sm outline-none"
          >
            <option value="1">1 guest</option>
            <option value={String(selectedStudio.maxCapacity)}>
              {selectedStudio.maxCapacity} guests
            </option>
          </select>
        </label>
      </div>

      <BookNowButton
        user={user}
        selectedStudio={selectedStudio}
        selectedDate={selectedDate}
        guestCount={guestCount}
      />
    </>
  );
};

export default BookingPanel;
