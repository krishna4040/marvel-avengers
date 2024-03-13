// ui/Merchandise/merchandise.tsx
"use client"

import React, { useState } from 'react';
import { Navbar } from '@/ui/ComponentExporters';
import Modal from './Modal'; // Import your modal component

// Define a type or interface for the product
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const MerchandisePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Add type for selectedProduct

  const products: Product[] = [
    { id: 1, name: 'Iron Man T-shirt', price: '$25.99', image: 'avengers.jpg', description: 'A stylish T-shirt featuring Iron Man.' },
    { id: 2, name: 'Captain America Shield Replica', price: '$84.99', image: '/captainamerica.jpg', description: 'A high-quality replica of Captain America\'s shield.' },
    { id: 3, name: 'Captain America Shield Replica', price: '$15.00', image: '/captainamerica.jpg', description: 'A high-quality replica of Captain America\'s shield.' },
    { id: 4, name: 'Captain America Shield Replica', price: '$72.90', image: '/captainamerica.jpg', description: 'A high-quality replica of Captain America\'s shield.' },
    { id: 5, name: 'Captain America Shield Replica', price: '$15.09', image: '/captainamerica.jpg', description: 'A high-quality replica of Captain America\'s shield.' },
   
    // Add more product objects here
  ];

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'black' }}>
      <Navbar/>
      <h2 className=" text-4xl font-bold mt-40 text-left">The Avenger Store</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
        ))}
      </div>
      {showModal && selectedProduct && <Modal onClose={() => setShowModal(false)} product={selectedProduct} />}
    </div>
  );
};

// Define a type or interface for the props
interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="bg-gray-300 rounded-xl p-6 cursor-pointer transition duration-300 transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full rounded-md mb-4 max-w-xs" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-400 mb-2">{product.price}</p>
      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors" onClick={() => onViewDetails(product)}>View Details</button>
    </div>
  );
};

export default MerchandisePage;
