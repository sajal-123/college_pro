'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import im1 from '@/assets/im1.jpg'
import im2 from '@/assets/im2.jpg'
import im3 from '@/assets/one.jpg'
import background from '@/assets/tenp.jpg'
import './style.css'
function Carousel() {
  const slides = [
    {
      id: 1,
      src: im1, // High resolution college image
      alt: "College Campus 1",
    },
    {
      id: 2,
      src: im2, // High resolution college image
      alt: "College Campus 2",
    },
    {
      id: 3,
      src: im3, // High resolution college image
      alt: "College Campus 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`w-full flex items-center justify-center overflow-hidden`}>
      <div className="relative w-full">
        {/* Carousel Wrapper */}
        <div
          className="relative h-72 overflow-hidden md:h-[600px] transition-all duration-400 transform scale-0 opacity-0 animate-expand"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-700  ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920} // Set image width for better quality
                height={1080} // Set image height for better quality
                objectFit="contain" // Ensures the image covers the area without distortion
                layout="intrinsic" // Maintain aspect ratio of the image
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
