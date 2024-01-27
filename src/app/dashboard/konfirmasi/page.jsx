// src/ChooseTime.js
'use client'
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

function FormUpload() {

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            <Navbar />
            <div className="flex items-center p-5 ml-3">
                <FaArrowLeft className="text-black mr-2" />
                <div>
                    <span className="text-sm text-gray-600">Step 3 of 3</span>
                    <p className='font-bold'>Form Upload</p>
                </div>
            </div>
            <div className="bg-[#F7F8FA] flex justify-center">
                <div className="bg-white p-8  rounded shadow-md w-[500px] text-center">
                    <div className='flex justify-center'>
                        <img src="/checklist.png" alt="" />
                    </div>

                    <div>
                        <hr className='p-4 mt-4' />
                        <p className='mb-2 font-extrabold'>Reservasi Anda Telah Behasil Dibuat</p>
                        <p className='text-sm text-gray-600'>Silahkan lakukan pengecekan secara berkala pada halaman Dashboard</p>
                        <button className="bg-[#322A7D] text-white py-2 px-4 w-full rounded mt-8">
                            <Link href="/dashboard/detail-reservasi">Kembali Ke Dashboard</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default FormUpload;
