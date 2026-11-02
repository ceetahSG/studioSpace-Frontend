"use client";

import Link from "next/link";
import { Eye, EyeOff, Globe2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { authClient, signInWithGoogle } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useToastManager } from "@/components/ui/toast";

const studioImage =
  "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=1400&q=90";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const toastManager = useToastManager();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email as string,
      password: userData.password as string,
    });
    if (error) {
      toastManager.add({
        title: "Unable to sign in",
        description: error.message || "Please check your email and password.",
        type: "error",
      });
      return console.error("Error logging in user:", error);
    } else {
      toastManager.add({
        title: "Welcome back",
        description: "You have been signed in successfully.",
        type: "success",
      });
      router.push("/");
    }
  }

  async function handleGoogleSignIn() {
    const { error } = await signInWithGoogle();

    if (error) {
      toastManager.add({
        title: "Google sign-in failed",
        description: error.message || "Please try again.",
        type: "error",
      });
      console.error("Error signing in with Google:", error);
    } else {
      toastManager.add({
        title: "Welcome back",
        description: "You have been signed in successfully.",
        type: "success",
      });
    }
  }

  return (
    <div className="flex min-h-screen items-center bg-white p-3 sm:p-5 lg:p-8">
      <div className="grid min-h-[calc(100vh-1.5rem)] w-full overflow-hidden rounded-xl sm:min-h-[calc(100vh-2.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <section
          className="relative min-h-[430px] overflow-hidden rounded-xl bg-stone-300 bg-cover bg-center lg:min-h-0"
          style={{ backgroundImage: `url("${studioImage}")` }}
          aria-label="A creative studio space"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/75" />
          <Link
            href="/"
            className="absolute left-8 top-8 z-10 flex items-center gap-3 text-[16px] font-semibold tracking-[-0.03em] text-white sm:left-10 sm:top-10"
            aria-label="StudioSpace home"
          >
            <Globe2 className="size-5 text-[#f05a37]" strokeWidth={2} />
            <span>StudioSpace</span>
          </Link>
          <div className="absolute inset-x-8 bottom-8 z-10 text-white sm:inset-x-10 sm:bottom-10">
            <p className="max-w-[510px] font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[clamp(2.5rem,4vw,4.2rem)]">
              “The right room changes the way you think.”
            </p>
            <p className="mt-5 text-[12px] text-stone-200">
              Spaces curated for making meaningful work.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-16 sm:px-12 lg:px-[clamp(3rem,8vw,8rem)] lg:py-12">
          <div className="w-full max-w-[423px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e55332]">
              Good to see you
            </p>
            <h1 className="mt-3 text-[clamp(2.7rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.065em] text-stone-950">
              Welcome back.
            </h1>
            <p className="mt-4 text-[14px] text-stone-500">
              Pick up where your next creative project begins.
            </p>

            <form className="mt-9" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium text-stone-800"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 h-12 w-full rounded-md border border-stone-200 bg-[#f8f7f4] px-4 text-[13px] text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#e55332] focus:ring-2 focus:ring-[#e55332]/15"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="text-[11px] font-medium text-stone-800"
                >
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="h-12 w-full rounded-md border border-stone-200 bg-[#f8f7f4] px-4 pr-12 text-[13px] text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#e55332] focus:ring-2 focus:ring-[#e55332]/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-stone-400 transition-colors hover:text-stone-700"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-[18px]" strokeWidth={1.7} />
                    ) : (
                      <Eye className="size-[18px]" strokeWidth={1.7} />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px]">
                <label className="flex items-center gap-2 text-stone-500">
                  <input
                    type="checkbox"
                    className="size-[13px] accent-[#df5232]"
                  />
                  Remember me
                </label>
                <Link
                  href="#forgot-password"
                  className="font-semibold text-[#e55332] transition-colors hover:text-[#bd3f25]"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="mt-5 h-12 w-full rounded-md bg-[#df5232] text-[13px] font-semibold text-white transition-colors hover:bg-[#c9472a] focus:outline-none focus:ring-2 focus:ring-[#e55332]/30 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>

            <div className="my-7 flex items-center gap-3 text-[11px] text-stone-400">
              <span className="h-px flex-1 bg-stone-200" />
              <span>or continue with</span>
              <span className="h-px flex-1 bg-stone-200" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-stone-200 text-[13px] font-medium text-stone-800 transition-colors hover:bg-stone-50"
            >
              <span className="text-[19px] font-semibold leading-none">G</span>
              Google
            </button>

            <p className="mt-6 text-center text-[11px] text-stone-400">
              New to StudioSpace?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#e55332] hover:text-[#bd3f25]"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
