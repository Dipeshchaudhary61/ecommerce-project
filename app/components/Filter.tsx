"use client";
import React from "react";

type FilterProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
};

export default function Filter({ selectedCategory, setSelectedCategory, categories }: FilterProps) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="p-2 border rounded w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
