"use client";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
const EditListing = ({ studioId }: { studioId: string }) => {
  const handleEdit = () => {
    redirect(`/edit-studio/${studioId}`);
  };
  return (
    <div>
      <button
        type="button"
        aria-label={`Edit ${studioId}`}
        className="flex size-8 items-center justify-center rounded border border-[#deddd7] text-[#071a2e] transition-colors hover:bg-[#f1eee8]"
        onClick={handleEdit}
      >
        <Pencil className="size-3.5" strokeWidth={1.7} />
      </button>
    </div>
  );
};

export default EditListing;
