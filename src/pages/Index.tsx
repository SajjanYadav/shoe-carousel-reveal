
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ShoeCard from '../components/ShoeCard';
import ExpandedShoeView from '../components/ExpandedShoeView';

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedShoe, setExpandedShoe] = useState<any | null>(null);

  const shoes = [
    {
      id: 1,
      name: 'Urban Runner',
      price: '$129.99',
      image: 'photo-1549298916-b41d501d3772',
      description: 'Perfect for city running and daily activities. Features advanced cushioning technology and breathable mesh upper for maximum comfort during your urban adventures.',
    },
    {
      id: 2,
      name: 'Classic Sport',
      price: '$99.99',
      image: 'photo-1595950653106-6c9ebd614d3a',
      description: 'Timeless design meets modern performance. This versatile athletic shoe combines classic styling with contemporary comfort technologies for all-day wear.',
    },
    {
      id: 3,
      name: 'Street Elite',
      price: '$159.99',
      image: 'photo-1543508282-6319a3e2621f',
      description: 'Premium streetwear meets high-performance athletics. Crafted with premium materials and innovative design for the style-conscious athlete.',
    },
  ];

  const handleCardHover = (id: number) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (shoe: any) => {
    setExpandedShoe(shoe);
  };

  const handleCloseExpanded = () => {
    setExpandedShoe(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Step Into <span className="text-red-400">Style</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Discover our premium collection of athletic footwear designed for performance and style
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium athletic footwear
          </p>
        </div>

        {/* Shoe Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              id={shoe.id}
              name={shoe.name}
              price={shoe.price}
              image={shoe.image}
              isHovered={hoveredCard === shoe.id}
              isOtherHovered={hoveredCard !== null && hoveredCard !== shoe.id}
              onHover={() => handleCardHover(shoe.id)}
              onLeave={handleCardLeave}
              onClick={() => handleCardClick(shoe)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">SoleStyle</h3>
          <p className="text-gray-400">Premium athletic footwear for the modern lifestyle</p>
        </div>
      </footer>

      {/* Expanded Shoe View */}
      {expandedShoe && (
        <ExpandedShoeView
          shoe={expandedShoe}
          onClose={handleCloseExpanded}
        />
      )}
    </div>
  );
};

export default Index;
