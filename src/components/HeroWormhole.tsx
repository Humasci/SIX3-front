import { WormholeCanvas } from "@/components/WormholeCanvas";

// Light wormhole behind a white page hero; the section needs `relative isolate overflow-hidden`
export const HeroWormhole = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
    <WormholeCanvas variant="light" centerX={0.8} className="w-full h-full opacity-30 md:opacity-80" />
    {/* Phones: the wormhole runs behind the copy, so wash it out; desktop: fade it in from the right */}
    <div className="absolute inset-0 bg-background/40 md:bg-transparent md:bg-gradient-to-r md:from-background md:via-background/40 md:to-transparent" />
  </div>
);
