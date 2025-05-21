'use client';

import { BookOpen, Film, FileText, ExternalLink } from 'lucide-react';
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
    ],
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
                        Please log in first to view the Resources Page and details.
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
        <section className="lg:pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto space-y-20">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-4">
                        Palestine Educational Resources
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
                        Learn, share, and stand with Palestine. Find trusted articles, documentaries, reports, and downloads.
                    </p>
                </motion.div>

                {Object.entries(categorizedResources).map(([category, resources]) => (
                    <section key={category}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-8 bg-red-600 rounded-full"></div>
                            <h2 className="text-2xl text-white font-semibold tracking-wide">{category}</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources.map((resource, index) => (
                                <motion.a
                                    key={index}
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="relative block rounded-2xl border border-zinc-700 bg-zinc-800 hover:border-green-500 transition-all p-6 shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-zinc-900 rounded-lg">{resource.icon}</div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">{resource.title}</h3>
                                            <p className="text-gray-400 text-sm">{resource.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 flex items-center gap-1 text-green-400 bg-zinc-900 border border-green-600 rounded-full px-2 py-1 text-xs font-medium shadow-sm">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        External
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
