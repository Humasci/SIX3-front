import { ServiceTemplate } from "./ServiceTemplate";

const steps = [
  {
    number: "Step -01",
    title: "Analysis to drive insights",
    description:
      "We dive deep into data to uncover patterns, trends, opportunities, every decision is backed by strategic insights.",
    icon: "🎯",
  },
  {
    number: "Step -02",
    title: "Validation for reliable results",
    description:
      "Thorough testing ensures every solution performs with accuracy and consistency. We don't guess — we prove, refine.",
    icon: "🔬",
  },
  {
    number: "Step -03",
    title: "Engaging User Interface Designs",
    description:
      "Our interfaces are built to delight, guide, and convert effortlessly, visually appealing and intuitively crafted for every user.",
    icon: "🎨",
  },
  {
    number: "Step -04",
    title: "Reality with Expert Implementation",
    description:
      "From concept to execution, we bring ideas to life with precision, hands-on expertise ensures seamless, real-world.",
    icon: "💾",
  },
];

const WebDesign = () => {
  return (
    <ServiceTemplate
      title="Web Design"
      description="Creating stunning, user-friendly websites that captivate and convert. AI-powered solutions built for smarter digital experiences."
      steps={steps}
      overview="Designing websites that drive results and engage audiences."
      overviewDetails="Streamline processes with AI-powered solutions. Our web design services combine cutting-edge technology with creative excellence to build websites that not only look amazing but perform exceptionally."
    />
  );
};

export default WebDesign;
