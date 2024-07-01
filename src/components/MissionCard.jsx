// components/MissionCard.jsx

import React from 'react';
import Image from 'next/image';

const MissionCard = ({ icon, title, description }) => {
    return (
        <div className="bg-black bg-opacity-40 rounded-md py-10 px-5 shadow-lg mx-5 hover:scale-105 transition-transform duration-300">
            <div className=' flex flex-col items-center justify-center mx-10'>
                <Image src={icon} alt={title} width={60} height={60} />
                <h3 className="text-red-600 text-xl font-bold mt-8">{title}</h3>
                <p className="mt-6">{description}</p>
            </div>
        </div>
    );
};

export default MissionCard;
