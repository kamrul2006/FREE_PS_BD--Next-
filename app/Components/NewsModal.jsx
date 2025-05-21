'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

const NewsModal = ({ isOpen, onClose, article }) => {
    if (!article) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full px-4 py-8">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-zinc-900 text-white p-6 shadow-2xl border border-red-700">
                                <Dialog.Title className="text-2xl font-bold mb-4">
                                    {article.title}
                                </Dialog.Title>

                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-60 object-cover rounded mb-4"
                                />

                                <div className="text-sm text-gray-300 space-y-2">
                                    <p><span className="font-semibold">Tag:</span> {article.tag}</p>
                                    <p>{article.summary}</p>
                                </div>

                                <div className="mt-6 text-right">
                                    <button
                                        onClick={onClose}
                                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white"
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default NewsModal;
