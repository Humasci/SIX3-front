// Site-wide switches. Set SHOW_CASE_STUDIES back to true to bring the case studies, the Portfolio page,
// the "Our Work" links and the case-study sections on service and industry pages back. Also remove the
// temporary /portfolio and /use-cases redirects in vercel.json.
export const SHOW_CASE_STUDIES = false;

export const CASE_STUDY_PATHS = /^\/(portfolio(\/|$)|use-cases\/law-firm-automation$)/;

// Footer copyright line. Set SHOW_REGISTERED_COMPANY_FOOTER back to true to show the registered company
// details instead of the short SIX3 Agency Limited line.
export const SHOW_REGISTERED_COMPANY_FOOTER = false;
export const FOOTER_COPYRIGHT = {
  registered: "© 2018 - 2026 SIX3 Agency Limited Registered in England and Wales No. 11642660. All rights reserved.",
  short: "© SIX3 Agency Limited. All rights reserved.",
};
