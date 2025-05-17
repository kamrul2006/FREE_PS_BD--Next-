'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="bg-black py-20 px-4 max-w-7xl mx-auto rounded-4xl my-10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Stay Connected. Stay Aware.
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Join our newsletter to receive the latest updates on Palestine, boycott news, and activism opportunities.
                </p>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full sm:w-2/3 px-6 py-3 rounded-full border border-white text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
                        >
                            <Mail size={18} />
                            Subscribe
                        </button>
                    </form>
                ) : (
                    <p className="text-green-300 font-semibold mt-6">
                        🎉 Thank you for subscribing!
                    </p>
                )}

                <p className="mt-6 text-sm text-gray-400">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
