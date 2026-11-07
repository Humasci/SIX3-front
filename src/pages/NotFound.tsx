import { useLocation } from "react-router-dom";
import { HeroWormhole } from "@/components/HeroWormhole";
import { PageSEO } from "@/components/PageSEO";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="theme-light relative isolate overflow-hidden flex min-h-screen items-center justify-center">
      <PageSEO
        title="Page not found | SIX³ Agency"
        description="The page you were looking for doesn't exist or has moved. Head back to the SIX³ Agency homepage to find what you need."
        canonical={`https://six3.agency${location.pathname}`}
        noindex
      />
      <HeroWormhole />
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gradient w-fit pb-1 mx-auto">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">This page doesn't exist or has moved.</p>
        <a href="/" className="text-gradient underline">
          Back to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
