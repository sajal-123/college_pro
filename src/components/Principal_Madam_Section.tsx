'use client';
import React, { useState } from 'react';

function Principal_Madam_Section() {
  const [shadow, setShadow] = useState('0px 0px 15px rgba(0, 0, 0, 0.2)');

  // Function to handle mouse movement
  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const offsetX = (clientX - window.innerWidth / 2) / 10;
    const offsetY = (clientY - window.innerHeight / 2) / 10;
    setShadow(`${offsetX}px ${offsetY}px 25px rgba(0, 0, 0, 0.3)`);
  };

  return (
    <div className=" p-8 shadow-md space-y-6">
      {/* Image Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center px-20">
        <div
          className="w-full relative rounded-md flex items-center justify-center p-2"
          onMouseMove={handleMouseMove}
        >
          <img
            src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-bc2987e.png/:/cr=t:19.54%25,l:0%25,w:100%25,h:60.92%25/rs=w:600,h:800,cg:true"
            alt="Principal"
            className="rounded-md max-w-sm mx-auto h-auto shadow-md cursor-pointer"
            style={{
              boxShadow: shadow,
              transition: 'box-shadow 0.1s ease-out', // Smooth transition for shadow
            }}
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <p className="text-2xl text-white">
            “Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.” – Malcolm X
            - The school with an enthusiastic, experienced, and qualified teaching staff along with excellent infrastructure
            facilities provides the holistic atmosphere for the child to develop into the capable young wizards of today. Co-curricular
            activities complement the curriculum and aim at developing the personality of every student at the physical, mental,
            and cultural level. Besides scholastic achievements, the school also caters to polish non-scholastic attributes by providing
            a conducive environment like the inclusion of different clubs such as Music, Dance, Art & Craft, Dramatics, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Principal_Madam_Section;
