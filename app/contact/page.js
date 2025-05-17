'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Connect this to your backend/API
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="min-h-screen lg:mt-16 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 py-16 px-4">
            <div className="max-w-4xl mx-auto text-white">
                <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
                <p className="text-center text-gray-300 mb-10">
                    Have a question or want to support our cause? Send us a message.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <MapPin className="text-green-500" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-green-500" />
                            <span>+880 1234-567890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-green-500" />
                            <span>support@freepalestinebd.org</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                        >
                            Send Message
                        </button>

                        {submitted && (
                            <p className="text-green-400 font-medium">✅ Message sent successfully!</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
