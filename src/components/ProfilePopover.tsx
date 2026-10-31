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
            <Button variant="outline" className="w-fit">
              {user.name}
            </Button>
          }
        />
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>{user.email}</PopoverTitle>
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
