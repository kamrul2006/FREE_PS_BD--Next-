'use client';

import { Instagram, Twitter, Facebook } from 'lucide-react';

const posts = [
    {
        id: 1,
        platform: 'Instagram',
        user: '@kamrul_islam_apurba',
        image: 'https://www.greenleft.org.au/sites/default/files/gd040824_0.jpg',
        caption: 'Stand with humanity. 🇵🇸❤️ #FreePalestine #Gaza',
        time: '2h ago',
    },
    {
        id: 2,
        platform: 'Twitter',
        user: '@kamrul__2006',
        image: 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2025/04/12/rsz_whatsapp_image_2025-04-12_at_133437-970a057565beeb7815cf7d06f19176df.jpg?jadewits_media_id=42558',
        caption: 'University walkouts happening across the world. #PalestineWillBeFree',
        time: '4h ago',
    },
    {
        id: 3,
        platform: 'Facebook',
        user: '@free-palestine-bd',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvapbsD-ICof_bt5saQ1EgiO8tzo-9fU7bWA&s',
        caption: 'Boycott works. Speak up. Take action. 🛑 #BDS #StopGenocide',
        time: '6h ago',
    },
    {
        id: 4,
        platform: 'Twitter',
        user: '@endapartheid',
        image: 'https://res.cloudinary.com/jerrick/image/upload/v1744910738/680139926eef19001d806955.jpg',
        caption: 'Massive turnout in Dhaka! 🇧🇩 #FreePalestineBD #GlobalProtest',
        time: '1d ago',
    },
];

const getPlatformIcon = (platform) => {
    switch (platform) {
        case 'Twitter':
            return <Twitter size={16} className="text-blue-500" />;
        case 'Instagram':
            return <Instagram size={16} className="text-pink-500" />;
        case 'Facebook':
            return <Facebook size={16} className="text-blue-700" />;
        default:
            return null;
    }
};

const SocialFeed = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-950 to-gray-800">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-green-700">Social Media Voices</h2>
                <p className="mt-4 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                    Real stories. Real people. Explore global solidarity for Palestine from social media feeds.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {posts.map(({ id, platform, user, image, caption, time }) => (
                    <div
                        key={id}
                        className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700 shadow-md hover:shadow-green-600/40 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={image}
                                alt={caption}
                                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-2 text-zinc-400 text-sm">
                                <span className="flex items-center gap-2">
                                    {getPlatformIcon(platform)}
                                    {user}
                                </span>
                                <span>{time}</span>
                            </div>
                            <p className="text-gray-200 text-sm leading-relaxed">{caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="https://twitter.com/hashtag/FreePalestine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition font-medium"
                >
                    Explore More Hashtags
                </a>
            </div>
        </section>
    );
};

export default SocialFeed;
