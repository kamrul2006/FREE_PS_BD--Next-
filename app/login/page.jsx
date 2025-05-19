'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    // const [email, setEmail] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState("");

    // async function handleEmailSignIn(e) {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError("");

    //     // Sign in with Email Provider (magic link)
    //     const res = await signIn("email", {
    //         redirect: false,
    //         email,
    //         callbackUrl: "/", // after login redirect here
    //     });

    //     setLoading(false);

    //     if (res?.error) {
    //         setError(res.error);
    //     } else if (res?.ok) {
    //         alert("Check your email for the login link!");
    //         setEmail("");
    //     }
    // }

    function handleGoogleSignIn() {
        signIn("google", { callbackUrl: "/" });
    }

    function handleFBSignIn() {
        signIn("facebook", { callbackUrl: "/" });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Free Palestine BD</h2>

                {/* <form onSubmit={handleEmailSignIn} className="space-y-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="you@example.com"
                    />

                    {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 disabled:opacity-50"
                    >
                        {loading ? "Sending link..." : "Send Magic Link"}
                    </button>
                </form> */}

                {/* -------------facebook login------------------ */}

                <button
                    onClick={handleFBSignIn}
                    className="w-full border border-gray-300  py-2 flex items-center justify-center space-x-2 hover:bg-blue-400 bg-blue-500 rounded-full"
                >
                    <img
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
                        alt="FB logo"
                        className="w-5 h-5"
                    />
                    <span>Sign in with FB</span>
                </button>

                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-3 text-gray-400">OR</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* --------------git hub login------------------- */}

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full border border-gray-300 rounded-full py-2 flex items-center justify-center bg-gray-900 hover:bg-gray-700 text-white space-x-2 "
                >
                    <img
                        src="https://img.icons8.com/sf-regular-filled/50/FFFFFF/github.png"
                        alt="github logo"
                        className="w-5 h-5"
                    />
                    <span>Sign in with Github</span>
                </button>

                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-3 text-gray-400">OR</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* --------------------google login----------------------- */}

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full border border-gray-300 rounded-full py-2 flex items-center justify-center space-x-2 hover:bg-gray-100"
                >
                    <img
                        src="https://img.icons8.com/color/48/google-logo.png"
                        alt="Google logo"
                        className="w-5 h-5"
                    />
                    <span>Sign in with Google</span>
                </button>



            </div>
        </div>
    );
}
