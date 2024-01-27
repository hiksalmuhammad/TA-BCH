// src/components/Rooms.js
import React from 'react';

const Rooms = () => {
    const roomsData = [
        {
            id: 1,
            image: '/ruangan1.png',
        },
        {
            id: 2,
            image: '/ruangan2.png',
        },
        {
            id: 3,
            image: '/ruangan3.png',
        },
        // Tambahkan ruangan lain jika diperlukan
    ];

    return (
        <div className="bg-[#3B4B60] py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white mb-8">Ruangan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomsData.map((room) => (
                        <div key={room.id} className="rounded-md overflow-hidden">
                            <img src={room.image} alt={`Room ${room.id}`} className="w-full h-full object-cover rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rooms;
