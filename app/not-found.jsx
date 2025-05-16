'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white">
            <h1 className="text-6xl font-extrabold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-zinc-400 mt-2 max-w-md">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition"
            >
                Go to Homepage
            </Link>
        </div>
    );
}
