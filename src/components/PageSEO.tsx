import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
}

export const PageSEO = ({ title, description, canonical }: PageSEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);
