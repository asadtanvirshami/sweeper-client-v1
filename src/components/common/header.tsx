"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// replace with your logo
import LOGO from "../../../public/assets/SVGs/logo.svg";

export default function Header() {
  return (
    <header className="w-full px-4 pt-4">
      <div
        className={cn(
          "mx-auto w-full",
          "rounded-2xl border border-white/10",
          "bg-black/70 backdrop-blur-xl",
          "shadow-[0_18px_55px_rgba(0,0,0,0.55)]"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* LEFT: logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/10">
              <Image
                src={LOGO}
                alt="Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* RIGHT: buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/auth/signin"
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold",
                "bg-amber-400 text-black hover:bg-amber-300 transition",
                "shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              )}
            >
              Login
            </Link>

            <Link
              href="/auth/signup"
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold",
                "bg-amber-400 text-black hover:bg-amber-300 transition",
                "shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              )}
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* subtle inner top line like screenshot */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />
      </div>
    </header>
  );
}
