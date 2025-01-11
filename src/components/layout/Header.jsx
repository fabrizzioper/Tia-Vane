import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X, Heart } from 'lucide-react';

const Header = ({ 
  logo = '/api/placeholder/48/48',
  menuItems = [
    { label: 'Lo nuevo', href: '#' },
    { label: 'Hombre', href: '#' },
    { label: 'Mujer', href: '#' },
    { label: 'Niños', href: '#' },
    { label: 'Accesorios', href: '#' },
    { label: 'Nike Sale⚡️', href: '#' },
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1800px] mx-auto px-8">
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
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Buscar"
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
            </div>
            <button className="p-2 md:hidden">
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