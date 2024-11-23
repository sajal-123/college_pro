
'use client'
import React from 'react';

function Mission() {
    return (
        <div  className="w-full text-white py-16 px-8 relative overflow-hidden"
>
            {/* Vision Section */}
            <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
                VISION
            </h1>
            <p className="text-lg text-center mb-12 leading-7 animate-slide-up">
                Empowering students to pursue their dreams.
            </p>

            {/* Values Section */}
            <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in-delay">
                VALUES
            </h2>
            <p className="text-lg text-center mb-12 leading-7 animate-slide-up-delay">
                Resilience, Respect, Responsibility, Honesty, Academic Excellence, Patriotism, Dignity, Perseverance.
            </p>

            {/* Motto Section */}
            <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
                MOTTO OF THE SCHOOL
            </h1>

            {/* Mission Section */}
            <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in-delay">
                MISSION:
            </h2>
            <p className="text-lg text-center mb-12 leading-7 animate-slide-up-delay">
                Fueling passion for learning and developing innate qualities of students to the best of their efficiency.
            </p>
        </div>
    );
}

export default Mission;
