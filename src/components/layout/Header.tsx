import { Search, MapPin, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Valises", href: "#valises" },
  { name: "Sacs à Dos", href: "#sacs-a-dos" },
  { name: "Sacs", href: "#sacs" },
  { name: "Accessoires", href: "#accessoires" },
  { name: "Personnalisation", href: "#personnalisation" },
];

const secondaryNav = [
  { name: "Services", href: "#services" },
  { name: "La Marque", href: "#la-marque" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border">
      {/* Main Header */}
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left - Search & Country */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
              <span className="hidden md:inline text-sm">Chercher</span>
            </button>
          </div>

          {/* Center - Logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              VOYAGEUR
            </h1>
          </a>

          {/* Right - Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="w-5 h-5" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-medium">
                0
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-border">
        <div className="container">
          <div className="flex items-center justify-between h-12">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-8">
              {secondaryNav.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-full bg-background border-b border-border p-4 animate-fade-in">
          <div className="container">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full pl-12 pr-4 py-3 bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-background border-b border-border animate-fade-in">
          <nav className="container py-4">
            <ul className="space-y-4">
              {[...navigation, ...secondaryNav].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-lg font-medium text-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
