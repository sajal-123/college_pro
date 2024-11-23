'use client';
import { useEffect, useRef } from "react";

const Intro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-auto px-4 bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500 text-white text-blue py-16 flex flex-col items-center justify-center w-full">
      <div ref={sectionRef} className="fade-in-section text-center">
        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-6 underline decoration-white decoration-4">
          Vishal Bharti Senior Secondary School
        </h1>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold mb-6 leading-tight">
          Discover Vishal Bharti Senior Secondary School&apos;s Unique Approach to Learning.
        </h3>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          At Vishal Bharti Senior Secondary School, we believe that every student has the
          potential to excel academically and personally. That’s why we’ve developed a
          unique approach to learning that focuses on each student’s individual needs and
          learning style. Our teachers are dedicated to fostering a supportive and inclusive
          learning environment, where students are encouraged to explore new ideas and take risks.
          We offer a wide range of academic and extracurricular programmes that enable our students
          to build a strong foundation for success.
        </p>
      </div>
    </div>
  );
};

export default Intro;
