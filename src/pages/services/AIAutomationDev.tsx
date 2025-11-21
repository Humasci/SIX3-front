import ServiceTemplate from "./ServiceTemplate";

const AIAutomationDev = () => {
  return (
    <ServiceTemplate
      title="AI Automation / Dev"
      subtitle="Intelligent Solutions for Modern Business"
      description="Harness the power of artificial intelligence to automate workflows, enhance decision-making, and scale your operations. We design and develop custom AI solutions that integrate seamlessly with your existing systems to drive efficiency and innovation."
      features={[
        "Process Automation",
        "Custom AI Development",
        "Intelligent Chatbots",
        "Data Processing & Analysis",
        "API Integration",
        "Workflow Optimization",
      ]}
      process={[
        {
          title: "Discovery & Analysis",
          description: "Identify automation opportunities and assess technical requirements for your business.",
        },
        {
          title: "Solution Design",
          description: "Architect custom AI solutions tailored to your specific workflows and objectives.",
        },
        {
          title: "Development & Integration",
          description: "Build and deploy AI systems with seamless integration into your existing infrastructure.",
        },
        {
          title: "Training & Support",
          description: "Comprehensive training and ongoing support to ensure successful adoption and optimization.",
        },
      ]}
      cta="Automate with AI"
    />
  );
};

export default AIAutomationDev;
