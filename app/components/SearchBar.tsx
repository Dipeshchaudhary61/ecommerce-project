"use client";
import React from "react";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border rounded w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
    />
  );
}
