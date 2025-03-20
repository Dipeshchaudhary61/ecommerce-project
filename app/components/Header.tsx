"use client";
import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-200 cursor-pointer">
            My E-Commerce
          </span>
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            Home
          </Link>
          <Link href="/products" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            Products
          </Link>
          <Link href="/about" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            Contact
          </Link>
        </nav>

        {/* Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 flex flex-col space-y-2">
          <Link href="/" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            Home
          </Link>
          <Link href="/products" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            Products
          </Link>
          <Link href="/about" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="text-gray-900 dark:text-gray-200 hover:text-blue-500">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
