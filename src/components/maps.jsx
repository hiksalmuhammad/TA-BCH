// src/components/Maps.js
import React from 'react';

const Maps = () => {
    return (
        <div className="bg-gray-100">
            <div>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.985597952142!2d107.62928314410374!3d-6.918364462542262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d03e844cb9%3A0x56aa672329e53cb!2sBandung%20Creative%20Hub!5e0!3m2!1sid!2sid!4v1704807015154!5m2!1sid!2sid"
                        width="100%"
                        height={400}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Bandung Creative Hub Location"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Maps;
