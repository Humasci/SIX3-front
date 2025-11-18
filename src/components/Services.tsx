import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design",
    description: "Creating stunning, user-friendly websites that captivate and convert.",
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Developing unique brand identities that resonate with your audience.",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description: "Strategic marketing solutions to amplify your digital presence.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces that enhance user experience.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">Services We Provide -</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
              Expert Services<br />
              to Drive Success
            </h2>
            <div className="text-6xl md:text-7xl font-light text-muted-foreground/30">
              67890
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border border-border p-8 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-6xl font-light text-muted-foreground/50">
                  {service.number}
                </span>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="text-2xl font-light mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
