"use client";

import Link from "next/link";
import { Globe2, Moon, Sun } from "lucide-react";
import ProfilePopover from "./ProfilePopover";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useToastManager } from "@/components/ui/toast";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/explore-studios" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  const toastManager = useToastManager();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme === "dark" || (!storedTheme && prefersDark);

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);

    if (!storedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (event: MediaQueryListEvent) => {
        setIsDark(event.matches);
        document.documentElement.classList.toggle("dark", event.matches);
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;

    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    toastManager.add({
      title: nextIsDark ? "Dark mode enabled" : "Light mode enabled",
      description: "Your theme preference has been saved.",
      type: "success",
    });
  };

  return (
    <header className="border-b border-stone-200/80 bg-stone-50 dark:border-stone-800 dark:bg-[#151715]">
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
                activePath === item.href
                  ? "font-medium text-stone-900"
                  : ""
              }`}
              aria-current={activePath === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-[13px]">
          <button
            type="button"
            className="rounded-full p-1 text-stone-900 transition-colors hover:bg-stone-200 dark:text-stone-200 dark:hover:bg-stone-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="size-[18px]" strokeWidth={1.8} />
            ) : (
              <Moon className="size-[18px]" strokeWidth={1.8} />
            )}
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
