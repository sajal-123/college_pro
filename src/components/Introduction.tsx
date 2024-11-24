import React from 'react';
import './style.css'
function Introduction() {
    return (
        <div className='w-full  pt-8 p-4 pb-8'>
            <div className="introduction-bg rounded-lg">
            {/* Overlay */}
            <div className="overlay"></div>

            {/* Animated Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h1></h1>
                <h5 className="text-4xl text-italic md:text-5xl font-semibold animate-fadeInUp">
                &quot;Education gives the deepest insight, search for truth the highest form of Worship, passion ends in endless miseries, scarifies and renunciation bring eternal bliss.&quot;
                </h5>
                <p className="mt-4 text-lg md:text-2xl animate-fadeInUp delay-200">
                    I create beautiful, efficient, and scalable solutions.
                </p>
            </div>
        </div>
        </div>
    );
}


export default Introduction;
