'use client';

import Link from 'next/link';


const Banner = () => {
    return (
        <section
            className="relative h-[80vh] lg:h-screen w-full bg-cover bg-center flex items-center justify-center text-white lg:mt-16"
            style={{
                backgroundImage: `url(${"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1874700050.jpg?c=16x9"})`, backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black/60 " />

            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Free <span className="text-green-500">Palestine</span>, Stand for <span className="text-red-500">Justice</span>
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                    Join the movement to raise awareness, boycott injustice, and stand in solidarity with the people of Palestine.
                </p>

                <div className="flex justify-center gap-4 flex-wrap ">
                    <Link href="/boycott">
                        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold">
                            Boycott Products
                        </button>
                    </Link>
                    <Link href="/protests">
                        <button className="bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-lg font-semibold">
                            Join Protests
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
