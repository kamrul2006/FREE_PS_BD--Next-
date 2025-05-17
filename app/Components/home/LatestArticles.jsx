'use client';

import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: 'Palestinian Voices Rise Amid Ongoing Siege',
        snippet: 'Despite harsh conditions, Palestinian communities continue to protest and raise awareness globally...',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgPOOASD0bT0MBRtKEki-KuGPnrkBOaWHcg&s',
        date: 'May 15, 2025',
        slug: 'palestinian-voices-rise',
        premium: false,
    },
    {
        id: 2,
        title: 'Boycott Movements Gaining Momentum in South Asia',
        snippet: 'Grassroots campaigns encouraging boycotts of Zionist-linked brands are seeing unprecedented support...',
        image: 'https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2024/09/GettyImages-2170152491-scaled-e1726737418806.jpg?fit=920%2C613&ssl=1',
        date: 'May 14, 2025',
        slug: 'boycott-movement-south-asia',
        premium: true,
    },
    {
        id: 3,
        title: 'Students Lead University Walkouts for Gaza',
        snippet: 'Across campuses worldwide, students are demanding justice through protests, sit-ins, and divestment...',
        image: 'https://socialistworker.co.uk/wp-content/uploads/2023/10/Palestine-1024x685.jpeg',
        date: 'May 12, 2025',
        slug: 'student-walkouts-gaza',
        premium: false,
    },
    {
        id: 4,
        title: 'March for Gaza in Bangladesh',
        snippet: 'On April 12, 2025, at least 100,000 protesters painted the streets of Dhaka with the colours of the Palestinian flag and the spirit of freedom, chanting for an end to ongoing genocide in Gaza...',
        image: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/04/15/gi_2_march_for_gaza_rally_photo_anisur_rahman.jpg',
        date: 'May 12, 2025',
        slug: 'student-walkouts-gaza',
        premium: false,
    },
];

const LatestArticles = () => {
    return (
        <section className="py-20 px-4 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-600">
                        Latest News & Articles
                    </h2>
                    <p className="mt-3 text-gray-400 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                        Stay informed with recent developments, global solidarity efforts, and the expanding boycott movement.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {articles.map(({ id, title, snippet, image, date, slug, premium }) => (
                        <div
                            key={id}
                            className="bg-gray-700 dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-serif font-semibold mb-1 text-gray-300 dark:text-gray-100">
                                    {title}
                                </h3>

                                <p className="text-sm text-gray-500  mb-2">{date}</p>

                                <p className="text-gray-300  text-sm flex-grow line-clamp-3">
                                    {snippet}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <Link
                                        href={`/news/${slug}`}
                                        className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                    >
                                        Read More
                                    </Link>
                                    {premium && (
                                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                            Premium
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/news"
                        className="inline-block bg-green-400 text-green-900 px-6 py-2 rounded-full hover:bg-green-800 hover:text-white transition duration-300"
                    >
                        View All News
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestArticles;
