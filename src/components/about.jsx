// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <div className="bg-[#E9E9E9] py-12">
            <div className="container mx-auto flex items-center">
                {/* Bagian Kiri (Gambar) */}
                <div className="w-1/2">
                    <img src="/bg-about.png" alt="About" className="w-full h-auto rounded-lg" />
                </div>

                {/* Bagian Kanan (Teks) */}
                <div className="w-1/2 ml-8">
                    <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
                    <p className="text- mb-8">
                        Bandung Creative Hub adalah wadah perkumpulan komunitas kreatif kota Bandung yang didirikan oleh Wali Kota Bandung M. Ridwan Kamil dan Wakil Wali Kota Bandung Oded M. Danial pada tanggal 28 Desember 2017 dengan tujuan menyediakan 16 subsektor ekonomi kreatif. Bandung Creative Hub termasuk salah satu implementasi Bandung Smart City dari Smart Community.
                    </p>
                    <button className="bg-gray-600 hover:gray-800 text-white font-bold py-2 px-4 rounded">
                        Buat Reservasi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
