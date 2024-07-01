"use client"
import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on the scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='fixed bottom-4 right-4'>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='p-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition duration-300'
                    aria-label="Go to top"
                >
                    <FiArrowUp size={24} />
                </button>
            )}
        </div>
    );
};

export default GoToTopButton;
