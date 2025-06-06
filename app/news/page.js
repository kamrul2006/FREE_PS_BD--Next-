'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import NewsModal from '../Components/NewsModal';
import Link from 'next/link';

const newsArticles = [
    {
        id: 1,
        title: "Mass Protests Across Dhaka for Palestine",
        summary: "Thousands gather in Dhaka to express solidarity with Palestine amid ongoing conflict.",
        image: "https://cdn.daily-sun.com/public/news_images/2025/04/12/1744448019-7fffb663120dd173020ed4b9bc223583.jpg",
        tag: "Protest",
        slug: "dhaka-palestine-protest"
    },
    {
        id: 2,
        title: "Global University Walkouts in Support of Gaza",
        summary: "Students in universities around the world walk out demanding justice and peace.",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-10/231025-palestine-protest-harvard-mn-1330-db897c.jpg",
        tag: "Student Movement",
        slug: "university-walkouts"
    },
    {
        id: 3,
        title: "Bangladesh Artists Join Boycott Campaign",
        summary: "Musicians, designers, and influencers from BD join global BDS movement.",
        image: "https://i.guim.co.uk/img/media/959036edd79da7d7d0e94ae7b21cea75eb5d0a31/0_100_3000_1800/master/3000.jpg?width=465&dpr=1&s=none&crop=none",
        tag: "Boycott",
        slug: "bd-artists-boycott"
    },
    {
        id: 4,
        title: "Digital Activism Grows in South Asia",
        summary: "Online campaigns and influencers play a pivotal role in raising awareness about the crisis in Palestine.",
        image: "https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2024/09/GettyImages-2170152491-scaled-e1726737418806.jpg?fit=920%2C613&ssl=1",
        tag: "Digital",
        slug: "digital-activism-south-asia"
    },
    {
        id: 5,
        title: "Humanitarian Aid Sent from Bangladesh to Gaza",
        summary: "Several NGOs have collaborated to send urgent supplies to Palestinian civilians in Gaza.",
        image: "https://pbs.twimg.com/media/F9SaubbbsAAKapk?format=jpg&name=small",
        tag: "Relief",
        slug: "bd-gaza-aid"
    },
    {
        id: 6,
        title: "Voices of Palestine: Stories from the Ground",
        summary: "First-hand accounts from Palestinians describing life under siege and occupation.",
        image: "https://www.thenation.com/wp-content/uploads/2024/01/CRABAPPLE-PalestineForum-ftr.jpg",
        tag: "Voices",
        slug: "palestine-stories"
    },
    {
        id: 7,
        title: "Global Celebrities Speak Out for Gaza",
        summary: "International artists and actors take to social media to demand justice for Palestinians.",
        image: "https://sm.mashable.com/t/mashable_me/photo/default/33-28_jgxb.1248.jpg",
        tag: "Awareness",
        slug: "celebrities-for-gaza"
    },
    {
        id: 8,
        title: "Boycott Campaign Impacts Major Brands",
        summary: "The economic impact of global boycott efforts is starting to show results.",
        image: "https://oric.superior.edu.pk/wp-content/uploads/2024/05/65976c1bb4c0d-1.jpg",
        tag: "Boycott",
        slug: "boycott-brand-impact"
    },
    {
        id: 9,
        title: "Gaza Schools Reopen Amid Ceasefire",
        summary: "Despite the devastation, education continues as schools slowly reopen in Gaza.",
        image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/04/16/4321046-1494200478.jpg?itok=99XrT_TB",
        tag: "Hope",
        slug: "gaza-schools-reopen"
    },
    {
        id: 10,
        title: "How You Can Help: Top Organizations Supporting Palestine",
        summary: "A curated list of credible organizations where you can donate or get involved.",
        image: "https://alkhidmat.org/backend/images/blog_images/1719660493667fefcd7ce72.jpg",
        tag: "Support",
        slug: "how-to-help-palestine"
    },
];


export default function NewsPage() {
    const { data: session, status } = useSession();
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (article) => {
        setSelectedArticle(article);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedArticle(null);
    };

    if (status === 'loading') {
        return <div className="flex justify-center items-center min-h-screen text-white">Loading...</div>;
    }

    if (!session) {
        return (
            <div className=" flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 px-4">

                <div className="bg-gray-800 rounded-3xl p-10 max-w-md text-center shadow-2xl border border-green-700">
                    <h2 className="text-3xl font-bold text-red-500 mb-4">You are not logged in</h2>
                    <p className="text-gray-300 mb-6">
                        Please log in first to view the boycott products and details.
                    </p>
                    <Link
                        href="/login"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition"
                    >
                        Login Now
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="lg:mt-15 min-h-screen bg-zinc-700 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-red-400 mb-4">
                    Palestine News & Solidarity
                </h1>
                <p className="text-center text-gray-300 mb-10">
                    Get the latest updates on protests, movements, and campaigns supporting Palestine.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <div key={article.id} className="rounded-xl overflow-hidden shadow-lg bg-zinc-800 hover:scale-[1.02] transition">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <span className="inline-block bg-red-800 text-red-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
                                    {article.tag}
                                </span>
                                <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                                <p className="text-sm text-gray-300 mb-4">{article.summary}</p>
                                <button
                                    onClick={() => openModal(article)}
                                    className="text-green-500 hover:underline font-semibold"
                                >
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal component */}
            <NewsModal isOpen={isOpen} onClose={closeModal} article={selectedArticle} />
        </section>
    );
}
