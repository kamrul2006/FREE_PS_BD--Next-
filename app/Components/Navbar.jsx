'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/news', label: 'News' },
        { href: '/boycott', label: 'Boycott' },
        { href: '/protests', label: 'Protests' },
        { href: '/resources', label: 'Resources' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-red-600 font-serif">
                    Free Palestine <span className="text-green-600">BD</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-gray-700 dark:text-gray-200 hover:text-red-600 transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-gray-200"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-black px-4 pb-4 space-y-2">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="block text-gray-700 dark:text-gray-200 hover:text-red-600 transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
