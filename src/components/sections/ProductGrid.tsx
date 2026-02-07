import { useState } from "react";

interface Product {
  id: number;
  name: string;
  collection: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Nexis Valise à 4 roues extensible 76cm",
    collection: "Nexis",
    price: 349,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&h=720&fit=crop",
    badge: "Personnalisable",
    colors: ["#0A4D5C", "#2C3E50", "#1A1A1A"],
  },
  {
    id: 2,
    name: "Proxis Valise Cabine 55cm",
    collection: "Proxis",
    price: 299,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=720&fit=crop",
    badge: "Personnalisable",
    colors: ["#C41E3A", "#0A4D5C", "#1A1A1A"],
  },
  {
    id: 3,
    name: "Lite-Box Alu Valise 69cm",
    collection: "Lite-Box",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=600&h=720&fit=crop",
    badge: "Promo",
    colors: ["#C0C0C0", "#1A1A1A"],
  },
  {
    id: 4,
    name: "Magnum Eco Valise 75cm",
    collection: "Magnum Eco",
    price: 259,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=720&fit=crop",
    badge: "Éco-responsable",
    colors: ["#228B22", "#0A4D5C", "#8B4513"],
  },
];

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24" id="collection">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <p className="section-title">Nos Recommandations</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="product-card group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}

              {/* Image */}
              <div className="aspect-[5/6] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-image"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                {/* Collection */}
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {product.collection}
                </p>

                {/* Name */}
                <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>

                {/* Colors */}
                <div className="flex items-center gap-1.5 mb-3">
                  {product.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-foreground">
                    {product.price}€
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}€
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 pointer-events-none ${
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a href="#valises" className="cta-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Voir Toutes les Valises
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
