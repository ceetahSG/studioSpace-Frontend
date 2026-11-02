"use client";

import getTokenFromClient from "@/lib/getTokenFromClient";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useToastManager } from "@/components/ui/toast";

const DeleteListing = ({ studioId }: { studioId: string }) => {
  const toastManager = useToastManager();

  const handleDelete = async () => {
    try {
      const token = await getTokenFromClient();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/studios/${studioId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("The listing could not be deleted.");
      toastManager.add({
        title: "Listing deleted",
        description: "Your studio listing has been removed.",
        type: "success",
      });
      redirect("/my-listing");
    } catch (error) {
      if (error && typeof error === "object" && "digest" in error) throw error;
      toastManager.add({
        title: "Delete failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
        type: "error",
      });
      console.error("Failed to delete listing:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        type="button"
        aria-label={`Delete ${studioId}`}
        className="flex size-8 items-center justify-center rounded border border-[#deddd7] text-[#df5232] transition-colors hover:bg-[#fdf0eb]"
      >
        <Trash2 className="size-3.5" strokeWidth={1.7} />
      </button>
    </div>
  );
};

export default DeleteListing;
