'use client';

import { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // You can connect this to your backend or API
        console.log('Logging in with:', { email, password });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-black to-red-900 px-4">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                    Welcome Back
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-400" size={18} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <a href="/register" className="text-green-700 hover:underline">
                        Register now
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Login;
