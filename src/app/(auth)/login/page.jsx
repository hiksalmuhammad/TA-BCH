// src/Login.js
'use client'
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Link from 'next/link';

function Login() {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <>
            <Navbar />
            <div className="bg-gray-200 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 my-2 rounded shadow-md w-96">
                    <p className="mb-2">Selamat Datang Kembali!</p>
                    <h2 className="text-2xl font-bold">Masuk Akun</h2>
                    <p className="mb-5">Bandung Creative hub</p>
                    <form >
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
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    className="mr-2"
                                />
                                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-blue-800">
                                Forgot Password
                            </a>
                        </div>
                        <button
                            type="button"
                            className="bg-[#322A7D] text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                        >
                            <Link href="/dashboard">
                                Login
                            </Link>
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center">
                        Belum punya akun? <a href="/register" className="text-blue-800">Daftar</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
