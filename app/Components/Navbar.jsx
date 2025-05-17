'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/news', label: 'News' },
        { href: '/boycott', label: 'Boycott' },
        { href: '/protests', label: 'Protests' },
        { href: '/resources', label: 'Resources' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-gray-300 shadow-sm  duration-200">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 ">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-red-600 dark:text-red-500 font-serif">
                    Free Palestine <span className="text-green-600 dark:text-green-500">BD</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 ">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative  font-medium transition-colors duration-300 
                  ${isActive
                                        ? 'text-red-600 dark:text-red-400'
                                        : 'text-gray-300 hover:text-red-500 '
                                    }`}
                            >
                                {label}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div>
                    <Link href={"/login"}>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-1 rounded font-semibold transition-all duration-300">
                            Login
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 dark:text-gray-200"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-900 px-4 pb-4 pt-2 space-y-2 transition-all duration-300 border-t border-gray-200 dark:border-zinc-700">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-2 py-1 rounded-md text-sm font-medium transition 
                  ${isActive
                                        ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
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
};

export default Navbar;
