import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, Coins, Gamepad2, Gift, Layers3, Zap } from "lucide-react";

type FeatureItem = {
  key: string;
  title: string;
  desc: string;
  cta: string;
  pill: string;
  icon: React.ElementType;
  accent: "green" | "yellow" | "purple";
};

const items: FeatureItem[] = [
  {
    key: "dashboard",
    title: "Dashboard",
    desc: "Thousands of Casino Games — Slots, Fish Tables,\nKeno, Bingo, Live Dealers & More — with 96% RTP!",
    cta: "Go To Games",
    pill: "5,000+ Games",
    icon: Coins,
    accent: "green",
  },
  {
    key: "hacksaw",
    title: "Hacksaw",
    desc: "Exclusive Access to 20+ Connected\nPlatforms in One Login — Automatic\nSC Top-Up & Instant Redeem.",
    cta: "Go To Games",
    pill: "20+ App",
    icon: Zap,
    accent: "green",
  },
  {
    key: "games",
    title: "Games",
    desc: "Exclusive Access to 20+ Connected\nPlatforms in One Login — Automatic\nSC Top-Up & Instant Redeem.",
    cta: "Go To Games",
    pill: "20+ App",
    icon: Gamepad2,
    accent: "yellow",
  },
  {
    key: "platforms",
    title: "Platforms",
    desc: "Exclusive Access to 20+ Connected\nPlatforms in One Login — Automatic\nSC Top-Up & Instant Redeem.",
    cta: "Go To Games",
    pill: "20+ App",
    icon: Layers3,
    accent: "green",
  },
  {
    key: "prizes",
    title: "Prizes",
    desc: "Exclusive Access to 20+ Connected\nPlatforms in One Login — Automatic\nSC Top-Up & Instant Redeem.",
    cta: "Go To Games",
    pill: "20+ App",
    icon: Gift,
    accent: "yellow",
  },
];

function accentClasses(accent: FeatureItem["accent"]) {
  switch (accent) {
    case "green":
      return {
        pill: "bg-emerald-500 text-black hover:bg-emerald-400",
        icon: "text-emerald-500 dark:text-emerald-300",
        link: "text-emerald-600 dark:text-emerald-300",
        glow:
          "bg-[radial-gradient(circle_at_35%_15%,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.14),transparent_55%)]",
      };
    case "yellow":
      return {
        pill: "bg-amber-400 text-black hover:bg-amber-300",
        icon: "text-amber-600 dark:text-amber-300",
        link: "text-emerald-600 dark:text-emerald-300",
        glow:
          "bg-[radial-gradient(circle_at_35%_15%,rgba(251,191,36,0.22),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(245,158,11,0.14),transparent_55%)]",
      };
    case "purple":
    default:
      return {
        pill: "bg-violet-500 text-white hover:bg-violet-400",
        icon: "text-violet-500 dark:text-violet-300",
        link: "text-emerald-600 dark:text-emerald-300",
        glow:
          "bg-[radial-gradient(circle_at_35%_15%,rgba(139,92,246,0.22),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.14),transparent_55%)]",
      };
  }
}

function GlassCard({
  item,
  size,
}: {
  item: FeatureItem;
  size: "large" | "small";
}) {
  const a = accentClasses(item.accent);

  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur-xl",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
        "transition-transform duration-200 hover:-translate-y-0.5",
        size === "large"
          ? "min-h-[260px] md:min-h-[320px]"
          : "min-h-[170px] md:min-h-[150px]"
      )}
    >
      {/* glow */}
      <div className={cn("pointer-events-none absolute inset-0 opacity-90", a.glow)} />
      {/* vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10 dark:to-black/35" />

      <CardContent className={cn("relative h-full", size === "large" ? "p-8" : "p-6")}>
        {/* top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "grid place-items-center rounded-2xl border border-border bg-muted/35",
                "dark:bg-white/10",
                size === "large" ? "h-12 w-12" : "h-10 w-10"
              )}
            >
              <item.icon className={cn(size === "large" ? "h-6 w-6" : "h-5 w-5", a.icon)} />
            </div>

            <div>
              <h3
                className={cn(
                  "font-semibold tracking-tight",
                  size === "large" ? "text-4xl" : "text-3xl"
                )}
              >
                {item.title}
              </h3>
            </div>
          </div>

          <Badge className={cn("rounded-full px-4 py-2 text-sm font-semibold", a.pill)}>
            {item.pill}
          </Badge>
        </div>

        {/* desc */}
        <p
          className={cn(
            "mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground",
            "dark:text-white/70"
          )}
        >
          {item.desc}
        </p>

        {/* bottom CTA */}
        {size === "large" ? (
          <div className="mt-6 flex items-center gap-3">
            <button
              className={cn(
                "inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold",
                "bg-emerald-500 text-black hover:bg-emerald-400 transition"
              )}
              type="button"
            >
              {item.cta}
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={cn(
              "mt-4 inline-flex items-center gap-2 text-sm font-semibold transition",
              a.link
            )}
          >
            {item.cta} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </CardContent>
    </Card>
  );
}

export default function FeatureGrid() {
  const [big, ...rest] = items;

  return (
    <section className="grid gap-4 md:grid-cols-12">
      {/* Big left card */}
      <div className="md:col-span-5">
        <GlassCard item={big} size="large" />
      </div>

      {/* Right 2x2 grid */}
      <div className="md:col-span-7 grid gap-4 md:grid-cols-2">
        {rest.map((it) => (
          <GlassCard key={it.key} item={it} size="small" />
        ))}
      </div>
    </section>
  );
}
