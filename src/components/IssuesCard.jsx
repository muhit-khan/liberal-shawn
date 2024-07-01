// components/IssuesCard.jsx

import React from 'react';

const IssuesCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-[#011627] text-gray-50 p-6 rounded-md shadow-lg flex flex-col items-center text-center shadow transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-xl font-bold mb-4">
                <Icon className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl mb-10 text-red-600 font-bold">{title}</h3>
            <p className='text-justify text-lg'>{description}</p>
        </div>
    );
}

export default IssuesCard;
