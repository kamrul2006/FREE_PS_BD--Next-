'use client';

import { useState } from 'react';
import Link from 'next/link';

const boycottProducts = [
    {
        id: 1,
        name: 'Coca-Cola',
        description: 'Supports entities involved in the Israeli occupation.',
        logo: 'https://cdn.logojoy.com/wp-content/uploads/20241213155647/12-04-24_Coca-Cola-Logo-Evolution_HEADER.jpg',
        tags: ['Funding', 'Zionist Ties', 'Beverages'],
        category: 'Beverages',
    },
    {
        id: 2,
        name: 'McDonald’s',
        description: 'Accused of providing financial support through franchise royalties.',
        logo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/78/f1/2a/mcdonald-s.jpg?w=600&h=400&s=1',
        tags: ['Funding', 'Fast Food', 'Franchise'],
        category: 'Food',
    },
    {
        id: 3,
        name: 'HP',
        description: 'Provides technology for Israeli military checkpoints.',
        logo: 'https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png',
        tags: ['Tech', 'Military Support', 'Surveillance'],
        category: 'Technology',
    },
    {
        id: 4,
        name: 'Nestlé',
        description: 'Has investments and partnerships tied to Israeli companies.',
        logo: 'https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.png',
        tags: ['Investments', 'Food & Beverage', 'Zionist Ties'],
        category: 'Food',
    },
    {
        id: 5,
        name: 'Puma',
        description: 'Sponsors the Israel Football Association (IFA).',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png',
        tags: ['Sponsorship', 'Sports', 'Zionist Support'],
        category: 'Clothing',
    },
    {
        id: 6,
        name: 'Starbucks',
        description: 'CEO publicly supported Israel; alleged financial links.',
        logo: 'https://pngimg.com/uploads/starbucks/starbucks_PNG6.png',
        tags: ['Public Support', 'Beverages', 'Zionist Ties'],
        category: 'Beverages',
    },
    {
        id: 7,
        name: 'Intel',
        description: 'Operates major R&D centers in Israel.',
        logo: 'https://pngimg.com/uploads/intel/intel_PNG1.png',
        tags: ['Tech', 'R&D', 'Infrastructure'],
        category: 'Technology',
    },
    {
        id: 8,
        name: 'Reebok',
        description: 'Owned by a company with close economic ties to Israel.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Reebok_logo19.png',
        tags: ['Fashion', 'Economic Links', 'Zionist Ties'],
        category: 'Clothing',
    },
    {
        id: 9,
        name: 'AXA',
        description: 'Invests in Israeli banks involved in settlements.',
        logo: 'https://1000logos.net/wp-content/uploads/2017/12/Color-Axa-logo.jpg',
        tags: ['Banking', 'Investments', 'Settlements'],
        category: 'Finance',
    },
    {
        id: 10,
        name: 'Disney',
        description: 'Criticized for biased portrayal and donations tied to pro-Israel lobbies.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Disney_logo.png',
        tags: ['Media', 'Propaganda', 'Donations'],
        category: 'Entertainment',
    },
];

const allCategories = Array.from(new Set(boycottProducts.map(p => p.category)));

export default function BoycottPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts =
        selectedCategory === 'All'
            ? boycottProducts
            : boycottProducts.filter(product => product.category === selectedCategory);

    return (
        <main className="bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100 py-16 px-4 min-h-screen lg:mt-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-400">
                    Boycott These Brands
                </h1>
                <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
                    The following brands have been associated with support for Israeli occupation or injustice.
                    Educate yourself and make informed choices by understanding their involvement.
                </p>

                {/* Filter by Category Dropdown */}
                <div className="flex justify-center mb-12">
                    <select
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    >
                        <option value="All">All Categories</option>
                        {allCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-2xl shadow-xl flex flex-col"
                        >
                            <img
                                src={product.logo}
                                alt={product.name}
                                className="h-40 w-full object-contain rounded-md mb-4 bg-white p-2"
                            />
                            <h2 className="text-xl font-semibold text-green-300 mb-1">{product.name}</h2>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {product.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-green-800 text-white text-xs px-2 py-1 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                            <Link
                                href={`/boycott/${product.name.toLowerCase().replace(/[^a-z0-9]/gi, '')}`}
                                className="mt-auto inline-block text-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold text-white"
                            >
                                Learn Why
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
