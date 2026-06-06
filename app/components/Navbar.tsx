'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/cost', label: 'Cost' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Gentle Pet Cremation" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-zinc-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#quote"
            className="rounded-full bg-zinc-900 px-5 py-2 text-white hover:bg-black transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-zinc-600 transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#quote"
              className="mt-2 rounded-full bg-zinc-900 px-5 py-3 text-center text-white hover:bg-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
