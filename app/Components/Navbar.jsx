'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/boycott', label: 'Boycott' },
        { href: '/news', label: 'News' },

        { href: '/donet', label: 'Donate' },
        { href: '/resources', label: 'Resources' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-300 shadow-sm transition duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <Link href="/" className="lg:text-2xl font-bold text-red-600 font-serif">
                    Free  <span className='text-black'>Palestine</span> <span className="text-green-600">BD</span>
                </Link>

                <div className="hidden md:flex space-x-6">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative font-medium transition-colors duration-300 ${isActive
                                    ? 'text-red-600'
                                    : 'text-gray-800 hover:text-red-500'
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

                <div className="hidden lg:flex items-center gap-4">
                    {!session?.user ? (
                        <Link href="/login">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold transition">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <>

                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="w-9 h-9 rounded-full cursor-pointer ring-2 ring-green-700 hover:ring-red-700"
                                onClick={() => router.push('/dashboard')}
                            />

                            <button
                                onClick={() => signOut()}
                                className="text-sm font-medium px-2 py-1 rounded text-white bg-green-700 hover:bg-green-500 hover:text-red-600"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 transition-all duration-300 border-t border-gray-200">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-2 py-1 rounded-md text-sm font-medium transition ${isActive
                                    ? 'bg-red-100 text-red-600'
                                    : 'text-gray-800 hover:bg-gray-100'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    {!session?.user ? (
                        <Link href="/login">
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <div className="flex items-center gap-3">
                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full ring-2 ring-green-700"
                                onClick={() => {
                                    setMenuOpen(false);
                                    router.push('/dashboard');
                                }}
                            />
                            <button
                                onClick={() => signOut()}
                                className="text-sm font-medium text-white bg-green-700 hover:bg-green-500"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
