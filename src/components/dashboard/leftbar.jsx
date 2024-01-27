// src/components/LeftBar.js
import React from 'react';
import Link from 'next/link';

function LeftBar() {
    return (
        <div className="w-16 bg-[#3B4B60] p-4 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8 cursor-pointer">
                <Link href="/">
                    <p className='text-white'>BCH</p>
                </Link>
            </div>
            {/* Icons */}
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="mb-6">
                    <Link href="/dashboard">

                        <i
                            className="fas fa-home text-white text-lg hover:text-[#769BD6] cursor-pointer"
                        ></i>

                    </Link>
                </div>
                <div className="mb-6">
                    <Link href="/dashboard/reservasi">

                        <i
                            className="fas fa-calendar text-white text-lg hover:text-[#769BD6] cursor-pointer"
                        ></i>

                    </Link>
                </div>
                <div className="mb-6">
                    <Link href="/dashboard">

                        <i
                            className="fas fa-cog text-white text-lg hover:text-[#769BD6] cursor-pointer"
                        ></i>

                    </Link>
                </div>
            </div>
            {/* Logout Icon */}
            <div className="w-8 bg-white rounded-full py-1">
                <Link href="/login">
                    <i className="fas text-center ml-2 fa-sign-out-alt text-gray-400 text-lg hover:text-[#769BD6] cursor-pointer"></i>
                </Link>
            </div>
        </div>
    );
}

export default LeftBar;
