// src/ChooseTime.js
'use client'
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

function FormKegiatan() {

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            <Navbar />
            <div className="flex items-center p-5 ml-3">
                <Link href="/dashboard/choose-time">
                    <FaArrowLeft className="text-black mr-2" />
                </Link>
                <div>
                    <span className="text-sm text-gray-600">Step 2 of 3</span>
                    <p className='font-bold'>Form Kegiatan</p>
                </div>
            </div>
            <div className="bg-[#F7F8FA] min-h-screen flex  justify-center">

                <div className="bg-white p-8 rounded shadow-md w-[500px] h-[500px]">
                    <img src="/steps-kegiatan.svg" alt="" />
                    <hr className='p-4 mt-4' />
                    <form >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-600">
                                Judul Kegiatan
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder='Tari sanggar Bandung'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-bold text-gray-600">
                                Tujuan Kegiatan
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder='Latihan tari sanggar bandung'
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-bold text-gray-600">
                                Deskripsi Kegiatan
                            </label>
                            <textarea
                                type="text"
                                className="mt-1 p-2 w-full h-24 border rounded-md"
                                placeholder='Melakukan sesi latihan selama 2 jam untuk mengoptimalkan latihan sanggar bandung'
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#322A7D] text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 float-right"
                        >
                            <Link href="/dashboard/form-upload">
                                Selanjutnya
                            </Link>
                        </button>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default FormKegiatan;
