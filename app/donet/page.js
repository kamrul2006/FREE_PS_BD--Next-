'use client';

import Link from "next/link";

const DonatePage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
            <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-red-600">
                    Stand With Palestine
                </h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    Your donation can bring food, medicine, and hope to families suffering in Gaza.
                    Together, we can make a real difference.
                </p>

                <img
                    src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-03/240309-gaza-palestinian-air-strikes-israel-wm-424p-b4efc5.jpg"
                    alt="Palestinian child"
                    className="rounded-2xl shadow-lg border-2 border-red-500 w-full h-80 object-cover"
                />

                <p className="text-md text-gray-400">
                    100% of your donation goes to humanitarian aid through verified organizations.
                </p>

                <Link
                    href="https://donate.unrwa.org/int/en/general"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="mt-6 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md">
                        Donate Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DonatePage;
