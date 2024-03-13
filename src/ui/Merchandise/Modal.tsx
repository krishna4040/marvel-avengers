// ui/common/Modal.tsx

import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Props {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ product, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full mb-4" />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-700 mb-4">{product.price}</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors" onClick={onClose}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Modal;
