import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

interface BookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: string;
  guestCount: string;
  user?: {
    email?: string;
  };
  selectedStudio: {
    _id?: string;
    title?: string;
    images?: string[];
  };
}

const BookDialog = ({
  open,
  onOpenChange,
  selectedDate,
  guestCount,
  selectedStudio,
  user,
}: BookDialogProps) => {
  // console.log("User:", user?.email);
  // console.log("Selected Studio:", selectedStudio._id);
  // console.log("Selected Date:", selectedDate);
  // console.log("Guest Count:", guestCount);
  // console.log("img:", selectedStudio.images?.[0]);
  const handleConfirmBooking = async () => {
    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user?.email,
        studioTitle: selectedStudio.title,
        date: selectedDate,
        guestCount: guestCount,
        studioId: selectedStudio._id,
        img: selectedStudio.images?.[0] || "",
      }),
    });
    const resBody = await res.json();
    console.log("Booking response:", resBody);
    if (res.ok) {
      console.log("Booking confirmed!");
      onOpenChange(false);
    } else {
      console.error("Failed to confirm booking.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="max-w-[calc(100%-2rem)] overflow-hidden rounded-xl p-0 sm:max-w-[480px]"
      >
        <DialogHeader className="border-b border-stone-200 px-6 py-5">
          <DialogTitle className="text-xl font-medium tracking-[-0.03em]">
            Request this workspace?
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="size-[72px] shrink-0 overflow-hidden rounded-md bg-stone-100">
              {selectedStudio.images?.[0] && (
                <img
                  src={selectedStudio.images[0]}
                  alt={selectedStudio.title ?? "Workspace"}
                  className="size-full object-cover"
                />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-stone-900">
                {selectedStudio.title ?? "Workspace"}
              </p>
              <p className="mt-1 text-sm text-stone-600">
                {selectedDate || "No date selected"} · 10:00 AM–2:00 PM ·{" "}
                {guestCount} {guestCount === "1" ? "guest" : "guests"}
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-3 rounded-md bg-[#efeee9] px-4 py-4 text-sm text-stone-500">
            <Info className="mt-0.5 size-4 shrink-0" />
            <div>
              <p className="font-semibold text-stone-500">
                Your request is ready.
              </p>
              <p className="mt-1 leading-5">
                The host usually responds within two hours. You won&apos;t be
                charged until they confirm.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-5 border-0 bg-transparent px-6 pb-5 pt-4">
          <DialogClose
            render={
              <Button
                type="button"
                variant="outline"
                className="h-12 rounded-md border-stone-200 px-5 font-normal"
              />
            }
          >
            Go back
          </DialogClose>
          <Button
            onClick={handleConfirmBooking}
            type="button"
            className="h-12 rounded-md bg-[#df5232] px-5 font-semibold text-white hover:bg-[#c9472a]"
          >
            Confirm booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookDialog;
