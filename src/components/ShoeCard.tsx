
import React from 'react';

interface ShoeCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  isHovered: boolean;
  isOtherHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

const ShoeCard: React.FC<ShoeCardProps> = ({
  id,
  name,
  price,
  image,
  isHovered,
  isOtherHovered,
  onHover,
  onLeave,
  onClick,
}) => {
  return (
    <div
      className={`relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out transform
        ${isHovered ? 'scale-110 shadow-2xl z-10' : isOtherHovered ? 'scale-95 opacity-70' : 'scale-100 hover:shadow-lg'}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=500&q=80`}
          alt={name}
          className={`w-full h-full object-contain transition-transform duration-500 
            ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}
          `}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse" />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-red-600">{price}</p>
        
        {isHovered && (
          <div className="mt-4 animate-fade-in">
            <p className="text-gray-600 text-sm mb-3">Premium quality athletic footwear</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black rounded-full border-2 border-white shadow"></div>
              <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-300"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoeCard;
