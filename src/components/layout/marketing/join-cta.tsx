"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CASION_DEPOSIT from "../../../../public/assets/SVGs/card_deck.svg";

export default function JoinCta() {
  return (
    <section className="relative py-10">
      <Card
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border",
          "bg-card/55 backdrop-blur-xl",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
        )}
      >
        {/* Background glow like screenshot */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(245,158,11,0.25),transparent_55%),radial-gradient(circle_at_75%_45%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.06),transparent_60%)] opacity-70 dark:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25 dark:to-black/45" />
        </div>

        <CardContent className="relative p-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1.15fr]">
            {/* LEFT */}
            <div>
              <h3 className="text-5xl font-semibold leading-tight tracking-tight text-foreground">
                Join Thousands of <br />
                Players &{" "}
                <span className="text-amber-400 dark:text-amber-300">
                  Start <br />
                  Winning
                </span>{" "}
                Now!
              </h3>

              {/* bonus pills row */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BonusPill
                  text="$10 Sign Up"
                  tone="amber"
                  coin="G"
                />
                <BonusPill
                  text="$10 Referal Bonus"
                  tone="emerald"
                  coin="S"
                />

                {/* small floating coin like screenshot */}
                <div className="ml-2 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-background/90 text-xl font-black text-foreground shadow-inner">
                    G
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                className="mt-10 w-full max-w-[520px] rounded-full bg-emerald-400 py-5 text-lg font-semibold text-black hover:bg-emerald-300 transition"
              >
                Play Now its Free
              </button>

              <p className="mt-8 max-w-[560px] text-sm leading-relaxed text-muted-foreground dark:text-white/75">
                Your favorite slots, fish tables, and live games — all in one
                place. Play for free, and win real cash prizes!
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative">
              {/* floating big S coin */}
              <div className="pointer-events-none absolute -top-6 left-12 z-10 hidden md:block">
                <Coin tone="emerald" label="S" size="xl" />
              </div>

              {/* bottom floating coin */}
              <div className="pointer-events-none absolute -bottom-8 left-24 z-10 hidden md:block">
                <Coin tone="emerald" label="S" size="md" />
              </div>

              <div className="relative mx-auto h-[600px] w-full max-w-[620px]">
                <Image
                  src={CASION_DEPOSIT}
                  alt="CTA Artwork"
                  fill
                  className="object-contain drop-shadow-[0_45px_55px_rgba(0,0,0,0.35)]"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function BonusPill({
  text,
  tone,
  coin,
}: {
  text: string;
  tone: "amber" | "emerald";
  coin: "G" | "S";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border px-5 py-2",
        "bg-background/20 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
        tone === "amber"
          ? "border-amber-300/40"
          : "border-emerald-400/35"
      )}
    >
      <span className="text-lg font-semibold text-foreground">{text}</span>
      <Coin
        tone={tone === "amber" ? "amber" : "emerald"}
        label={coin}
        size="sm"
      />
    </div>
  );
}

function Coin({
  tone,
  label,
  size,
}: {
  tone: "amber" | "emerald";
  label: string;
  size: "sm" | "md" | "xl";
}) {
  const dims =
    size === "xl" ? "h-24 w-24" : size === "md" ? "h-16 w-16" : "h-12 w-12";
  const inner =
    size === "xl" ? "h-16 w-16 text-4xl" : size === "md" ? "h-11 w-11 text-2xl" : "h-9 w-9 text-xl";

  return (
    <div
      className={cn(
        "grid place-items-center rounded-full shadow-[0_25px_55px_rgba(0,0,0,0.35)]",
        dims,
        tone === "amber"
          ? "bg-gradient-to-b from-amber-300 to-amber-500"
          : "bg-gradient-to-b from-emerald-400 to-emerald-600"
      )}
    >
      <div
        className={cn(
          "grid place-items-center rounded-full bg-background/90 font-black text-foreground shadow-inner",
          inner
        )}
      >
        {label}
      </div>
    </div>
  );
}
