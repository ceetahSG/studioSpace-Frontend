"use client";

import { redirect } from "next/navigation";
import { useToastManager } from "@/components/ui/toast";

type CancelBookingProps = {
  bookingId: string;
};

const CancelBooking = ({ bookingId }: CancelBookingProps) => {
  const toastManager = useToastManager();
  const handleCancelBooking = async (bookingId: string) => {
    try {
      const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("The booking could not be cancelled.");
      toastManager.add({
        title: "Booking cancelled",
        description: "Your booking has been cancelled.",
        type: "success",
      });
      redirect("/my-bookings");
    } catch (error) {
      if (error && typeof error === "object" && "digest" in error) throw error;
      toastManager.add({
        title: "Cancellation failed",
        description: error instanceof Error ? error.message : "Please try again.",
        type: "error",
      });
      console.error("Failed to cancel booking:", error);
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
