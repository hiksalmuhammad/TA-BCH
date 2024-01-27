// src/Register.js
'use client'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'
import Link from 'next/link'


function Register() {

    const [nik, setNik] = useState('');
    const [errorNik, setErrorNik] = useState('');

    const handleNikChange = (event) => {
        const newNik = event.target.value;
        setNik(newNik);

        // Validasi NIK
        if (!newNik.startsWith('3273')) {
            setErrorNik('NIK harus diawali dengan 3273');
        } else {
            setErrorNik('');
        }
    };



    return (
        <>
            <Navbar />
            <div className="bg-gray-200 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 my-8 rounded shadow-md w-96">
                    <p className='mb-2'>Selamat Datang!</p>
                    <h2 className="text-2xl font-bold">Daftar Akun</h2>
                    <p className='mb-5'>Bandung Creative hub</p>
                    <form >
                        <div className="mb-4">
                            <label htmlFor="nik" className="block text-sm font-medium text-gray-600">
                                NIK
                            </label>
                            <input
                                type="text"
                                id="nik"
                                name="nik"
                                value={nik}
                                onChange={handleNikChange}
                                className={`mt-1 p-2 w-full border rounded-md ${errorNik ? 'border-red-500' : ''}`}

                            />
                            {errorNik && <p className="text-red-500 text-sm">{errorNik}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nama" className="block text-sm font-medium text-gray-600">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                className="mt-1 p-2 w-full border rounded-md"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="mt-1 p-2 w-full border rounded-md"

                            />
                        </div>
                        <button
                            type="button"

                            className="bg-[#322A7D] mt-2 text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                        >
                            <Link href="/verification">
                                Daftar
                            </Link>
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center">
                        Sudah punya akun? <a href="/login" className='text-blue-800'>Masuk</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
