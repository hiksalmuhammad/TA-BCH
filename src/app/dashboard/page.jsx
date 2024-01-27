// src/components/Dashboard.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LeftBar from '@/components/dashboard/leftbar';
import RightBar from '@/components/dashboard/rightbar';
import Link from "next/link";

const Dashboard = () => {
    return (
        <>
            {/* Left Sidebar */}
            <div className="flex h-screen bg-[#F7F8FA]">
                <LeftBar />

                {/* Main Content */}
                <div className="flex-1 bg-gray-100 p-8">
                    <div className='p-4'>
                        <p className='font-bold text-2xl'>Dashboard</p>
                        <p className='text-gray-500 text-xs'>Selamat Datang</p>
                    </div>
                    <div className='flex'>
                        <div>
                            <p className='font-bold p-4'>Jumlah Status Anda</p>
                            <div className='flex'>
                                <div className='w-60 h-24 ml-4 rounded-md bg-white p-4'>
                                    <p>total reservasi</p>
                                    <p className='font-bold text-3xl'>4</p>
                                </div>
                                <div className='w-60 h-24 ml-4 rounded-md bg-white p-4'>
                                    <p>Menunggu konfirmasi</p>
                                    <p className='font-bold text-3xl text-orange-500'>0</p>
                                </div>
                                <div className='w-60 h-24 ml-4 rounded-md bg-white p-4'>
                                    <p>Reservasi Ditolak</p>
                                    <p className='font-bold text-3xl text-red-500'>4</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='p-4'>
                        <p className='font-bold text-lg'>Reservasi</p>
                        <hr className='mt-2' />
                    </div>
                    <div className='p-4 flex gap-3'>

                        <div>
                            <div className='w-64 h-44 bg-white rounded-md mt-4 p-4'>
                                <p className='font-bold text-xs'>Studio tari</p>
                                <p className='text-xs text-gray-500 mt-1'>status</p>
                                <p className='text-xs text-orange-500 mt-1'>Proses</p>

                                <div className='flex justify-between mt-4'>
                                    <div>
                                        <p className='text-xs text-gray-500'>tanggal</p>
                                        <p className='text-xs text-gray-800'>13 Januari 2023</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-500'>Waktu</p>
                                        <p className='text-xs text-gray-800'>10:00 - 12:00 WIB</p>
                                    </div>
                                </div>
                                <hr className='mt-3' />
                                <Link href="/dashboard/detail-reservasi">
                                    <p className='text-xs mt-3 font-bold cursor-pointer text-purple-700'>Detail Reservasi</p>
                                </Link>
                            </div>
                        </div>
                        <div>

                            <div className='w-64 h-44 bg-white rounded-md mt-4 p-4'>
                                <p className='font-bold text-xs'>Studio tari</p>
                                <p className='text-xs text-gray-500 mt-1'>status</p>
                                <p className='text-xs text-green-500 mt-1'>Konfirmasi</p>

                                <div className='flex justify-between mt-4'>
                                    <div>
                                        <p className='text-xs text-gray-500'>tanggal</p>
                                        <p className='text-xs text-gray-800'>13 Januari 2023</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-500'>Waktu</p>
                                        <p className='text-xs text-gray-800'>10:00 - 12:00 WIB</p>
                                    </div>
                                </div>
                                <hr className='mt-3' />
                                <Link href="/dashboard/terkonfirmasi">
                                    <p className='text-xs mt-3 font-bold cursor-pointer text-purple-700'>Detail Reservasi</p>
                                </Link>
                            </div>
                        </div>
                        <div>

                            <div className='w-64 h-44 bg-white rounded-md mt-4 p-4'>
                                <p className='font-bold text-xs'>Studio tari</p>
                                <p className='text-xs text-gray-500 mt-1'>status</p>
                                <p className='text-xs text-red-500 mt-1'>Dibatalkan</p>

                                <div className='flex justify-between mt-4'>
                                    <div>
                                        <p className='text-xs text-gray-500'>tanggal</p>
                                        <p className='text-xs text-gray-800'>13 Januari 2023</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-500'>Waktu</p>
                                        <p className='text-xs text-gray-800'>10:00 - 12:00 WIB</p>
                                    </div>
                                </div>
                                <hr className='mt-3' />
                                <Link href="/dashboard/dibatalkan">
                                    <p className='text-xs mt-3 font-bold cursor-pointer text-purple-700'>Detail Reservasi</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Sidebar */}
                <RightBar />
            </div>
        </>
    );
};

export default Dashboard;
