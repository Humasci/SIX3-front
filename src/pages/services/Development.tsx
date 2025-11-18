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

const Development = () => {
  return (
    <ServiceTemplate
      title="Development"
      description="Turning design concepts into functional software through coding. It includes front-end, back-end, and full-stack development expertise."
      steps={steps}
      overview="Building robust digital solutions with expert development."
      overviewDetails="From concept to execution, we transform ideas into powerful, scalable applications. Our development team specializes in front-end, back-end, and full-stack solutions that drive business success."
    />
  );
};

export default Development;
