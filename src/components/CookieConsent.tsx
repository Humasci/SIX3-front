import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Cookie consent banner wired to Google Consent Mode (defaults are set to "denied" in index.html).
// The choice is saved in localStorage and applied on every page load before Google Tag Manager runs.
// The footer's "Cookie settings" link reopens it via the "six3:cookie-settings" event.

const KEY = "six3-consent";
type Choice = { analytics: boolean; marketing: boolean; date: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const readChoice = (): Choice | null => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
};

const applyChoice = (c: Choice) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* private mode: the choice applies to this visit only */
  }
  const g = (status: boolean) => (status ? "granted" : "denied");
  window.gtag?.("consent", "update", {
    analytics_storage: g(c.analytics),
    ad_storage: g(c.marketing),
    ad_user_data: g(c.marketing),
    ad_personalization: g(c.marketing),
  });
  window.dataLayer?.push({ event: "consent_update", consent_analytics: c.analytics, consent_marketing: c.marketing });
};

export const openCookieSettings = () => window.dispatchEvent(new Event("six3:cookie-settings"));

const Toggle = ({ label, hint, checked, onChange, disabled }: { label: string; hint: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) => (
  <label className={`flex items-start justify-between gap-4 rounded-xl border border-border px-4 py-3 ${disabled ? "opacity-70" : "cursor-pointer"}`}>
    <span>
      <span className="block text-sm font-medium text-foreground">{label}</span>
      <span className="block text-xs text-muted-foreground">{hint}</span>
    </span>
    <input
      type="checkbox"
      className="mt-1 h-4 w-4 accent-[#a855f7]"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
    />
  </label>
);

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    if (!saved) setOpen(true);
    const reopen = () => {
      const c = readChoice();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener("six3:cookie-settings", reopen);
    return () => window.removeEventListener("six3:cookie-settings", reopen);
  }, []);

  const decide = (a: boolean, m: boolean) => {
    applyChoice({ analytics: a, marketing: m, date: new Date().toISOString() });
    setOpen(false);
    setDetails(false);
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie preferences" className="fixed inset-x-4 bottom-4 z-[60] md:inset-x-auto md:right-6 md:bottom-6 md:w-[440px]">
      <div className="relative overflow-hidden rounded-2xl border border-[#a855f7]/30 bg-[hsl(243_50%_9%/0.96)] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-gradient-glow" />
        <p className="mb-2 text-base font-medium text-foreground">Cookies on SIX³</p>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          We use essential cookies to run the site. With your permission we'd also like to use analytics cookies to
          see how the site is used, and marketing cookies to measure our ads. You can change your mind any time.{" "}
          <Link to="/cookie-policy" className="text-gradient underline-offset-4 hover:underline">Cookie policy</Link>
        </p>

        {details && (
          <div className="mb-5 space-y-2">
            <Toggle label="Essential" hint="Needed for the site to work. Always on." checked disabled />
            <Toggle label="Analytics" hint="Anonymous usage statistics (Google Analytics)." checked={analytics} onChange={setAnalytics} />
            <Toggle label="Marketing" hint="Measures our ads on Google, LinkedIn and Meta." checked={marketing} onChange={setMarketing} />
          </div>
        )}

        {/* Accept and reject carry equal weight, as the ICO expects */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="rounded-full" onClick={() => decide(false, false)}>
            Reject all
          </Button>
          <Button variant="outline" className="rounded-full" onClick={() => decide(true, true)}>
            Accept all
          </Button>
        </div>
        <button
          type="button"
          className="mt-3 w-full text-center text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          onClick={() => (details ? decide(analytics, marketing) : setDetails(true))}
        >
          {details ? "Save my choices" : "Choose cookies"}
        </button>
      </div>
    </div>
  );
};
