// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Bagian Kiri (Tulisan) */}
                <div>
                    <p className="text-xl font-bold">Bandung Creative Hub</p>
                </div>

                {/* Bagian Kanan (Ikons) */}
                <div className="flex items-center space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
