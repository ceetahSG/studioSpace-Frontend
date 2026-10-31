"use client";

import Link from "next/link";
import { Globe2, Moon } from "lucide-react";
import ProfilePopover from "./ProfilePopover";
import { authClient } from "@/lib/auth-client";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/explore-studios" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="border-b border-stone-200/80 bg-stone-50">
      <div className="mx-auto flex h-17.5 max-w-330 items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-[17px] font-semibold tracking-[-0.02em] text-stone-900"
          aria-label="StudioSpace home"
        >
          <Globe2 className="size-5 text-[#e55332]" strokeWidth={2} />
          <span>StudioSpace</span>
        </Link>

        <nav
          className="hidden items-center gap-9 text-[13px] text-stone-500 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-stone-900 ${
                item.href === "/" ? "text-stone-900" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-[13px]">
          <button
            type="button"
            className="rounded-full p-1 text-stone-900 transition-colors hover:bg-stone-200"
            aria-label="Toggle dark mode"
          >
            <Moon className="size-[18px]" strokeWidth={1.8} />
          </button>
          {!isPending && session?.user ? (
            <>
              <ProfilePopover
                user={{ ...session.user, image: session.user.image ?? "" }}
              />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-stone-900 transition-colors hover:text-[#e55332]"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-[#df5232] px-[18px] py-3 font-semibold text-white transition-colors hover:bg-[#c9472a]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
