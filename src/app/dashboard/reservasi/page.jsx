// Tabs.js
'use client'
import LeftBar from '@/components/dashboard/leftbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import React, { useState } from 'react';

const Reservasi = () => {
    const [activeTab, setActiveTab] = useState('pentas');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="flex h-screen bg-[#F7F8FA]">
                <LeftBar />
                <div className='p-4 mt-8 ml-4'>
                    <div className="flex">
                        <button
                            className={`${activeTab === 'pentas' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                } px-4 py-2 mr-2 rounded-tl rounded-bl`}
                            onClick={() => handleTabClick('pentas')}
                        >
                            Ruangan Pentas
                        </button>
                        <button
                            className={`${activeTab === 'digital' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                } px-4 py-2 mx-2`}
                            onClick={() => handleTabClick('digital')}
                        >
                            Ruangan Digital Creatif
                        </button>
                        <button
                            className={`${activeTab === 'coworking' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                } px-4 py-2 ml-2 rounded-tr rounded-br`}
                            onClick={() => handleTabClick('coworking')}
                        >
                            Ruangan Coworking Space
                        </button>
                    </div>

                    {/* Konten yang sesuai dengan tab yang aktif */}
                    <div className="mt-4 p-4 border">
                        {activeTab === 'pentas' &&
                            <div className='flex gap-3'>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-2.png" alt="" width={200} height={200} />
                                </Link>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-3.png" alt="" width={200} height={200} />
                                </Link>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-1.png" alt="" width={200} height={200} />
                                </Link>
                            </div>
                        }
                        {activeTab === 'digital' &&
                            <div className='flex gap-3'>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-1.png" alt="" width={200} height={200} />
                                </Link>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-3.png" alt="" width={200} height={200} />
                                </Link>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-2.png" alt="" width={200} height={200} />
                                </Link>
                            </div>
                        }
                        {activeTab === 'coworking' &&
                            <div className='flex gap-3'>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-1.png" alt="" width={200} height={200} />
                                </Link>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-2.png" alt="" width={200} height={200} />
                                </Link>
                                <Link href="/dashboard/reservasi/studio-tari">
                                    <img src="/img-3.png" alt="" width={200} height={200} />
                                </Link>
                            </div>
                        }
                        {/* Konten lainnya */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservasi;
