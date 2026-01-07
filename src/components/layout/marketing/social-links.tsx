"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import facebook from "../../../../public/assets/SVGs/facebook.svg";
import instagram from "../../../../public/assets/SVGs/instagram.svg";
import twitter from "../../../../public/assets/SVGs/twitter.svg";
import youtube from "../../../../public/assets/SVGs/youtube.svg";
import telegram from "../../../../public/assets/SVGs/telegram.svg";

type Social = {
  name: string;
  icon: string; // using simple letter/icon-like mark to match screenshot
  tone: "facebook" | "instagram" | "x" | "youtube" | "telegram";
};

const socials: Social[] = [
  { name: "Facebook", icon: facebook.src, tone: "facebook" },    //"f"
  { name: "Instagram", icon: instagram.src, tone: "instagram" },  //"◎"
  { name: "X", icon: twitter.src, tone: "x" }, //"X"
  { name: "Youtube", icon: youtube.src, tone: "youtube" },  //"▶"
  { name: "Telegram", icon: telegram.src, tone: "telegram" }, //"➤"
];

function barGradient(tone: Social["tone"]) {
  switch (tone) {
    case "facebook":
      return "bg-gradient-to-r from-sky-700/70 via-sky-900/40 to-zinc-900/30";
    case "instagram":
      return "bg-gradient-to-r from-amber-600/55 via-pink-700/35 to-zinc-900/30";
    case "x":
      return "bg-gradient-to-r from-zinc-700/55 via-zinc-800/35 to-zinc-900/30";
    case "youtube":
      return "bg-gradient-to-r from-red-700/60 via-red-900/35 to-zinc-900/30";
    case "telegram":
      return "bg-gradient-to-r from-sky-700/55 via-cyan-900/30 to-zinc-900/30";
  }
}

// function iconGradient(tone: Social["tone"]) {
//   switch (tone) {
//     case "facebook":
//       return "bg-gradient-to-b from-sky-500 to-sky-800";
//     case "instagram":
//       return "bg-gradient-to-b from-fuchsia-600 via-pink-600 to-amber-500";
//     case "x":
//       return "bg-gradient-to-b from-zinc-700 to-zinc-950";
//     case "youtube":
//       return "bg-gradient-to-b from-red-500 to-red-800";
//     case "telegram":
//       return "bg-gradient-to-b from-sky-500 to-sky-800";
//   }
// }

export default function SocialLinks() {
  return (
    <section className="relative py-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-center">
        {/* LEFT TEXT */}
        <div className="relative">
          {/* floating coins (CSS shapes) */}
          <Coin className="left-[48%] top-6 scale-90" tone="amber" label="G" />

          <Coin
            className="left-[60%] top-[78%] scale-[1.8] -rotate-12 mt-16"
            tone="amber"
            label="G"
          />

          <h2 className="text-5xl font-semibold leading-tight text-foreground">
            Follow Us on <br />
            <span className="text-emerald-400 dark:text-emerald-300">
              Social Media!
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground dark:text-white/75">
            Your favorite slots, fish tables, and live games — all in one place.
            Play for free, and win real cash prizes!
          </p>
        </div>

        {/* RIGHT LIST */}
        <div className="space-y-6">
          {socials.map((s) => (
            <Card
              key={s.name}
              className={cn(
                "overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-xl",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              )}
            >
              <CardContent className="p-0">
                <div
                  className={cn(
                    "flex items-center gap-6 px-8 py-6",
                    barGradient(s.tone)
                  )}
                >
                  <div
                    className={cn(
                      "grid h-20 w-20 place-items-center rounded-2xl",
                    )}
                  >
                    <img src={s.icon} alt={s.name} className="transform translate-x-1 -translate-y-1" />
                  </div>

                  <p className="text-2xl font-semibold text-foreground dark:text-white">
                    {s.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coin({
  className,
  tone,
  label,
}: {
  className?: string;
  tone: "amber" | "emerald";
  label: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute hidden md:block",
        "h-16 w-16 rounded-full shadow-[0_25px_55px_rgba(0,0,0,0.45)]",
        tone === "amber"
          ? "bg-gradient-to-b from-amber-300 to-amber-500"
          : "bg-gradient-to-b from-emerald-400 to-emerald-600",
        className
      )}
    >
      <div className="absolute inset-[10px] rounded-full bg-background/90 shadow-inner" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-3xl font-black text-foreground">{label}</span>
      </div>
    </div>
  );
}
