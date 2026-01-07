import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Gift, Zap, Percent, ShieldCheck } from "lucide-react";
import handshake from "../../../../public/assets/SVGs/handshake.svg";
import wallet from "../../../../public/assets/SVGs/wallet.svg";
import calende from "../../../../public/assets/SVGs/calende.svg";
import growth from "../../../../public/assets/SVGs/growth.svg";

const perks = [
  { title: "Referral Bonus", icon: handshake.src, desc: "Invite friends and earn UC." },
  { title: "Reload Rewards", icon: wallet.src, desc: "Boost value on deposits." },
  { title: "Daily Spins", icon: calende.src, desc: "Log in daily for extras." },
  { title: "VIP Tiers", icon: growth.src, desc: "Higher play unlocks better perks." },
];

export default function Rewards() {
  return (
    <section className="relative py-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground">
          Earn Rewards{" "}
          <span className="text-amber-400 dark:text-amber-300">as You Play</span>
        </h2>
        <p className="mt-2 text-muted-foreground dark:text-white/70">
          Perks that keep users engaged
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4 items-center text-center">
        {perks.map((p) => (
          <Card
            key={p.title}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-border",
              "bg-card/55 backdrop-blur-xl",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
              "transition-transform duration-200 hover:-translate-y-0.5"
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.18),transparent_60%)] opacity-70" />
            <CardContent className="relative p-6">
              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl",
                )}
              >
                {/* <p.icon className="h-6 w-6 text-amber-500 dark:text-amber-300" /> */}
                <img src={p.icon} alt="p.title" className="h-16 w-16" />
              </div>

              <p className="mt-4 text-lg font-semibold text-foreground">
                {p.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground dark:text-white/70">
                {p.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
