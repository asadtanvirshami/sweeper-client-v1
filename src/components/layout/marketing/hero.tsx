import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Gift, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className={[
        "relative w-full overflow-hidden rounded-3xl border bg-card text-card-foreground",
        "px-6 py-7",
        // gradient layer that adapts
        "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_30px_80px_rgba(0,0,0,0.25)]",
        "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.7)]",
      ].join(" ")}
    >
      {/* Background gradient overlays (theme-aware) */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/25 via-transparent to-emerald-200/15 dark:from-zinc-900/70 dark:via-black dark:to-zinc-950" />
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.14),transparent_55%)]" />
      </div>

      {/* content */}
      <div className="relative">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-200 shadow-[0_10px_40px_rgba(255,193,7,0.25)]" />
            <div className="leading-tight">
              <p className="text-xs text-muted-foreground">Welcome to</p>
              <p className="text-sm font-semibold">GAME VAULT</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-secondary/70 hover:bg-secondary"
            >
              <Link href="/auth/signin">Login</Link>
            </Button>

            <Button
              size="sm"
              className="bg-amber-400 text-black hover:bg-amber-300"
            >
              <Link href="/auth/signup">Register</Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          {/* Copy */}
          <div>
            <Badge className="border border-emerald-500/25 bg-emerald-500/15 text-emerald-700 dark:text-emerald-200">
              UC SWEEP
            </Badge>

            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Play. Win. Redeem.
            </h1>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Spin, collect rewards, and redeem for real prizes. Fast payouts,
              clean UI, and a premium experience.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button className="bg-amber-400 text-black hover:bg-amber-300">
                Start Playing
              </Button>

              <Button
                variant="secondary"
                className="bg-secondary/70 hover:bg-secondary"
              >
                Explore Games
              </Button>

              <div className="ml-0 flex items-center gap-2 text-xs text-muted-foreground md:ml-2">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                  Secure
                </span>
                <span className="inline-flex items-center gap-1">
                  <Coins className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                  Instant rewards
                </span>
                <span className="inline-flex items-center gap-1">
                  <Gift className="h-4 w-4 text-pink-600 dark:text-pink-300" />
                  Bonuses
                </span>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-2">
              <div className="h-8 w-8 rounded-xl bg-amber-400/30" />
              <div className="leading-tight">
                <p className="text-xs text-muted-foreground">Sign up & get</p>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-200">
                  $10k Bonus
                </p>
              </div>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.20),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(0,255,153,0.14),transparent_50%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.25),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(0,255,153,0.18),transparent_50%)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.7)]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
