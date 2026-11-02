"use client";
import React from "react";
import BookDialog from "./BookDialog";
import { useToastManager } from "@/components/ui/toast";
interface BookNowButtonProps {
  user?: {
    name: string;
    email: string;
  };
  selectedStudio: {
    [key: string]: unknown;
  };
  selectedDate: string;
  guestCount: string;
}

const BookNowButton = ({
  user,
  selectedStudio,
  selectedDate,
  guestCount,
}: BookNowButtonProps) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const toastManager = useToastManager();

  const handleBookNow = () => {
    if (!user?.email) {
      toastManager.add({
        title: "Sign in to book",
        description: "Please sign in before requesting a workspace.",
        type: "warning",
      });
      return;
    }
    if (!selectedDate) {
      toastManager.add({
        title: "Choose a date",
        description: "Select a booking date before continuing.",
        type: "warning",
      });
      return;
    }
    setDialogOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleBookNow}
        type="button"
        className="mt-6 w-full rounded-lg bg-[#df5232] px-5 py-4 text-sm font-semibold text-white hover:bg-[#c9472a]"
      >
        Book workspace now
      </button>
      <BookDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedStudio={selectedStudio}
        selectedDate={selectedDate}
        guestCount={guestCount}
        user={user}
      />
    </div>
  );
};

export default BookNowButton;
