import { Truck, RotateCcw, Mail } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    text: "Livraison offerte à partir de 100€",
    href: "#livraison",
  },
  {
    icon: RotateCcw,
    text: "Retours gratuits",
    href: "#retours",
  },
  {
    icon: Mail,
    text: "Rejoignez notre communauté",
    highlight: "+ cadeau",
    href: "#newsletter",
  },
];

const BenefitsBar = () => {
  return (
    <div className="bg-secondary py-3 border-b border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          {benefits.map((benefit) => (
            <a key={benefit.text} href={benefit.href} className="benefits-bar">
              <benefit.icon className="w-4 h-4" />
              <span className="underline">{benefit.text}</span>
              {benefit.highlight && (
                <span className="text-accent font-semibold no-underline">
                  {benefit.highlight}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsBar;
