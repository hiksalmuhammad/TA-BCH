// Tabs.js
'use client'
import Navbar from '@/components/navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import React, { useState } from 'react';

const Reservasi = () => {

    return (
        <div>
            <Navbar />
            <div className='bg-[#F7F8FA] p-4'>
                <Link href='/dashboard/reservasi'>
                    <img src="/vector.png" width={25} alt="" />
                </Link>
            </div>
            <div className="bg-[#F7F8FA] pb-10">
                <div className='flex'>

                    <div className='mx-auto mt-10'>
                        <div className="grid grid-rows-2 grid-flow-col gap-4">
                            <div className="row-span-2">
                                <img src="/image.png" alt="Gambar 1" className="w-full h-full object-cover" />
                            </div>

                            <div className="col-span-1">
                                <div className='flex gap-3'>
                                    <img src="/image (1).png" alt="Gambar 3" className="w-full h-full object-cover" />
                                    <img src="/image (2).png" alt="Gambar 3" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="row-span-1 col-span-2">
                                <div className='flex gap-3'>
                                    <img src="/image (3).png" alt="Gambar 3" className="w-full h-full object-cover" />
                                    <img src="/image (5).png" alt="Gambar 3" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-[1080px] mt-5 rounded-lg h-[200px] mx-auto'>
                    <div className='flex p-4'>
                        <div>
                            <p className='font-bold'>Studio Tari - Bandung Creative Hub</p>
                            <p className='text-xs mt-2'>Studio tari di BCH dapat digunakan untuk latihan tari tradisional, modern, dan kontemporer. Studio tari telah dilengkapi dengan kaca dinding, lantai vinyl, dan speaker untuk
                                mendukung proses latihan koreografi semakin
                                optimal.</p>
                        </div>
                        <div className='w-[300px] flex justify-end mt-4'>
                            <Link href="/dashboard/choose-time">
                                <button className="bg-[#322A7D] hover:bg-blue-700 text-xs text-white rounded-md font-bold py-2 px-4">
                                    Buat Reservasi
                                </button>
                            </Link>
                        </div>
                    </div>

                    <hr className='mt-2' />
                    <div className='p-4 flex justify-around'>

                        <div className='flex gap-2'>
                            <div>
                                <img src="/icon-location.png" width={16} alt="" />
                            </div>
                            <div>
                                <p className='text-xs'>Lantai 3, Bandung, Jl. Laswi No.7, </p>
                                <p className='text-xs'>Kacapiring, Kec. Batununggal, Kota</p>
                                <p className='text-xs'>Bandung, Jawa Barat 40271
                                    Get directions</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mr-10'>
                            <div>
                                <img src="/icon-clock.png" width={16} alt="" />
                            </div>
                            <div>
                                <p className='text-xs'>Sabtu & Minggu</p>
                                <p className='text-xs text-red-600'>Tutup</p>
                                <p className='text-xs'>Senin - Jumat</p>
                                <p className='text-xs'>10:00-16:00 WIB</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <img src="/icon-location.png" width={16} alt="" />
                            </div>
                            <div>
                                <p className='text-xs'>Fasilitas:</p>
                                <p className='text-xs'>Speaker RCF (1)</p>
                                <p className='text-xs'>Lantai Vinyl</p>
                                <p className='text-xs'>Dinding Kaca</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reservasi;
