"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CASION_DEPOSIT from "../../../../public/assets/SVGs/casino.svg";
import REDEEM from "../../../../public/assets/SVGs/redeem.svg";

const payments = [
  {
    key: "deposit",
    title: "Deposit",
    desc: "Thousands of Casino Games — Slots,\nFish Tables, Keno, Bingo, Live Dealers\n& More — with 96% RTP!",
    coin: "G",
    coinRing: "from-amber-300 to-amber-500",
    titleColor: "text-amber-400 dark:text-amber-300",
    glow: "bg-[radial-gradient(circle_at_15%_35%,rgba(245,158,11,0.35),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(255,255,255,0.06),transparent_60%)]",
    image: CASION_DEPOSIT,
  },
  {
    key: "redeem",
    title: "Reedem", // keep spelling exactly like screenshot; change to "Redeem" if you want
    desc: "Thousands of Casino Games — Slots,\nFish Tables, Keno, Bingo, Live Dealers\n& More — with 96% RTP!",
    coin: "S",
    coinRing: "from-emerald-400 to-emerald-600",
    titleColor: "text-emerald-400 dark:text-emerald-300",
    glow: "bg-[radial-gradient(circle_at_85%_35%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.06),transparent_60%)]",
    image: REDEEM,
  },
];

export default function Payments() {
  return (
    <section className="relative py-10">
      {/* background like screenshot */}

      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground">
          Play for Fun or{" "}
          <span className="text-amber-400 dark:text-amber-300">
            Real Prizes
          </span>
        </h2>
      </div>

      {/* 2 big cards */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {payments.map((p) => (
          <Card
            key={p.key}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-border",
              "bg-card/55 backdrop-blur-xl",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            )}
          >
            {/* inner glow */}
            <div
              className={cn("pointer-events-none absolute inset-0", p.glow)}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25 dark:to-black/45" />

            {/* big coin top-left */}
            <div className="absolute -left-6 -top-7 z-10">
              <div
                className={cn(
                  "grid h-28 w-28 place-items-center rounded-full",
                  "bg-gradient-to-b",
                  p.coinRing,
                  "shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                )}
              >
                <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-background/90 text-5xl font-black text-foreground shadow-inner">
                  {p.coin}
                </div>
              </div>
            </div>

            <CardContent className="relative p-10">
              <div className="grid items-center gap-10 md:grid-cols-[1fr_1.25fr]">
                {/* left text */}
                <div className="pt-10 md:pt-14">
                  <h3 className={cn("text-4xl font-semibold", p.titleColor)}>
                    {p.title}
                  </h3>
                  <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-muted-foreground dark:text-white/75">
                    {p.desc}
                  </p>
                </div>

                {/* right image */}
                <div className="relative mx-auto h-[430px] w-full max-w-[420px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain drop-shadow-[0_35px_40px_rgba(0,0,0,0.35)]"
                    priority={false}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
