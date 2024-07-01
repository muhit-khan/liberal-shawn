// components/AccomplishmentCard.jsx

import React from 'react';

const AccomplishmentCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-center hover:translate-y-[-10px] transition-transform">
            <div className="flex items-center justify-center bg-red-600 rounded-full p-4 w-16 h-16">
                <Icon className="text-white w-8 h-8" />
            </div>
            <div className="ml-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    );
}

export default AccomplishmentCard;
