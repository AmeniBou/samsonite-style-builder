import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  products: {
    title: "Produits",
    links: ["Valises", "Sacs à Dos", "Sacs Business", "Accessoires", "Disney & Enfants"],
  },
  services: {
    title: "Services",
    links: ["Personnalisation", "Réparation", "Garantie", "Stores", "Contact"],
  },
  brand: {
    title: "La Marque",
    links: ["Notre Histoire", "Durabilité", "Innovation", "Carrières", "Presse"],
  },
  help: {
    title: "Aide",
    links: ["FAQ", "Livraison", "Retours", "Suivi Commande", "Tailles Guide"],
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-2">
              Rejoignez Notre Communauté
            </h3>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Inscrivez-vous pour recevoir nos offres exclusives et un cadeau de
              bienvenue
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary font-semibold uppercase text-sm tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold tracking-tight">
                VOYAGEUR
              </span>
              <p className="text-xs text-primary-foreground/40">
                © 2026 Tous droits réservés
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary-foreground/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
