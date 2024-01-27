// src/components/Dashboard.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LeftBar from '@/components/dashboard/leftbar';
import RightBar from '@/components/dashboard/rightbar';
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';

const Terkonfirmasi = () => {
    return (
        <>
            {/* Left Sidebar */}
            <div className="flex h-screen bg-[#F7F8FA]">
                <LeftBar />

                {/* Main Content */}
                <div className="flex-1 bg-gray-100 p-8">
                    <div className='p-4 flex items-center gap-3'>
                        <div>
                            <Link href="/dashboard">
                                <img src="/vector.png" width={25} className="mr-2 cursor-pointer" alt="" />
                            </Link>
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Detail Reservasi</p>
                        </div>

                    </div>
                    <div className='p-4'>
                        <div className='w-[600px] bg-white rounded-md mb-8 mt-4 p-4'>
                            <div className='flex w-[200px] py-1 item-center gap-3 rounded-full px-3 bg-red-500'>
                                <img src="/icon-check.png" width={16} alt="" />
                                <p className='text-xs text-white'>Dibatalkan</p>
                            </div>
                            <p className='font-bold text-xl mt-4'>Studio Tari</p>

                            <div className='flex gap-3 items-center'>
                                <div>
                                    <img src="/list-image.png" width={80} alt="" />
                                </div>
                                <div>
                                    <p className='font-bold'>Senin, 13 Januari 2023</p>
                                    <p className='text-xs text-gray-500'>Fathan aruf</p>
                                    <p className='text-xs text-gray-500'  >Latihan Tari Sanggar</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between my-4 p-2'>
                                <div>
                                    <p>Senin</p>
                                    <p className='text-xs text-gray-500'>2 jam</p>
                                </div>
                                <div>
                                    10:00 - 12:00 WIB
                                </div>
                            </div>
                            <hr className='my-4' />

                            <div>
                                <p className='font-bold mt-4'>Syarat dan ketentuan</p>
                                <p className='text-xs text-gray-500'>Unduh terlebih dahulu file Surat Pernyataan dan mohon ditandangani untuk menkonfirmasi peminjaman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Terkonfirmasi;
