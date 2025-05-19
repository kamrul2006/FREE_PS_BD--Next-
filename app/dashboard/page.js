// app/dashboard/page.jsx
'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LogOut, Settings, User, Shield } from 'lucide-react';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') return <div className="text-center mt-10 text-white">Loading...</div>;
    if (!session) {
        router.push('/login');
        return null;
    }

    const user = session.user;

    return (
        <div className="min-h-screen flex bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-800 text-white lg:mt-16">
            {/* Sidebar */}
            <aside className="w-64 p-6 bg-zinc-900 border-r border-zinc-700 space-y-6 shadow-lg">
                <h2 className="text-2xl font-bold text-red-500">Dashboard</h2>
                <nav className="space-y-4 mt-8">
                    <button className="flex items-center gap-2 hover:text-red-400 transition">
                        <User size={20} /> Profile
                    </button>
                    {/* <button className="flex items-center gap-2 hover:text-red-400 transition">
                        <Shield size={20} /> Security
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-400 transition">
                        <Settings size={20} /> Settings
                    </button> */}
                    <button
                        onClick={() => signOut()}
                        className="flex items-center gap-2 hover:text-red-400 transition"
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <h1 className="text-4xl font-bold mb-8">Welcome, {user.name} 👋</h1>

                {/* Profile Card */}
                <div className="bg-zinc-800/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto border border-zinc-700">
                    <div className="flex items-center space-x-6">
                        <img
                            src={user.image || '/default-profile.png'}
                            alt="Profile"
                            className="w-20 h-20 rounded-full border-4 border-red-500 shadow-lg"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{user.name}</h2>
                            <p className="text-gray-400">{user.email}</p>
                            <p className="text-sm mt-2 text-green-400">Verified Account ✅</p>
                        </div>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700">
                        <h3 className="text-xl font-semibold mb-2 text-red-400">Recent Activity</h3>
                        <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                            <li>Logged in just now</li>
                            <li>Updated profile picture</li>
                            <li>Checked settings</li>
                        </ul>
                    </div>

                    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700">
                        <h3 className="text-xl font-semibold mb-2 text-red-400">Profile Stats</h3>
                        <p className="text-gray-300">Email: <span className="font-medium">{user.email}</span></p>
                        <p className="text-gray-300 mt-2">Login Method: <span className="font-medium">{user.image ? 'OAuth' : 'Email'}</span></p>
                    </div>

                    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700">
                        <h3 className="text-xl font-semibold mb-2 text-red-400">Security Alert</h3>
                        <p className="text-yellow-300 text-sm">No suspicious activity detected. Keep your credentials secure.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
