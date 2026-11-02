"use client";
import getTokenFromClient from "@/lib/getTokenFromClient";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

const DeleteListing = ({ studioId }: { studioId: string }) => {
  const handleDelete = async () => {
    const token = await getTokenFromClient();
    const response = await fetch(`http://localhost:5000/studios/${studioId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.error("Failed to delete listing");
      return;
    } else {
      redirect("/my-listing");
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
