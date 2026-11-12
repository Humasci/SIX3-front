import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WormholeCanvas } from "@/components/WormholeCanvas";

type WormholeCtaProps = {
  buttonLabel: string;
  to?: string;
  // Optional heading and line underneath, replacing the defaults
  title?: string;
  subtitle?: string;
};

// Closing call to action with a vertical wormhole running behind the copy
export const WormholeCta = ({ buttonLabel, to = "/contact", title, subtitle }: WormholeCtaProps) => (
  <section className="relative isolate overflow-hidden py-32 md:py-40 px-6 bg-background">
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <WormholeCanvas orientation="vertical" className="w-full h-full opacity-90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 48% 42% at 50% 50%, hsl(var(--background) / 0.82), hsl(var(--background) / 0.35) 60%, transparent 85%), linear-gradient(180deg, hsl(var(--background)) 0%, transparent 16%, transparent 84%, hsl(var(--background)) 100%)",
        }}
      />
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight text-foreground">
        {title ?? (
          <>
            Ready for growth,{" "}
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#a855f7] via-[#f97316] to-glow bg-clip-text text-transparent">cubed</span>?
          </>
        )}
      </h2>
      <div className="mx-auto mb-8 h-1 w-40 rounded-full bg-brand-gradient-glow" />
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        {subtitle ?? (
          <>
            Start with a two-week AI Growth Audit: a clear plan for your biggest growth opportunities and what to tackle first,
            whether or not you work with us afterwards.
          </>
        )}
      </p>
      <Link
        to={to}
        className="group relative inline-flex items-center gap-3 rounded-full p-[1.5px] bg-brand-gradient-glow shadow-[0_0_40px_-12px_rgba(249,115,22,0.6)] transition-shadow duration-300 hover:shadow-[0_0_60px_-8px_rgba(253,231,176,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="inline-flex items-center gap-3 rounded-full bg-background px-10 py-5 text-lg font-medium text-foreground transition-colors duration-300 group-hover:bg-brand-gradient-button group-hover:text-white">
          {buttonLabel}
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </div>
  </section>
);
