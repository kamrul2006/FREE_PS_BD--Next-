'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-zinc-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex items-center  text-xl md:text-2xl font-serif text-red-600 font-stretch-125% font-extrabold"
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={36}
                        height={36}
                        className="w-9 h-9 md:w-10 md:h-10 object-contain"
                    />
                    <span>
                        Free <span className="text-black">Palestine</span>{' '}
                        <span className="text-green-600">BD</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative font-medium text-sm transition duration-300 ${isActive
                                    ? 'text-red-600'
                                    : 'text-gray-700 hover:text-red-500'
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

                {/* Auth Section */}
                <div className="hidden lg:flex items-center gap-4">
                    {!session?.user ? (
                        <Link href="/login">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Image
                                src={session.user.image}
                                alt="Profile"
                                width={36}
                                height={36}
                                className="w-9 h-9 rounded-full ring-2 ring-green-600 hover:ring-red-600 cursor-pointer"
                                onClick={() => router.push('/dashboard')}
                            />
                            <button
                                onClick={() => signOut()}
                                className="text-sm font-medium text-white bg-green-600 px-3 py-1 rounded hover:bg-green-500"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-zinc-200 px-4 pb-6 pt-4 shadow-md space-y-2">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md font-medium text-sm ${isActive
                                    ? 'bg-red-100 text-red-600'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    {!session?.user ? (
                        <Link href="/login">
                            <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <div className="flex items-center gap-3 mt-4">
                            <Image
                                src={session.user.image}
                                alt="Profile"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full ring-2 ring-green-600"
                                onClick={() => {
                                    setMenuOpen(false);
                                    router.push('/dashboard');
                                }}
                            />
                            <button
                                onClick={() => signOut()}
                                className="text-sm font-medium text-white bg-green-600 px-3 py-1 rounded hover:bg-green-500"
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
