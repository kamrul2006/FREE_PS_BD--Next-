'use client';

export default function AboutTheCause() {
    return (
        <main className="bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100 py-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
                    About the Cause
                </h1>

                <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
                    Our mission is to raise awareness and encourage peaceful resistance against injustice,
                    apartheid, and the unlawful occupation of Palestine. This platform is a voice for the
                    voiceless, advocating through informed decisions like boycotting brands that directly
                    or indirectly support systems of oppression.
                </p>

                <div className="grid gap-8 md:grid-cols-2 text-left">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-green-400 mb-2">Why Boycott?</h2>
                        <p className="text-gray-400">
                            Economic pressure is a powerful non-violent tool. By refusing to financially support
                            companies complicit in oppression, we push for accountability and justice.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-green-400 mb-2">Our Vision</h2>
                        <p className="text-gray-400">
                            A free and sovereign Palestine where all people live with dignity, justice, and
                            equality. We aim to educate, mobilize, and inspire peaceful resistance globally.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-green-400 mb-2">How You Can Help</h2>
                        <p className="text-gray-400">
                            Share the facts. Support Palestinian-led movements. Boycott complicit brands. Use your
                            voice and platform to spread truth and solidarity.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-green-400 mb-2">Stay Informed</h2>
                        <p className="text-gray-400">
                            Misinformation is rampant. We provide verified sources and news to keep you updated.
                            Knowledge is the first step toward change.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
