'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();


    function handleGoogleSignIn() {
        signIn("google", { callbackUrl: "/" });
    }

    function handleFBSignIn() {
        signIn("facebook", { callbackUrl: "/" });
    }

    function handleGithubSignIn() {
        signIn("github", { callbackUrl: "/" });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Free Palestine BD</h2>


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
                    onClick={handleGithubSignIn}
                    className="w-full border border-gray-300 rounded-full py-2 flex items-center justify-center bg-gray-900 hover:bg-gray-700 text-white space-x-2"
                >
                    <img
                        src="https://img.icons8.com/sf-regular-filled/50/FFFFFF/github.png"
                        alt="GitHub logo"
                        className="w-5 h-5"
                    />
                    <span>Sign in with GitHub</span>
                </button>


                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-3 text-gray-400">OR</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* --------------------google login----------------------- */}

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full border border-gray-300 rounded-full py-2 flex items-center justify-center space-x-2 hover:bg-gray-100 bg-amber-200"
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
