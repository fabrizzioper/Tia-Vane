import React, { useState } from "react";
import { Menu, Search, ShoppingBag, X, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ logo, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const navigate = useNavigate();

  // Actualiza el valor local del input
  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
  };

  // Al dar click o presionar Enter, hacemos la búsqueda
  const handleSearchSubmit = () => {
    if (localSearch.trim() !== "") {
      // Navegamos a /sale?search=...
      navigate(`/sale?search=${encodeURIComponent(localSearch)}`);
      setLocalSearch("");
    }
  };

  // Detectar Enter en el input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1800px] mx-auto px-8 md:px-24 lg:px-28">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 flex-grow justify-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-900 hover:text-gray-600 py-2 text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            {/* Search input - visible only on lg screens and above */}
            <div className="hidden lg:block relative w-60">
              <input
                type="text"
                placeholder="Buscar"
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full"
                value={localSearch}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="absolute left-3 top-2.5 text-gray-500"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Search button - visible only below lg screens */}
            <button className="p-2 lg:hidden">
              <Search className="w-6 h-6" />
            </button>
            <button className="p-2">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2">
              <ShoppingBag className="w-6 h-6" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="p-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="mt-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-lg text-gray-900 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;