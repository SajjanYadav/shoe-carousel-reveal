
import React from 'react';
import { Home, ShoppingCart, Phone, Package } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">SoleStyle</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2">
                <Home size={18} />
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2">
                <Package size={18} />
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2">
                <Phone size={18} />
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2">
                <ShoppingCart size={18} />
                Cart
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
