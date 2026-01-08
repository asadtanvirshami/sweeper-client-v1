import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import Icon_1 from "../../../../public/assets/SVGs/dashboard.svg";
import Icon_2 from "../../../../public/assets/SVGs/hacksaw.svg";
import Icon_3 from "../../../../public/assets/SVGs/fish.svg";
import Icon_4 from "../../../../public/assets/SVGs/ball.svg";
import Icon_5 from "../../../../public/assets/SVGs/player.svg";

type FeatureItem = {
  key: string;
  title: string;
  desc: string;
  cta: string;
  pill: string;
  accent: "green" | "yellow" | "purple";
  image: { src: StaticImageData; alt: string };
};

const items: FeatureItem[] = [
  {
    key: "dashboard",
    title: "Casino",
    desc: "Thousands of Casino Games — Slots, Fish Tables,\nKeno, Bingo, Live Dealers & More — with 96% RTP!",
    cta: "GO TO GAMES",
    pill: "5,000+ Games",
    accent: "yellow",
    image: { src: Icon_1, alt: "Casino" },
  },
  {
    key: "platforms",
    title: "Platforms",
    desc: "Exclusive Access to 20+ Connected Platforms in One\nLogin — Automatic Points Top-Up & Instant Redeem.",
    cta: "Go to Platforms",
    pill: "20+ Apps",
    accent: "green",
    image: { src: Icon_2, alt: "Platforms" },
  },
  {
    key: "fish",
    title: "Fish Tables",
    desc: "Play the most popular fish-shooting games on the market,\nincluding fan-favorite titles like Ocean King!",
    cta: "Go to Fish Tables",
    pill: "51+ Games",
    accent: "green",
    image: { src: Icon_3, alt: "Fish Tables" },
  },
  {
    key: "bingo",
    title: "Bingo",
    desc: "Play Classic & Themed Bingo — 75-Ball, 90-Ball & More —\nwith Jackpots, Bonuses, and Social Fun!",
    cta: "Go to Bingo Rooms",
    pill: "20+ Rooms",
    accent: "purple",
    image: { src: Icon_4, alt: "Bingo" },
  },
  {
    key: "live",
    title: "Live Social Room",
    desc: "Join your favorite streamers and connect with fellow players\nin real time — watch, chat, and play together.",
    cta: "Coming soon...",
    pill: "",
    accent: "purple",
    image: { src: Icon_5, alt: "Live Social Room" },
  },
];

function accentTokens(accent: FeatureItem["accent"]) {
  switch (accent) {
    case "yellow":
      return {
        pill: "bg-amber-500/30 text-amber-200 border border-amber-400/25",
        cta: "text-lime-300 hover:text-lime-200",
        glow: "bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.22),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(168,85,247,0.12),transparent_65%)]",
      };
    case "purple":
      return {
        pill: "bg-fuchsia-500/25 text-fuchsia-200 border border-fuchsia-400/20",
        cta: "text-lime-300 hover:text-lime-200",
        glow: "bg-[radial-gradient(circle_at_15%_20%,rgba(217,70,239,0.18),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.14),transparent_65%)]",
      };
    case "green":
    default:
      return {
        pill: "bg-emerald-500/25 text-emerald-200 border border-emerald-400/20",
        cta: "text-lime-300 hover:text-lime-200",
        glow: "bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.20),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(37,99,235,0.12),transparent_65%)]",
      };
  }
}

/** ✅ EXACT CARD BEHAVIOR:
 * - dashboard (md+): BIG style like screenshot (icon on top-left, huge title, button)
 * - dashboard (mobile): normal small card like others (stacked list)
 * - other cards: small style
 */
function FeatureCard({
  item,
  variant,
}: {
  item: FeatureItem;
  variant: "big" | "small";
}) {
  const t = accentTokens(item.accent);

  // ✅ BIG (md+ dashboard) stays whatever you already have
  if (variant === "big") {
    return (
      <Card className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b1220] shadow-[0_18px_55px_rgba(0,0,0,0.45)] h-full min-h-[420px]">
        <div className={cn("pointer-events-none absolute inset-0 opacity-100", t.glow)} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/25" />

        <CardContent className="relative p-8">
          <div className="h-28 w-28">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={140}
              height={140}
              className="h-full w-full object-contain"
              priority={false}
            />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <h3 className=" text-lg lg:text-5xl font-extrabold tracking-tight text-white">
              {item.title}
            </h3>
            {item.pill ? (
              <Badge className={cn("rounded-full px-4 py-2 text-sm font-semibold", t.pill)}>
                {item.pill}
              </Badge>
            ) : null}
          </div>

          <p className="mt-4 max-w-md whitespace-pre-line text-base leading-relaxed text-white/75">
            {item.desc}
          </p>

          <button
            type="button"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-lime-400 px-8 py-3 text-sm font-extrabold tracking-wide text-black shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition hover:bg-lime-300"
          >
            {item.cta}
          </button>
        </CardContent>
      </Card>
    );
  }

  // ✅ SMALL (mobile) EXACT like your screenshot for ALL cards
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b1220]",
        "shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0 opacity-100", t.glow)} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/25" />

      <CardContent className="relative p-5">
        <div className="flex items-start gap-4">
          {/* icon left */}
          <div className="shrink-0">
            <div className="h-14 w-14">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={72}
                height={72}
                className="h-full w-full object-contain"
                priority={false}
              />
            </div>
          </div>

          {/* content */}
          <div className="min-w-0 flex-1">
            {/* title + pill row */}
            <div className="flex w-xl items-center justify-between gap-3">
              <h3 className="text-xl font-extrabold tracking-tight text-white">
                {item.title}
              </h3>

              {item.pill ? (
                <Badge
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                    t.pill
                  )}
                >
                  {item.pill}
                </Badge>
              ) : null}
            </div>

            {/* desc */}
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/70">
              {item.desc}
            </p>

            {/* bottom green link */}
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition hover:text-lime-200"
            >
              {item.cta} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


export default function FeatureGrid() {
  const big = items.find((x) => x.key === "dashboard");
  const rest = items.filter((x) => x.key !== "dashboard");
  if (!big) return null;

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* ✅ MOBILE: dashboard also uses SMALL layout like all */}
        <div className="md:hidden">
          <FeatureCard item={big} variant="small" />
        </div>

        {/* ✅ MD/LG/XL: dashboard big card */}
        <div className="hidden md:block md:col-span-5 md:row-span-2">
          <FeatureCard item={big} variant="big" />
        </div>

        {/* ✅ RIGHT side cards */}
        <div className="grid grid-cols-1 gap-6 md:col-span-7 md:grid-cols-2">
          {rest.map((item) => (
            <FeatureCard key={item.key} item={item} variant="small" />
          ))}
        </div>
      </div>
    </section>
  );
}
