// src/components/RightBar.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Assuming you're using Font Awesome icons

function RightBar() {
    return (
        <div className="w-[350px] bg-white p-4">
            <div className='flex item-center justify-between'>
                <div className=" w-full max-w-[300px] mr-4 relative">
                    <input
                        type="text"
                        className="w-full bg-gray-100 rounded-full pl-10 pr-3 py-1  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="| Search"
                    />
                    <i className="fas fa-search absolute left-3 top-2 text-gray-500"></i>
                </div>

                {/* Notification icon */}
                <div className="mr-3 w-9 flex justify-center bg-gray-100 rounded-full p-2">
                    <i className="fas fa-bell text-gray-600 cursor-pointer"></i>
                </div>
            </div>
            <div className='flex items-center mt-10'>
                <div className="w-[60%]">
                    <p>Hallo,</p>
                    <p className='font-bold text-lg'>Fathan</p>
                    <p className='text-[9px] text-gray-500 mt-2'>Silahkan lakukan reservasi dengan syarat dan ketentuan yang tersedia. Jangan lupa bahagia.</p>
                </div>
                <div className="w-[40%]">
                    <img src="user.png" alt="user" className="mx-auto" />
                </div>
            </div>

            <div className='mt-20'>
                <div className='flex justify-between items-center mx-2'>
                    <p className='font-bold '>Notifikasi</p>
                    <p className='text-[12px] text-orange-500 font-semibold'>Lihat Semua <i className="fas fa-angle-right"></i></p>
                </div>
                <div className='flex items-center mt-5'>
                    <div>
                        <img src="exclamation.png" width={40} alt="" className='mr-2 mt-3' />
                    </div>
                    <div>
                        <p className='text-[12px] font-semibold mt-2'>Reservasi Ditolak</p>
                        <p className='text-[10px] text-gray-500 mt-1'>Silahkan tinjau kembali dokumen yang dikirim</p>
                    </div>
                </div>
                <div className='flex items-center mt-4'>
                    <div>
                        <img src="email.png" width={40} alt="" className='mr-2 mt-3' />
                    </div>
                    <div>
                        <p className='text-[12px] font-semibold mt-2'>Pesan Baru</p>
                        <p className='text-[10px] text-gray-500 mt-1'>Surat Pernyataan Telah Terbit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;
