// src/components/Services.js
import React from 'react';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: 'Ruangan Pentas Seni',
            subtitle: 'Bandung Creative Hub menyediakan ruangan yang mendukung segala aktivitas masyarakat kota bandung dengan menyediakan ruangan yang dapat digunakan untuk mendukung kegiatan pentas seni yang diadakan oleh organisasi ataupun instansi masyarakat kota bandung.',
            image: '/service1.png',
        },
        {
            id: 2,
            title: 'Ruangan Digital Creative',
            subtitle: 'Bandung Creative Hub juga tidak kalah dalam bidang digitalisasi, dengan menyediakan fasilitas yang mendukung masyarakan kota bandung, untuk meningkatkan minat ataupun kegiatan yang berhubungan dengan Digital Creative',
            image: '/service2.png',
        },
        {
            id: 3,
            title: 'Ruangan Coworking Space',
            subtitle: 'Bandung Creative Hub juga memiliki coworking space, yang dapat digunakan oleh masyarakat kota bandung untuk memanfaatkan kegiatan yang dapat memanfaatkan suatu ruangan secara efisien dan efektif.',
            image: '/service3.png',
        },
        // Tambahkan layanan lain jika diperlukan
    ];

    return (
        <div className="bg-[#3B4B60] py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 mt-5 text-white">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div key={service.id} className="bg-transparent p-6 rounded-lg">
                            <img src={service.image} alt={service.title} className="w-full h-100 object-cover mb-4 rounded-md" />
                            <h3 className="text-xl text-white font-bold mb-2">{service.title}</h3>
                            <p className="text-xs text-gray-200 mb-4">{service.subtitle}</p>
                            <button className="bg-white text-sm py-1 px-3 rounded">
                                More Info
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
