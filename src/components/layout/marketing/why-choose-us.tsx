import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Save & Secure",
    desc: "Protected Payments,\ntrusted play",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    desc: "Protected Payments,\ntrusted play",
    icon: "⏰",
  },
  {
    title: "Same Day\nRedemption",
    desc: "Protected Payments,\ntrusted play",
    icon: "💸",
  },
  {
    title: "Loyalty Club",
    desc: "Protected Payments,\ntrusted play",
    icon: "🪙",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-10">

      {/* Cards */}
      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {items.map((it) => (
          <Card
            key={it.title}
            className={cn(
              "relative overflow-visible rounded-3xl",
              "border border-border bg-card/55 backdrop-blur-xl",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            )}
          >
            {/* green glow behind card */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.32),transparent_65%)] opacity-70 dark:opacity-90" />

            {/* icon floating above */}
            <div className="absolute -top-8 left-8 text-5xl drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]">
              {it.icon}
            </div>

            <CardContent className="relative px-10 py-12">
              <p className="text-3xl font-semibold leading-tight text-foreground whitespace-pre-line">
                {it.title}
              </p>

              <p className="mt-4 text-lg leading-snug text-muted-foreground whitespace-pre-line dark:text-white/75">
                {it.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
