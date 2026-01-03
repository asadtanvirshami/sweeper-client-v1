import { cn } from "@/lib/utils";

export default function GradientShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative min-h-dvh overflow-hidden", className)}>
      {/* Base (theme aware) */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-background" />

      {/* Color glows (match screenshot) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* TOP LEFT amber */}
        <div className="absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-amber-400/20 blur-[120px] dark:bg-amber-400/18" />

        {/* TOP RIGHT purple */}
        <div className="absolute -right-56 -top-44 h-[620px] w-[620px] rounded-full bg-violet-500/18 blur-[140px] dark:bg-violet-500/20" />

        {/* MID LEFT blue */}
        <div className="absolute -left-60 top-[28%] h-[680px] w-[680px] rounded-full bg-sky-500/16 blur-[160px] dark:bg-sky-500/18" />

        {/* MID RIGHT green */}
        <div className="absolute -right-64 top-[35%] h-[720px] w-[720px] rounded-full bg-emerald-500/16 blur-[170px] dark:bg-emerald-500/18" />

        {/* BOTTOM purple/blue */}
        <div className="absolute left-[18%] bottom-[-380px] h-[900px] w-[900px] rounded-full bg-indigo-500/14 blur-[200px] dark:bg-indigo-500/16" />

        {/* Center subtle highlight */}
        <div className="absolute left-1/2 top-[45%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-[140px] dark:bg-white/5" />
      </div>

      {/* Vignette (dark edges like screenshot) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.65)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.78)_100%)]" />

      {/* Subtle noise for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay dark:opacity-[0.08]">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Page content */}
      <div className="relative">{children}</div>
    </div>
  );
}
