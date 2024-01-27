// src/ChooseTime.js
'use client'
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

function ChooseTime() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeClick = (time) => {
        // Implementasi logika pemilihan waktu di sini
        console.log(`Waktu dipilih: ${time}`);
    };

    const timeSlot = { start: '10:00', end: '12:00' };
    const stepNumber = 1;

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            <Navbar />
            <div className="flex items-center p-5 ml-3">
                <Link href='/dashboard/reservasi/studio-tari'>
                    <FaArrowLeft className="text-black mr-2" />
                </Link>
                <div>
                    <span className="text-sm text-gray-600">Step {stepNumber} of 3</span>
                    <p className='font-bold'>Select Item</p>
                </div>
            </div>
            <div className="flex justify-evenly mt-2">
                {/* Bagian Kiri */}
                <div className="mr-8">

                    <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                        Pilih Tanggal
                    </label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        className="mt-1 p-2 border rounded-md w-[250px]"
                    />
                </div>
                <div className="bg-white w-[550px] h-[300px] p-4 rounded-lg flex flex-col justify-center items-center">
                    <div className='flex items-center justify-between p-4 w-full'>
                        <p>10:00 - 12:00 WIB</p>
                        <button className='bg-green-600 w-36 hover:gray-800 text-white py-1 px-3 rounded'>
                            <Link href="/dashboard/form-kegiatan">
                                Pesan
                            </Link>
                        </button>
                    </div>
                    <hr className="w-full" />
                    <div className='flex items-center justify-between p-4 w-full'>
                        <p>10:00 - 12:00 WIB</p>
                        <button className='bg-gray-400 w-36 hover:gray-800 text-white py-1 px-3 rounded' disabled>
                            Sudah Dipesan
                        </button>
                    </div>
                    <hr className="w-full" />
                    <div className='flex items-center justify-between p-4 w-full'>
                        <p>10:00 - 12:00 WIB</p>
                        <button className='bg-gray-400 w-36 hover:gray-800 text-white py-1 px-3 rounded' disabled >
                            Sudah Dipesan
                        </button>
                    </div>
                    <hr className="w-full" />
                </div>

            </div>
        </div>
    );
}

export default ChooseTime;
