'use client';

import Link from 'next/link';

const boycottProducts = [
    {
        id: 1,
        name: 'Coca-Cola',
        description: 'Known for supporting entities involved in the occupation.',
        logo: 'https://cdn.logojoy.com/wp-content/uploads/20241213155647/12-04-24_Coca-Cola-Logo-Evolution_HEADER.jpg',
        boycottUrl: '/boycott/cocacola',
        tags: ['Drinks', 'Global', 'Controversial'],
    },
    {
        id: 2,
        name: 'McDonald’s',
        description: 'Accused of funding Israeli settlements through royalties.',
        logo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/78/f1/2a/mcdonald-s.jpg?w=600&h=400&s=1',
        boycottUrl: '/boycott/mcdonalds',
        tags: ['Fast Food', 'Multinational'],
    },
    {
        id: 3,
        name: 'HP',
        description: 'Supplies technology used in military checkpoints.',
        logo: 'https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png',
        boycottUrl: '/boycott/hp',
        tags: ['Technology', 'Military Supply'],
    },
];

export default function BoycottPreview() {
    return (
        <section className="py-14 text-white max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10 text-center">
                    Boycott Product List Preview
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {boycottProducts.map(({ id, name, description, logo, boycottUrl, tags }) => (
                        <div
                            key={id}
                            className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl flex flex-col"
                        >
                            <Link href={boycottUrl} className="block">
                                <img
                                    src={logo}
                                    alt={`${name} logo`}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                                <p className="text-gray-300 mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-green-600/70 text-white px-3 py-1 rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href={boycottUrl}
                                        className="inline-block w-full text-center bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md font-semibold transition"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/boycott"
                        className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-bold text-white transition"
                    >
                        View Full Boycott List
                    </Link>
                </div>
            </div>
        </section>
    );
}
