"use client";

import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { FormEvent } from "react";
import { useToastManager } from "@/components/ui/toast";

const exploreLinks = [
  { label: "All studios", href: "#explore" },
  { label: "Categories", href: "#categories" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Gift cards", href: "#gift-cards" },
];

const hostLinks = [
  { label: "List your space", href: "#list-your-space" },
  { label: "About StudioSpace", href: "/about" },
  { label: "Host resources", href: "#host-resources" },
  { label: "Safety", href: "#safety" },
  { label: "Community", href: "#community" },
];

const legalLinks = [
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
  { label: "Accessibility", href: "#accessibility" },
];

export default function Footer() {
  const toastManager = useToastManager();

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    toastManager.add({
      title: "You're subscribed",
      description: "We'll keep you posted on new spaces and stories.",
      type: "success",
    });
  }

  return (
    <footer className="bg-[#151715] text-stone-300">
      <div className="mx-auto max-w-330 px-6 pb-7 pt-12 lg:px-8 lg:pt-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.75fr_0.75fr_1.7fr] lg:gap-16">
          <div>
            <Link
              href="/"
              className="flex w-fit items-center gap-3 text-[17px] font-semibold tracking-[-0.02em] text-stone-100"
              aria-label="StudioSpace home"
            >
              <Globe2 className="size-5 text-[#e55332]" strokeWidth={2} />
              <span>StudioSpace</span>
            </Link>
            <p className="mt-8 max-w-60 text-[13px] leading-5 text-stone-400">
              Exceptional spaces for the people who make culture move.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {["IG", "X", "VI"].map((label) => (
                <Link
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="flex size-9 items-center justify-center rounded-full border border-stone-700 text-[9px] font-medium text-stone-200 transition-colors hover:border-stone-400 hover:text-white"
                  aria-label={`${label} social media`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <FooterLinkGroup title="Explore" links={exploreLinks} />
          <FooterLinkGroup title="Host" links={hostLinks} />

          <div>
            <h2 className="text-[13px] font-semibold text-stone-100">
              Stay in the loop
            </h2>
            <p className="mt-5 text-[13px] leading-5 text-stone-500">
              New spaces, creative stories, and city guides.
            </p>
            <form
              className="mt-3 flex items-center border-b border-stone-600"
              onSubmit={handleSubscribe}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-stone-200 outline-none placeholder:text-stone-400"
              />
              <button
                type="submit"
                className="p-2 text-stone-200 transition-colors hover:text-white"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-stone-800 pt-6 text-[11px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 StudioSpace, Inc.</p>
          <nav className="flex items-center gap-7" aria-label="Legal navigation">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-stone-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-[13px] font-semibold text-stone-100">{title}</h2>
      <nav className="mt-5 flex flex-col items-start gap-3" aria-label={`${title} links`}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[13px] text-stone-300 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
