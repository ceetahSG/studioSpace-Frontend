"use client";
import React from "react";
import BookDialog from "./BookDialog";
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

  const handleBookNow = () => {
    // console.log("User:", user?.email);
    // console.log("Selected Studio:", selectedStudio);
    // console.log("Selected Date:", selectedDate);
    // console.log("Guest Count:", guestCount);
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
