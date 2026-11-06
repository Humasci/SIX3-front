import { WormholeCanvas } from "@/components/WormholeCanvas";

// Vertical wormhole behind a dark section; the section needs `relative isolate overflow-hidden`
export const WormholeBackdrop = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
    <WormholeCanvas orientation="vertical" className="w-full h-full opacity-70" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 55% 50% at 50% 50%, hsl(var(--background) / 0.85), hsl(var(--background) / 0.45) 60%, transparent 88%), linear-gradient(180deg, hsl(var(--background)) 0%, transparent 14%, transparent 86%, hsl(var(--background)) 100%)",
      }}
    />
  </div>
);
