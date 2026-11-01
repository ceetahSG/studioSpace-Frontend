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

type ProfilePopoverProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

const ProfilePopover = ({ user }: { user: ProfilePopoverProps["user"] }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error("Error logging out user:", error);
      return;
    }

    router.push("/");
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger
          render={
            <div>
              <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                </Avatar>
              </div>
            </div>
          }
        />
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>{user.name}</PopoverTitle>
            <PopoverTitle>{user.email}</PopoverTitle>
            <Link href="/">
              <Button>Dashboard</Button>
            </Link>
            <Link href="/add-studio">
              <Button>Add New Studio</Button>
            </Link>
            <Link href="/my-listing">
              <Button>My Studio Listing</Button>
            </Link>
            <Link href="/my-bookings">
              <Button>My Bookings</Button>
            </Link>

            <Button
              variant="link"
              className="text-sm text-[#e55332]"
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
