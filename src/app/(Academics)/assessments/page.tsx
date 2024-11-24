'use client'
import React, { useState, useEffect } from 'react';

function Page() {
  const [isVisible, setIsVisible] = useState(false);

  // Use useEffect to ensure this runs only on the client-side
  useEffect(() => {
    setIsVisible(true);  // Trigger animation on client after hydration
  }, []);

  return (
    <div className="p-6 bg-gradient-to-bl font-base from-blue-500 via-blue-300 to-blue-500">
      <div className="max-w-4xl mx-auto">
        {/* Image Section with animation */}
        <div className="flex justify-center mb-6">
          <img
            src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/assessment.jpg/:/cr=t:0%25,l:0.75%25,w:98.5%25,h:100%25/rs=w:400,h:400,cg:true"
            alt="Assessment"
            className={`w-full max-w-xs h-auto rounded-lg transition-transform duration-500 ease-in-out ${isVisible ? 'transform scale-105' : 'opacity-0'}`}
            style={{ transition: 'opacity 1s ease-in-out' }}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-gray-800">
          <h1 className="text-5xl font-semibold text-center text-blue-600">Assessment</h1>
          <p className="text-lg text-white">
            There will be an Internal Evaluation System for classes:
          </p>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800">L.K.G., U.K.G. and II:</h2>
            <p className="text-white">
              Students will be evaluated through their everyday work, class
              response, participation in various co-scholastic activities, and
              writing skills. Only worksheets will be given. Evaluation will be
              divided into both terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800">Classes III-V:</h2>
            <p className="text-white">
              Evaluation is divided into two terms. Along with Periodic tests,
              internal assessment will be taken. Internal assessment will be
              based on language skills (reading, speaking, listening, and
              writing), project work, notebook, holiday homework, activities,
              quizzes, O.T.B.A, Portfolio, and subject enrichment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800">Classes VI-XII:</h2>
            <p className="text-white">
              The examination pattern for class XI will be spread over the whole
              year in Unit tests, Half-yearly exams, and Annual examination of 80
              marks each. Marks are allocated for internal assessments (20 marks),
              which will be added to Unit tests, OTBA, Projects, Portfolios,
              Notebooks, subject enrichment activities, quizzes, and Pre-boards
              examinations. 75% attendance is a must for a student to appear in
              the Annual examination.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-800">Subject Options for Class XI:</h2>
            <p className="text-white">
              To get admission in class XI, students have the following subject
              options:
            </p>
            <ul className="list-disc text-lg font-base text-white pl-6">
              <li className="font-semibold text-xl text-blue-700"> SCIENCE STREAM</li>
              <ul className="list-inside list-decimal pl-4">
                <li>Medical: English, Physics, Chemistry, Biology, Maths, I.P., Physical Education.</li>
                <li>Engineering: English, Physics, Chemistry, Biology, Maths, CS, Physical Education.</li>
              </ul>
              <li className="font-semibold  text-xl text-blue-700"> COMMERCE STREAM (With Maths)</li>
              <ul className="list-inside list-decimal pl-4">
                <li>English, Maths, Accountancy, Business Studies, Economics, Physical Education.</li>
              </ul>
              <li className="font-semibold text-xl text-blue-700"> COMMERCE (Without Maths)</li>
              <ul className="list-inside list-decimal pl-4">
                <li>English, Information Technology / Physical Education, Accountancy, Business Studies, Economics.</li>
              </ul>
              <li className="font-semibold text-xl text-blue-700"> ARTS/HUMANITIES</li>
              <ul className="list-inside  list-decimal pl-4">
                <li>English Core, Hindi Elective, Political Science, Economics, Sociology, Physical Education.</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
