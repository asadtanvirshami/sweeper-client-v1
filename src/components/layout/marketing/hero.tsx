import Image from "next/image";
import { cn } from "@/lib/utils";
import CASIO_SVG from "../../../../public/assets/SVGs/3d-casino.svg";

export default function Hero() {
  return (
    <section className={cn("relative w-full overflow-hidden rounded-3xl")}>
      {/* ===== DESKTOP: 2 cols | MOBILE: stacked like screenshot ===== */}
      <div className="relative grid w-full grid-cols-1 md:grid-cols-2">
        {/* LEFT (copy) */}
        <div className="relative z-10 p-6 md:p-10">
          <div className="mx-auto flex w-full max-w-xl flex-col gap-5 text-center md:mx-0 md:max-w-none md:text-left">
            <p className="text-lg font-semibold tracking-wide text-white/80 md:text-2xl">
              WELCOME TO
            </p>

            <div className="leading-[0.92]">
              <p className="text-5xl font-extrabold tracking-tight text-lime-400 md:text-7xl">
                UC Sweep
              </p>
            </div>

            <p className="mx-auto max-w-lg text-base leading-relaxed text-white/70 md:mx-0 md:text-lg">
              Your favorite slots, fish tables, and live games – all in one
              place. Play for free, and win real cash prizes!
            </p>

            {/* divider line (mobile screenshot) */}
            <div className="mx-auto mt-2 h-px w-full max-w-lg  md:mx-0 md:max-w-xl" />

            <div className="mt-2">
              <p className="text-xl font-semibold text-white md:text-2xl">
                Sign Up &amp; Get
              </p>

              {/* bonus pills row (matches screenshot layout) */}
              <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
                <PillLeft />
                <span className="text-2xl font-extrabold text-white">+</span>
                <PillRight />
              </div>

              <button
                type="button"
                className={cn(
                  "mt-6 inline-flex items-center justify-center rounded-full px-10 py-4",
                  "bg-lime-400 text-black font-extrabold tracking-wide",
                  "shadow-[0_22px_55px_rgba(0,0,0,0.45)]",
                  "hover:bg-lime-300 transition"
                )}
              >
                CLAIM FREE COINS
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT (visual) */}
        <div className="relative">
          {/* desktop hero art area */}
          <div className="relative hidden h-[660px] w-full md:block">
            <Image
              src={CASIO_SVG}
              alt="UC Sweeper"
              fill
              priority
              className="object-cover object-center drop-shadow-[0_45px_60px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* MOBILE: image goes to bottom like screenshot */}
          <div className="relative mt-6 h-[320px] w-full md:hidden">
            <Image
              src={CASIO_SVG}
              alt="UC Sweeper"
              fill
              priority
              className="object-cover object-bottom drop-shadow-[0_45px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** ===== Pills exactly like screenshot ===== */

function PillLeft() {
  return (
    <div
      className={cn(
        "inline-flex  justify-between items-center rounded-full w-full md:w-[30%] lg:w-[45%] xl:w-[25%] ",
        "border border-amber-400/35 bg-black/35",
        "shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
      )}
    >
      <span className="text-[15px] pl-2 font-extrabold text-amber-200 md:text-xl">
        10K GC
      </span>
      <Coin tone="amber" label="G" />
    </div>
  );
}

function PillRight() {
  return (
    <div
      className={cn(
        "inline-flex  justify-between items-center rounded-full w-full md:w-[30%] lg:w-[45%] xl:w-[25%] ",
        "border border-emerald-400/35 bg-emerald-500/10",
        "shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
      )}
    >
      <span className="text-[15px] pl-2  font-extrabold text-emerald-200 md:text-xl">
        0.20 PTS
      </span>
      <Coin tone="emerald" label="S" />
    </div>
  );
}

function Coin({ tone, label }: { tone: "amber" | "emerald"; label: string }) {
  return (
    <div
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full",
        "shadow-[0_25px_55px_rgba(0,0,0,0.45)]",
        tone === "amber"
          ? "bg-gradient-to-b from-amber-300 to-amber-500"
          : "bg-gradient-to-b from-emerald-400 to-emerald-600"
      )}
    >
      <div className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-xl font-black text-black shadow-inner">
        {label}
      </div>
    </div>
  );
}
