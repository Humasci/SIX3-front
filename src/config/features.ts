// Site-wide switches. Set SHOW_CASE_STUDIES back to true to bring the case studies, the Portfolio page,
// the "Our Work" links and the case-study sections on service and industry pages back. Also remove the
// temporary /portfolio and /use-cases redirects in vercel.json.
export const SHOW_CASE_STUDIES = false;

export const CASE_STUDY_PATHS = /^\/(portfolio(\/|$)|use-cases\/law-firm-automation$)/;
