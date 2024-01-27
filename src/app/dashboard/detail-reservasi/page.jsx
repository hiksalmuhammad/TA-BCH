// src/components/Dashboard.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LeftBar from '@/components/dashboard/leftbar';
import RightBar from '@/components/dashboard/rightbar';
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <>
            {/* Left Sidebar */}
            <div className="flex h-full bg-[#F7F8FA]">
                <LeftBar />

                {/* Main Content */}
                <div className="flex-1 bg-gray-100 p-8">
                    <div className='p-4 flex items-center gap-3'>
                        <div>
                            <Link href='/dashboard'>
                                <img src="/vector.png" width={25} alt="" />
                            </Link>
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Detail Reservasi</p>
                        </div>

                    </div>
                    <div className='p-4'>

                        <div className='w-[600px] bg-white rounded-md mb-8 mt-4 p-4'>
                            <div className='flex w-[200px] py-1 item-center gap-3 rounded-full px-3 bg-orange-500'>
                                <img src="/clock-white.png" width={16} alt="" />
                                <p className='text-xs text-white'>Berkas sedang diproses</p>
                            </div>
                            <p className='font-bold text-xl mt-4'>Studio Tari</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <div>
                                    <img src="/list-image.png" width={80} alt="" />
                                </div>
                                <div>
                                    <p className='font-bold'>Senin, 13 Januari 2023</p>
                                    <p className='text-xs text-gray-500'>Fathan aruf</p>
                                    <p className='text-xs text-gray-500'  >Latihan Tari Sanggar</p>
                                </div>
                            </div>
                            <div className='border mt-4'>
                                <div className='flex items-center justify-between p-4'>
                                    <div>
                                        <p className='font-bold'>Surat Pernyataan Peminjaman Ruangan</p>
                                    </div>
                                    <div>
                                        <img src="/image-pdf.png" width={24} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='border p-4'>
                                <label htmlFor="file" className="block text-sm font-bold text-gray-600">
                                    Upload Proposal
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="file"
                                        className="mt-1 p-2 w-full border rounded-md opacity-0 absolute"
                                    />
                                    <div className="flex items-center justify-between border rounded-md bg-white cursor-pointer py-1 px-2 mt-3">
                                        <span className="p-2 text-xs text-gray-400">Upload</span>
                                        <button className='text-xs bg-slate-600 py-1 px-3 mr-3 text-white rounded-sm cursor-pointer'>Pilih File</button>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-[#322A7D] text-white py-2 px-4 rounded mt-4" >
                                <Link href="/dashboard/terkonfirmasi">
                                    Kirim
                                </Link>
                            </button>
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

export default Dashboard;
