"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CARDS from "../../../../public/assets/SVGs/cards.svg";
import VBLINK from "../../../../public/assets/SVGs/vblink.svg";
import FIRE_KIRIN from "../../../../public/assets/SVGs/fire_kirin.svg";
import ULTRA_PANDA from "../../../../public/assets/SVGs/ultra_panda.svg";
import FORTUNE_KINGS from "../../../../public/assets/SVGs/fortune_kings.svg";

import visa from "../../../../public/assets/SVGs/visa.svg";
import mastercard from "../../../../public/assets/SVGs/mastercard.svg";
import s from "../../../../public/assets/SVGs/s.svg";
import chime from "../../../../public/assets/SVGs/chime.svg";
import paypal from "../../../../public/assets/SVGs/paypal.svg";
import coam from "../../../../public/assets/SVGs/coam.svg";

const payments = [
  { name: "VISA", icon: visa.src },
  { name: "MASTERCARD", icon: mastercard.src },
  { name: "S", icon: s.src },
  { name: "chime", icon: chime.src },
  { name: "PayPal", icon: paypal.src },
  { name: "COAM", icon: coam.src },
]

function StepBadge({ n, tone }: { n: number; tone: "green" | "amber" }) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "grid h-16 w-16 place-items-center rounded-2xl border border-border backdrop-blur",
          "bg-card/60 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
          tone === "green"
            ? "ring-1 ring-emerald-400/20"
            : "ring-1 ring-amber-300/20"
        )}
      >
        <span
          className={cn(
            "text-5xl font-bold",
            tone === "green" ? "text-emerald-300" : "text-amber-300"
          )}
        >
          {n}
        </span>
      </div>
    </div>
  );
}

export default function HowToPlaySteps() {
  return (
    <section className="relative py-10">
      <div className="grid gap-10 md:grid-cols-[1.05fr_1.35fr] md:items-start">
        {/* LEFT: title + illustration */}
        <div className="relative">
          <h2 className="text-5xl font-semibold leading-tight text-foreground">
            How to play in{" "}
            <span className="text-amber-400 dark:text-amber-300">
              3 Easy Steps
            </span>
          </h2>

          <div className="mt-10 relative w-full max-w-[520px]">
            <div className="relative w-full max-w-[800px] h-[280px] sm:h-[420px] md:h-[560px] lg:h-[1000px] lg:w-[1000px] overflow-hidden backdrop-blur">
              <Image
                src={CARDS}
                alt="How to play illustration"
                fill
                className="object-contain p-4 sm:p-6 md:p-8"
                priority={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: vertical steps + cards */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-white/10 dark:block" />
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border/60 dark:hidden" />

          <div className="space-y-10">
            {/* STEP 1 */}
            <div className="relative grid gap-6 md:grid-cols-[90px_1fr]">
              <div className="relative flex justify-center">
                <StepBadge n={1} tone="green" />
              </div>

              <Card
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border",
                  "bg-card/55 backdrop-blur-xl",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(16,185,129,0.25),transparent_60%)] opacity-70" />
                <CardContent className="relative p-8">
                  <p className="text-3xl font-semibold text-foreground">
                    Bonus & Rewards
                  </p>

                  <div className="mt-7 space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-5">
                      <span className="text-3xl font-semibold text-amber-400 dark:text-amber-300">
                        $10 Signup bonus
                      </span>
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-400 text-black font-black">
                        G
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-border/60 pb-5">
                      <span className="text-3xl font-semibold text-emerald-400 dark:text-emerald-300">
                        $10 Referal Bonus
                      </span>
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-black font-black">
                        S
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-8 w-full rounded-full bg-emerald-400 py-4 text-lg font-semibold text-black hover:bg-emerald-300 transition"
                  >
                    Signup Now
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* STEP 2 */}
            <div className="relative grid gap-6 md:grid-cols-[90px_1fr]">
              <div className="relative flex justify-center">
                <StepBadge n={2} tone="amber" />
              </div>

              <Card
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border",
                  "bg-card/55 backdrop-blur-xl",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(245,158,11,0.20),transparent_60%)] opacity-70" />
                <CardContent className="relative p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/25 p-6 dark:bg-white/5">
                      <div className="relative h-20 w-full">
                        <Image
                          src={ULTRA_PANDA}
                          alt="Ultra Panda"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/25 p-6 dark:bg-white/5">
                      <div className="relative h-20 w-full">
                        <Image
                          src={FORTUNE_KINGS}
                          alt="Fortune Kings"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* STEP 3 */}
            <div className="relative grid gap-6 md:grid-cols-[90px_1fr]">
              <div className="relative flex justify-center">
                <StepBadge n={3} tone="green" />
              </div>

              <Card
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border",
                  "bg-card/55 backdrop-blur-xl",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(16,185,129,0.25),transparent_60%)] opacity-70" />
                <CardContent className="relative p-8">
                  <p className="text-3xl font-semibold text-foreground">
                    Redeem Your <br /> SC Instantly
                  </p>

                  <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 place-items-center">
                    {payments.map((icons, i) => (
                      <div
                        key={i}
                        className="relative grid h-24 w-24 sm:h-28 sm:w-28 md:h-28 md:w-28 place-items-center rounded-2xl border border-border bg-white/10 dark:bg-black/20 backdrop-blur-md"
                      >
                        <img src={icons.icon} alt={icons.name} className="h-12 sm:h-12 md:h-14 w-24" />
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-8 w-full rounded-full bg-emerald-400 py-4 text-lg font-semibold text-black hover:bg-emerald-300 transition"
                  >
                    Redeem
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
