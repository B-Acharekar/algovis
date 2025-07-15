'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Stack', href: '/stack' },
  { label: 'Queue', href: '/queue' },
  { label: 'Linked List', href: '/linked-list' },
  { label: 'Notes', href: '/notes' },
  { label: 'Videos', href: '/videos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-purple-700 dark:text-purple-400"
        >
          AlgoVis
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-colors px-1.5 py-0.5 ${
                  isActive
                    ? 'text-purple-700 dark:text-purple-300'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 dark:bg-purple-400 rounded" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? (
            <X className="w-6 h-6 text-purple-600 dark:text-purple-300" />
          ) : (
            <Menu className="w-6 h-6 text-purple-600 dark:text-purple-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-sm">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`block text-sm font-medium px-2 py-2 rounded transition-colors ${
                  isActive
                    ? 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-800/40'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
