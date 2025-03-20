"use client";
import React from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{product.category}</p>
      <p className="text-sm">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
    </div>
  );
}
