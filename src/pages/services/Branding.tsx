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

const Branding = () => {
  return (
    <ServiceTemplate
      title="Branding"
      description="We master the art of shaping a unique identity that resonates with audiences and sets a business apart."
      steps={steps}
      overview="Transforming your digital Brand with an impactful design branding to drive success."
      overviewDetails="Transforming your digital presence with innovative web design, intuitive app design, and impactful branding to drive business success. Enable businesses to thrive online by delivering tailored web development."
    />
  );
};

export default Branding;
