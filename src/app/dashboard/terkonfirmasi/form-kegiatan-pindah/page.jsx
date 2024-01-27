// src/ChooseTime.js
'use client'
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
import Link from 'next/link';


function FormKegiatanPindah() {

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            <Navbar />
            <div className="flex items-center p-5 ml-3">
                <Link href='/dashboard/reservasi'>
                    <FaArrowLeft className="text-black mr-2" />
                </Link>
                <div>
                    <span className="text-sm text-gray-600">Step 2 of 2</span>
                    <p className='font-bold'>Form Kegiatan</p>
                </div>
            </div>
            <div className="bg-[#F7F8FA] min-h-screen flex  justify-center">

                <div className="bg-white p-8 rounded shadow-md w-[500px] h-full">
                    <img src="/steps-perpindahan.svg" alt="" />
                    <hr className='p-4 mt-4' />
                    <form >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-600">
                                Tujuan Perpindahan
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder='Untuk reschedule jadwal yang bentrok'
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-bold text-gray-600">
                                Alasan Perpindahan Jadwal
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder='Adanya kendala waktu terhadap peserta'
                            />
                        </div>

                        <div className='flex justify-between items-center'>
                            <button
                                type="submit"
                                className="bg-white border  p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 float-right"
                            >
                                kembali
                            </button>
                            <button
                                onClick={() => {
                                    Swal.fire({
                                        title: "Apakah anda yakin ingin mengubah Jadwal?",
                                        text: "Perubahan tidak dapat diurungkan, pastikan anda yakin untuk mengubah jadwal",
                                        icon: "question"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            window.location.href = '/dashboard/terkonfirmasi/';
                                        }
                                    });
                                }}
                                type="button"
                                className="bg-[#322A7D] text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 float-right"
                            >
                                Kirim
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default FormKegiatanPindah;
