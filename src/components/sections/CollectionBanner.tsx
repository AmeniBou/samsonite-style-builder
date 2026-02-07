const CollectionBanner = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
              Personnalisation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Rendez Votre Bagage{" "}
              <span className="italic font-light">Unique</span>
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Personnalisez votre valise avec une gravure exclusive. Choisissez
              vos initiales, un message ou un motif qui vous ressemble. Un
              bagage unique, pensé pour vous.
            </p>
            <a href="#personnalisation" className="cta-primary">
              Personnaliser Ma Valise
            </a>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "01", title: "Gravure Laser", desc: "Précision millimétrique" },
              { number: "02", title: "Choix Illimité", desc: "Texte, initiales, motifs" },
              { number: "03", title: "Durabilité", desc: "Résistant aux voyages" },
              { number: "04", title: "Cadeau Idéal", desc: "Personnalisé avec amour" },
            ].map((feature) => (
              <div
                key={feature.number}
                className="border border-primary-foreground/20 p-6 hover:border-primary-foreground/40 transition-colors"
              >
                <span className="text-xs text-primary-foreground/40 font-medium">
                  {feature.number}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-foreground/60">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;
