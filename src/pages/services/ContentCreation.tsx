import ServiceTemplate from "./ServiceTemplate";

const ContentCreation = () => {
  return (
    <ServiceTemplate
      title="Content Creation"
      subtitle="Engaging Content That Drives Results"
      description="Transform your brand story into compelling content that resonates with your audience. From visual design to copywriting, we create content that captures attention, builds trust, and drives conversions across all channels."
      features={[
        "Video Production & Editing",
        "Graphic Design & Branding",
        "Copywriting & Storytelling",
        "Social Media Content",
        "Blog & Article Writing",
        "Infographics & Visual Assets",
      ]}
      process={[
        {
          title: "Content Strategy",
          description: "Define your brand voice, target audience, and content goals for maximum impact.",
        },
        {
          title: "Creative Development",
          description: "Conceptualize and produce high-quality content aligned with your brand identity.",
        },
        {
          title: "Multi-Channel Distribution",
          description: "Optimize and adapt content for various platforms and audience segments.",
        },
        {
          title: "Performance Analysis",
          description: "Track engagement metrics and refine strategy based on audience response.",
        },
      ]}
      cta="Create Compelling Content"
    />
  );
};

export default ContentCreation;
