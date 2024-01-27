// src/components/VerificationPage.js
'use client'
import Navbar from '@/components/navbar';
import React from 'react';
import Swal from 'sweetalert2'

const VerificationPage = () => {

    const handleKirim = async () => {
        const result = await Swal.fire({
            title: "Berhasil?",
            text: "Daftar Akun Anda Telah Behasil",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Lanjut!",
        });

        if (result.isConfirmed) {

            window.location.href = "/login";
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className=" p-8 rounded w-96">
                    <h1 className="text-2xl font-bold text-center mb-4">Tahap Verifikasi Email</h1>
                    <img src="image-verification.png" alt="Verification" className="mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-4 text-center">
                        Masukkan kode verifikasi yang telah dikirim pada email <span className='font-bold text-black'>fathan@gmail.com</span>
                    </p>
                    <input
                        type="text"
                        placeholder="Kode Verifikasi"
                        className="w-full border p-2 rounded mb-5 bg-[#ECF2F7]"
                    />
                    <button
                        type="button"
                        onClick={handleKirim}
                        className="bg-[#322A7D] text-white py-2 px-4 w-full rounded">
                        Verifikasi
                    </button>
                    <p className='mt-5 text-xs text-center'>Belum dapt kode? <span className='text-xs font-bold'>Kirim Ulang</span> </p>
                </div>
            </div>
        </>
    );
};

export default VerificationPage;
