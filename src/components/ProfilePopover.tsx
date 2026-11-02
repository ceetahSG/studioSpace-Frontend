"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
import { useToastManager } from "@/components/ui/toast";

type ProfilePopoverProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

const ProfilePopover = ({ user }: { user: ProfilePopoverProps["user"] }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toastManager = useToastManager();

  const handleLogout = async () => {
    setOpen(false);
    const { error } = await authClient.signOut();

    if (error) {
      toastManager.add({
        title: "Logout failed",
        description: error.message || "Please try again.",
        type: "error",
      });
      console.error("Error logging out user:", error);
      return;
    }

    toastManager.add({
      title: "Signed out",
      description: "You have been safely signed out.",
      type: "success",
    });
    router.push("/");
  };
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <button
              type="button"
              className="flex flex-row flex-wrap items-center gap-6 md:gap-12"
              aria-label="Open profile menu"
            >
              <Avatar>
                <AvatarImage src={user.image} alt={user.name} />
              </Avatar>
            </button>
          }
        />
        <PopoverContent
          align="end"
          className="w-64 border-stone-200 bg-[#fbfaf7] p-2"
        >
          <PopoverHeader className="gap-1">
            <div className="border-b border-stone-200 px-3 pb-3">
              <PopoverTitle className="text-sm font-semibold text-stone-900">
                {user.name}
              </PopoverTitle>
              <p className="mt-1 truncate text-xs text-stone-500">
                {user.email}
              </p>
            </div>
            <nav className="grid gap-1 pt-1" aria-label="Profile menu">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex h-9 items-center rounded-md px-3 text-[13px] text-stone-700 transition-colors hover:bg-[#f1eee8] hover:text-stone-900"
              >
                Dashboard
              </Link>
              <Link
                href="/add-studio"
                onClick={() => setOpen(false)}
                className="flex h-9 items-center rounded-md px-3 text-[13px] text-stone-700 transition-colors hover:bg-[#f1eee8] hover:text-stone-900"
              >
                Add New Studio
              </Link>
              <Link
                href="/my-listing"
                onClick={() => setOpen(false)}
                className="flex h-9 items-center rounded-md px-3 text-[13px] text-stone-700 transition-colors hover:bg-[#f1eee8] hover:text-stone-900"
              >
                My Studio Listing
              </Link>
              <Link
                href="/my-bookings"
                onClick={() => setOpen(false)}
                className="flex h-9 items-center rounded-md px-3 text-[13px] text-stone-700 transition-colors hover:bg-[#f1eee8] hover:text-stone-900"
              >
                My Bookings
              </Link>
            </nav>
            <Button
              type="button"
              variant="ghost"
              className="mt-1 h-9 w-full justify-start rounded-md px-3 text-[13px] font-medium text-[#df5232] hover:bg-[#fdf0eb] hover:text-[#c9472a]"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ProfilePopover;
