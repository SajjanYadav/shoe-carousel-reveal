
import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

interface ExpandedShoeViewProps {
  shoe: {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
  };
  onClose: () => void;
}

const ExpandedShoeView: React.FC<ExpandedShoeViewProps> = ({ shoe, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('sole');

  const tabs = [
    { id: 'sole', label: 'Sole' },
    { id: 'design', label: 'Design' },
    { id: 'fit', label: 'Fit' },
  ];

  const tabContent = {
    sole: 'Advanced cushioning technology with premium rubber compound for superior grip and durability.',
    design: 'Contemporary aesthetic meets functional design with premium materials and attention to detail.',
    fit: 'Engineered for comfort with anatomical support and breathable materials for all-day wear.',
  };

  return (
    <div className="fixed inset-0 z-50 bg-white animate-scale-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <X size={24} />
      </button>

      <div className="h-full flex flex-col">
        {/* Top Half - Red Background with Shoe Image */}
        <div className="h-1/2 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center p-8">
          <img
            src={`https://images.unsplash.com/${shoe.image}?auto=format&fit=crop&w=800&q=80`}
            alt={shoe.name}
            className="max-h-full max-w-full object-contain transform rotate-0 animate-fade-in"
            style={{ transform: 'rotate(-15deg) scale(1.2)' }}
          />
        </div>

        {/* Bottom Half - White Background with Product Details */}
        <div className="h-1/2 bg-white p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{shoe.name}</h1>
                <p className="text-4xl font-bold text-red-600 mb-6">{shoe.price}</p>
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-lg font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105">
                  Add to Cart
                </button>
              </div>

              <div>
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-red-600 border-b-2 border-red-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="text-gray-700 mb-6 animate-fade-in">
                  {tabContent[activeTab as keyof typeof tabContent]}
                </div>

                {/* About Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">About</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {shoe.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedShoeView;
