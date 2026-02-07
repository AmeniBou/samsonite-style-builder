import heroImage from "@/assets/hero-luggage.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl">
          {/* Collection Name */}
          <div
            className="mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-white/80 text-lg md:text-xl font-light tracking-[0.3em] uppercase">
              Collection 2026
            </span>
          </div>

          {/* Title */}
          <h2
            className="hero-title mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="hero-title-italic">SOLID</span> AS A ROCK
            <br />
            REMARKABLY <span className="hero-title-italic">LIGHT</span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-white/70 text-sm md:text-base mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            *Solide comme un roc, incroyablement légère
          </p>

          {/* CTA */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#collection" className="cta-primary">
              Découvrez la Collection
            </a>
          </div>
        </div>

        {/* Floating Product Name */}
        <div
          className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 opacity-0 animate-slide-in-right hidden lg:block"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-6xl xl:text-8xl font-bold text-white/10 tracking-tight">
            NEXIS
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
