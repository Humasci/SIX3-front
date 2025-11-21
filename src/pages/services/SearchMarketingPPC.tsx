import ServiceTemplate from "./ServiceTemplate";

const SearchMarketingPPC = () => {
  return (
    <ServiceTemplate
      title="Search Marketing / PPC"
      subtitle="Drive Growth with Data-Driven Paid Advertising"
      description="Maximize your ROI with strategic paid search campaigns that target the right audience at the right time. Our PPC experts leverage advanced analytics and optimization techniques to deliver measurable results across all major advertising platforms."
      features={[
        "Google Ads Management",
        "Social Media Advertising",
        "Display & Remarketing",
        "Conversion Rate Optimization",
        "Analytics & Reporting",
        "A/B Testing & Optimization",
      ]}
      process={[
        {
          title: "Strategy Development",
          description: "Comprehensive market research and competitor analysis to create a winning PPC strategy.",
        },
        {
          title: "Campaign Setup",
          description: "Expert campaign structuring with precise targeting, compelling ad copy, and optimized bidding.",
        },
        {
          title: "Continuous Optimization",
          description: "Ongoing monitoring and refinement to maximize performance and minimize costs.",
        },
        {
          title: "Performance Reporting",
          description: "Transparent reporting with actionable insights and clear ROI metrics.",
        },
      ]}
      cta="Start Your PPC Campaign"
    />
  );
};

export default SearchMarketingPPC;
