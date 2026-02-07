const categories = [
  {
    name: "Valises Cabine",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
    href: "#cabine",
  },
  {
    name: "Valises Soute",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=600&fit=crop",
    href: "#soute",
  },
  {
    name: "Sacs à Dos",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
    href: "#sacs-a-dos",
  },
  {
    name: "Accessoires",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&h=600&fit=crop",
    href: "#accessoires",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <p className="section-title text-center">Nos Catégories</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/3] overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold tracking-wide uppercase">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
