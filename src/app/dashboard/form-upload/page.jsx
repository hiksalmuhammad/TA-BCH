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
                <Link href="/dashboard/form-kegiatan">
                    <FaArrowLeft className="text-black mr-2" />
                </Link>
                <div>
                    <span className="text-sm text-gray-600">Step 3 of 3</span>
                    <p className='font-bold'>Form Upload</p>
                </div>
            </div>
            <div className="bg-[#F7F8FA] min-h-screen flex justify-center">

                <div className="bg-white p-8 rounded shadow-md w-[500px] h-[500px]">
                    <img src="/steps-upload.svg" alt="" />
                    <hr className='p-4 mt-4' />
                    <form>
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-sm font-bold text-gray-600">
                                Upload E-KTP
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file"
                                    className="mt-1 p-2 w-full border rounded-md opacity-0 absolute"
                                />
                                <div className="flex items-center justify-between border rounded-md bg-white cursor-pointer py-1 px-2 mt-3">
                                    <span className="p-2 text-xs text-gray-400">Upload E-KTP</span>
                                    <button className='text-xs bg-slate-400 py-1 px-3 mr-3 text-white rounded-sm cursor-pointer'>Pilih File</button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
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
                                    <span className="p-2 text-xs text-gray-400">Upload Proposal</span>
                                    <button className='text-xs bg-slate-400 py-1 px-3 mr-3 text-white rounded-sm cursor-pointer'>Pilih File</button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-sm font-bold text-gray-600">
                                Upload Cuplikan Film
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file"
                                    className="mt-1 p-2 w-full border rounded-md opacity-0 absolute"
                                />
                                <div className="flex items-center justify-between border rounded-md bg-white cursor-pointer py-1 px-2 mt-3">
                                    <span className="p-2 text-xs text-gray-400">Upload Cuplikan Film</span>
                                    <button className='text-xs bg-slate-400 py-1 px-3 mr-3 text-white rounded-sm cursor-pointer'>Pilih File</button>
                                </div>
                            </div>
                            <label htmlFor="" className='text-xs text-gray-400'>*Wajib diisi untuk kegiatan Screening Film</label>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#322A7D] text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 float-right"
                        >
                            <Link href="/dashboard/konfirmasi">
                                Kirim
                            </Link>
                        </button>

                    </form>
                </div>
            </div >

        </div >
    );
}

export default FormUpload;
