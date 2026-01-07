import Image from "next/image";
import { cn } from "@/lib/utils";
import CASIO_SVG from "../../../../public/assets/SVGs/3d-casino.svg";
import mascot from "../../../../public/assets/SVGs/mascot.svg";

export default function Hero() {
  return (
    <section
      className={cn(


      )}
    >
      {/* Background wash */}

      <header className="bg-black flex items-center justify-between px-4 md:px-8 py-3 w-full border rounded-xl">
        <div className="flex items-center gap-2">
          <img src={mascot.src} alt="Mascot" className="h-10 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 md:px-8 md:py-2 rounded-full hover:bg-yellow-600 transition">
            Login
          </button>
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 md:px-8 md:py-2 rounded-full hover:bg-yellow-600 transition">
            Sign up
          </button>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
        <div className="relative p-6 md:p-10">
          {/* Header */}
          <div className="leading-tight w-full">
            <p className="text-2xl text-muted-foreground dark:text-white/70">
              Welcome to
            </p>
            <p className="text-7xl font-bold tracking-tight text-foreground dark:text-white">
              GAME VAULT
            </p>
            <p className="text-7xl font-extrabold tracking-tight text-amber-400 dark:text-amber-300">
              UC SWEEP
            </p>
            {/* LEFT COPY */}
            <div>
              <p className="max-w-md text-xl leading-relaxed text-muted-foreground dark:text-white/75">
                Your favorite slots, fish tables, and live games – all in one
                place. Play for free, and win real cash prizes!
              </p>

              <div className="mt-10">
                <p className="text-xl font-semibold text-foreground dark:text-white">
                  Sign Up & Get
                </p>

                {/* Bonus pill
                <div className="mt-4 inline-flex items-center gap-5 rounded-full border border-amber-400/40 bg-black/25 px-6 py-4 shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
                  <span className="text-2xl font-semibold text-foreground dark:text-white">
                    $10k Bonus
                  </span>

                  <Coin tone="amber" label="G" size="md" />
                </div> */}

                <div className="mt-4 inline-flex items-center gap-5 rounded-full p-[1px] bg-gradient-to-b from-amber-400/50 to-black/50">
                  <div className="flex items-center gap-5 rounded-full bg-black/25 px-4 py-2">
                    <span className="text-2xl font-semibold text-foreground dark:text-white">
                      $10k Bonus
                    </span>
                    <Coin tone="amber" label="G" size="md" />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="relative mx-auto h-[280px] w-full  md:h-[660px]">
            <Image
              src={CASIO_SVG}
              alt="Cards & Chips"
              fill
              className="object-contain drop-shadow-[0_45px_60px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* Ambient glows */}
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 rounded-full bg-amber-400/10 blur-3xl md:block" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 hidden h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl md:block" />
        </div>
      </div>
    </section>
  );
}

function Coin({
  tone,
  label,
  size,
}: {
  tone: "amber" | "emerald";
  label: string;
  size: "md" | "sm";
}) {
  const dims = size === "md" ? "h-14 w-14" : "h-12 w-12";
  const inner = size === "md" ? "h-10 w-10 text-2xl" : "h-9 w-9 text-xl";

  return (
    <div
      className={cn(
        "grid place-items-center rounded-full shadow-[0_25px_55px_rgba(0,0,0,0.45)]",
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
