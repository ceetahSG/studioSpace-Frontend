"use client";

import { redirect } from "next/navigation";

type CancelBookingProps = {
  bookingId: string;
};

const CancelBooking = ({ bookingId }: CancelBookingProps) => {
  const handleCancelBooking = async (bookingId: string) => {
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      console.log("Booking cancelled successfully");
      redirect("/my-bookings");
    }
  };
  return (
    <div>
      <button
        onClick={() => handleCancelBooking(bookingId)}
        type="button"
        className="mt-5 w-full rounded-lg border border-[#df5232] px-4 py-3 text-sm font-semibold text-[#df5232] transition-colors hover:bg-[#fff3ef]"
      >
        Cancel booking
      </button>
    </div>
  );
};

export default CancelBooking;
