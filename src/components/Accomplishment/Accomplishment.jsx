import React from 'react';
import AccomplishmentCard from '../../components/AccomplishmentCard';
import { FaSchool, FaBriefcase, FaCity, FaHistory, FaUniversity, FaFutbol } from 'react-icons/fa';

const accomplishments = [
    {
        icon: FaSchool,
        title: 'School assistance',
        description: 'Purchase of new textbooks in Lewiston secondary school.',
    },
    {
        icon: FaBriefcase,
        title: '500 new jobs',
        description: 'The number of jobs at Maine&apos;s factories increased by 5000 units in 2019 and still growing.',
    },
    {
        icon: FaCity,
        title: 'Restoration of the city center',
        description: 'Over 100 house facades were renovated in 2019.',
    },
    {
        icon: FaFutbol,
        title: 'Randall Road Ball Fields',
        description: 'New facilities for sports and leisure.',
    },
    {
        icon: FaUniversity,
        title: 'New lecture hall',
        description: 'A lecture hall in University of Southern Maine Lewiston-Auburn College was opened in 2019.',
    },
    {
        icon: FaHistory,
        title: 'Restoration of Engine House',
        description: 'The historical memo re-opened its doors for tourists in 2018.',
    },
];

const Accomplishment = () => {
    return (
        <section className="py-20 bg-[#011627] bg-opacity-90">
            <div className="container mx-auto py-10 px-4">
                <h2 className="text-4xl font-bold text-center text-red-600 mb-5">We&apos;ve Done This Together</h2>
                <hr className="w-40 h-1 bg-red-600 mx-auto mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-white">
                    {accomplishments.map((item, index) => (
                        <AccomplishmentCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Accomplishment;
