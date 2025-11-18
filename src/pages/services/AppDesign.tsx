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

const AppDesign = () => {
  return (
    <ServiceTemplate
      title="App Design"
      description="We focus on creating user-friendly interfaces and seamless experiences for mobile and desktop applications."
      steps={steps}
      overview="Crafting intuitive app experiences that engage and delight users."
      overviewDetails="We specialize in designing mobile and desktop applications that combine beautiful aesthetics with flawless functionality. Our approach ensures every interaction is intuitive and purposeful."
    />
  );
};

export default AppDesign;
