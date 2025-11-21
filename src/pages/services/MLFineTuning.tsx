import ServiceTemplate from "./ServiceTemplate";

const MLFineTuning = () => {
  return (
    <ServiceTemplate
      title="ML Fine Tuning"
      subtitle="Precision-Optimized Machine Learning Models"
      description="Unlock the full potential of machine learning with expert model fine-tuning services. We optimize pre-trained models and custom algorithms to achieve superior performance on your specific tasks, delivering accuracy and efficiency that generic solutions can't match."
      features={[
        "Model Optimization",
        "Transfer Learning",
        "Hyperparameter Tuning",
        "Dataset Preparation",
        "Performance Benchmarking",
        "Model Deployment",
      ]}
      process={[
        {
          title: "Model Assessment",
          description: "Evaluate current model performance and identify optimization opportunities.",
        },
        {
          title: "Data Preparation",
          description: "Clean, augment, and structure your datasets for optimal training results.",
        },
        {
          title: "Fine-Tuning Process",
          description: "Apply advanced techniques to refine model parameters and improve accuracy.",
        },
        {
          title: "Validation & Deployment",
          description: "Rigorous testing and seamless deployment to production environments.",
        },
      ]}
      cta="Optimize Your Models"
    />
  );
};

export default MLFineTuning;
