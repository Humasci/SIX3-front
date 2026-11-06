import { useLocation } from "react-router-dom";
import { HeroWormhole } from "@/components/HeroWormhole";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="theme-light relative isolate overflow-hidden flex min-h-screen items-center justify-center">
      <HeroWormhole />
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gradient w-fit pb-1 mx-auto">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-gradient underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
