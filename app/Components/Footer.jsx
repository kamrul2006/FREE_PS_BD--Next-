'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-300 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand / Logo */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Free Palestine BD</h2>
                    <p className="mt-2 text-sm">
                        Standing in solidarity with the people of Palestine. Raise your voice. Educate. Resist.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/boycott" className="hover:underline">Boycott List</Link></li>
                        <li><Link href="/news" className="hover:underline">News</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Social / Contact */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
                    <div className="flex gap-4 items-center mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="mailto:support@freepalestinebd.org"><Mail size={20} /></a>
                    </div>
                    <p className="text-sm">Email: support@freepalestinebd.org</p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} Free Palestine BD. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
