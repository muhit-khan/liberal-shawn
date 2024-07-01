import React from 'react';
import IssuesCard from '../../components/IssuesCard';
import { FaRegSmile, FaBalanceScale, FaGraduationCap } from 'react-icons/fa';

const issues = [
    {
        icon: FaRegSmile,
        title: 'Disarming hate',
        description: 'The gun violence continues to devastate the Maine families, and an entire new generation is growing up in constant fear for their lives. Handgun licenses can\'t be issues like this, we need concrete steps and clear legislation for that.',
    },
    {
        icon: FaBalanceScale,
        title: 'Racial justice',
        description: 'According to the Constitution, we have equal justice for all, but it\'s only about words but not deed for now. Maine is a homeland for different races, nationalities and adherents of various beliefs. A person shouldn\'t be blamed just because the color of his skin or nationality.',
    },
    {
        icon: FaGraduationCap,
        title: 'Education',
        description: 'We have enough universities and colleges but not enough qualified graduates. The yesterday students can\'t find jobs within the state, and local factories and businesses don\'t welcome them because of low practical skills.',
    },
];

const Issues = () => {
    return (
        <section className="py-20 bg-amber-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-red-600 mb-5">Issues</h2>
                <hr className="w-20 h-1 bg-red-600 mx-auto mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {issues.map((issue, index) => (
                        <IssuesCard
                            key={index}
                            icon={issue.icon}
                            title={issue.title}
                            description={issue.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Issues;
