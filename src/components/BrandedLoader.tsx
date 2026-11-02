import { Globe2, LoaderCircle } from "lucide-react";

type BrandedLoaderProps = {
  label?: string;
  fullScreen?: boolean;
};

export default function BrandedLoader({
  label = "Loading StudioSpace",
  fullScreen = false,
}: BrandedLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center bg-[#f7f5f1] px-6 ${
        fullScreen ? "min-h-[calc(100vh-7rem)]" : "min-h-72 py-20"
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex size-14 items-center justify-center rounded-full border border-[#df5232]/25 bg-white text-[#df5232] shadow-[0_8px_24px_rgba(27,25,22,0.08)]">
          <Globe2 className="size-6" strokeWidth={1.7} />
          <LoaderCircle className="absolute -inset-1 size-[66px] animate-spin text-[#df5232]/45" strokeWidth={1} />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#df5232]">
            StudioSpace
          </p>
          <p className="mt-2 text-sm text-stone-500">{label}</p>
        </div>
      </div>
    </div>
  );
}
