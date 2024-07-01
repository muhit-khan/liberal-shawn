// components/Mission.jsx

import React from 'react';
import MissionCard from '../../components/MissionCard';
import greenEconomy from '../../../public/images/green-ecom.png';
import betterCare from '../../../public/images/bettter-care.png';
import housing from '../../../public/images/housing.png';
import flag from '../../../public/images/flag-in-map.jpg';

const missions = [
    {
        icon: greenEconomy,
        title: 'Green Economy',
        description: "It&apos;s time to think about nature and use its renewable resources to progress.",
    },
    {
        icon: betterCare,
        title: 'Better Care',
        description: 'We need to review the medical system in Maine and adjust it to current needs.',
    },
    {
        icon: housing,
        title: 'Housing',
        description: 'The Maine local bodies should review the 40-60% payments of rent.',
    },
];

const Mission = () => {
    return (
        <section
            className="bg-cover bg-center "
            style={{ backgroundImage: `url(${flag.src})` }}
        >
            <div className="py-20 bg-[#011627] bg-opacity-90 h-auto">
                <div className="container mx-auto px-4 py-10">
                    <h2 className="text-4xl font-bold text-center text-red-600 mb-5">Shawn&apos;s Mission</h2>
                    <hr className="w-40 h-1 bg-red-600 mx-auto mb-20" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center">
                        {missions.map((mission, index) => (
                            <MissionCard
                                key={index}
                                icon={mission.icon}
                                title={mission.title}
                                description={mission.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
