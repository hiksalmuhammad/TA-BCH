// src/components/Hero.js
import React from 'react';

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/bg-hero.png')" }}>
            <div className="text-white text-center mx-auto max-w-screen-md">
                <h1 className="text-6xl font-bold mb-10">Bandung Creative Hub: Bandung Smart City</h1>
                <p className="mb-8 text-gray-300">
                    Bandung Creative Hub adalah wadah perkumpulan komunitas kreatif kota Bandung yang didirikan oleh Wali Kota Bandung M. Ridwan Kamil dan Wakil Wali Kota Bandung Oded M. Danial pada tanggal 28 Desember 2017 dengan tujuan menyediakan 16 subsektor ekonomi kreatif. Bandung Creative Hub termasuk salah satu implementasi Bandung Smart City dari Smart Community.
                </p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded">
                    Get to know more
                </button>
            </div>
        </div>
    );
};

export default Hero;
