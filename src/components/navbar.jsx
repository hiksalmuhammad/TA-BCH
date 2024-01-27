// src/components/Navbar.js
'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React from 'react';

const Navbar = () => {

    const pathname = usePathname()

    return (
        <nav className="bg-[#3B4B60] p-4 flex justify-evenly items-center ">
            {/* Bagian Kiri */}
            <div className="flex items-center">
                <a href="#" className="text-white mr-4">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white mr-4">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>

            {/* Bagian Tengah */}
            {
                pathname === '/' ?
                    <div className="text-white text-2xl ml-20 kaisei">
                        BANDUNG CREATIVE HUB
                    </div> :
                    <div className="text-white text-2xl kaisei">
                        BANDUNG CREATIVE HUB
                    </div>
            }
            {/* Bagian Kanan */}
            {pathname === '/'
                ? <div className="flex items-center">
                    <Link href="/login">
                        <button className="bg-white hover:bg-gray-50 font-bold py-1 px-4 rounded mr-4">
                            Masuk
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-1 px-4 rounded">
                            Daftar
                        </button>
                    </Link>
                </div>
                : <div className='mr-10'></div>
            }

        </nav>
    );
};

export default Navbar;
