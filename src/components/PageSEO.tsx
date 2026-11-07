import { Helmet } from "react-helmet-async";

const SITE = "https://six3.agency";
const DEFAULT_IMAGE = `${SITE}/og-image.jpg`;

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  // Share image (absolute URL); defaults to the brand share image
  image?: string;
  // "article" for blog posts, otherwise "website"
  type?: "website" | "article";
  // Keep the page out of search results (404s and similar)
  noindex?: boolean;
  // Structured data (schema.org JSON-LD) for this page
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

// Title, description, canonical URL, social preview tags and structured data for one page.
// Rendered into static HTML at build time, so link previews and crawlers see them without JavaScript
export const PageSEO = ({ title, description, canonical, image = DEFAULT_IMAGE, type = "website", noindex = false, jsonLd }: PageSEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    {noindex && <meta name="robots" content="noindex, follow" />}
    <meta property="og:site_name" content="SIX³ Agency" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
  </Helmet>
);

// Who SIX³ is, for search engines: added to the homepage and referenced by articles
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/#organization`,
  name: "SIX³ Agency",
  legalName: "FKA WEB Limited",
  url: SITE,
  logo: `${SITE}/icon-512.png`,
  image: DEFAULT_IMAGE,
  email: "hello@six3.agency",
  description:
    "Brighton AI marketing and automation agency: search and paid media, AI video content and AI agents that answer every enquiry, as one growth system.",
  foundingDate: "2018",
  address: { "@type": "PostalAddress", addressLocality: "Brighton", addressCountry: "GB" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  sameAs: ["https://linkedin.com/company/six3-agency"],
  knowsAbout: ["AI marketing", "Paid media", "Google Ads", "AI video production", "AI receptionists", "Marketing automation"],
};
