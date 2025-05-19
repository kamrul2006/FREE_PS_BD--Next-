'use client';

import { BookOpen, Film, FileText, } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const categorizedResources = {
    Articles: [
        {
            title: "History of the Israeli-Palestinian Conflict",
            description: "A timeline and analysis of the major events shaping the region.",
            icon: <BookOpen className="text-red-500 w-6 h-6" />,
            link: "https://www.aljazeera.com/news/2023/10/7/timeline-of-the-israeli-palestinian-conflict",
        },
        {
            title: "Understanding BDS Movement",
            description: "A non-violent global campaign promoting Palestinian rights.",
            icon: <BookOpen className="text-purple-500 w-6 h-6" />,
            link: "https://bdsmovement.net/",
        },
    ],
    Videos: [
        {
            title: "Gaza Fights for Freedom – Documentary",
            description: "A powerful film revealing the blockade and resistance in Gaza.",
            icon: <Film className="text-green-500 w-6 h-6" />,
            link: "https://www.youtube.com/watch?v=HnZSaKYmP2s",
        },
        {
            title: "Free Palestine – Documentary",
            description: "A powerful film revealing the blockade and resistance in Gaza.",
            icon: <Film className="text-green-500 w-6 h-6" />,
            link: "https://www.youtube.com/watch?v=HnZSaKYmP2s",
        },
    ],
    Reports: [
        {
            title: "UN Human Rights Report on Palestine",
            description: "In-depth reporting on the conditions in occupied territories.",
            icon: <FileText className="text-yellow-400 w-6 h-6" />,
            link: "https://www.ohchr.org/en/documents/country-reports/report-high-commissioner-human-rights-situation-human-rights-palestinian",
        },
    ],
    Downloads: [
        {
            title: "Palestine Fact Sheet (PDF)",
            description: "Quick facts and stats you can print or share.",
            icon: <FileText className="text-blue-500 w-6 h-6" />,
            link: "/files/palestine-factsheet.pdf",
        },
    ]
};

export default function ResourcesPage() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <p className="text-lg animate-pulse">Loading...</p>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 px-4">
                <div className="bg-gray-800 rounded-3xl p-10 max-w-md text-center shadow-2xl border border-green-700">
                    <h2 className="text-3xl font-bold text-red-500 mb-4">You are not logged in</h2>
                    <p className="text-gray-300 mb-6">
                        Please log in first to view the  Resources Page and details.
                    </p>
                    <Link
                        href="/login"
                        className="inline-block bg-green-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition"
                    >
                        Login Now
                    </Link>
                </div>
            </div>
        );
    }



    return (
        <section className="min-h-screen bg-zinc-700 py-16 px-6 lg:mt-16">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-red-400 drop-shadow mb-4">
                        📚 Palestine Educational Resources
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Discover credible articles, documentaries, reports, and downloads to educate yourself and raise awareness for Palestine.
                    </p>
                </motion.div>

                {Object.entries(categorizedResources).map(([category, resources]) => (
                    <section key={category}>
                        <h2 className="text-2xl text-zinc-200 font-semibold mb-6 border-b border-zinc-600 pb-2">
                            {category}
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {resources.map((resource, index) => (
                                <motion.a
                                    key={index}
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="block rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors p-5 border border-zinc-600 shadow-md"
                                >
                                    <div className="flex items-start gap-4">
                                        <div>{resource.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold text-lg mb-1">
                                                {resource.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm">{resource.description}</p>
                                            <div className="mt-2 flex items-center text-gray-400 text-xs gap-1">
                                                <ExternalLink className="w-3 h-3" />
                                                External Resource
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}
