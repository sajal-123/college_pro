'use client';
import React from 'react';

function page() {
  return (
    <div className="px-4 py-6 md:px-12 md:py-8 bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500 space-y-8">
      <h1 className="text-5xl font-semibold text-center text-blue-700">Rules & Regulations</h1>
      
      <div className="space-y-6">
        <h2 className=" font-semibold text-center text-4xl text-blue-700 underline">Attendance</h2>
        <p className="text-lg text-white leading-relaxed text-center">
          Students need to attend school regularly and punctually. Every student will bring his/her school diary daily and without fail.
          Students who come to school in their own transport should not reach before <span className="text-blue-700">7.25 am</span>. School gates will be open in the morning at <span className="text-blue-700">7.25 am</span> and closed at <span className="text-blue-700">8.00 am</span>.
          The bell signals for all to go to their respective classrooms. They should enter classrooms silently without jostling and pushing. 
          The school uniform is to be worn on all school days and at all school functions. Students should not be shabbily dressed.
          Care should be taken not to disfigure or damage school property. Any loss or damage to school property due to wanton destruction/carelessness of a student will lead to the imposition of fine and recovery of cost.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className=" font-semibold text-blue-700 text-4xl text-center underline">Uniform</h2>
        <p className="text-lg text-white leading-relaxed">
          <span className="font-semibold text-2xl text-blue-700">Summer Uniform (Pre-Primary to XII):</span><br />
          Red/Beige checked half-sleeves shirt. Beige Shorts for boys of classes I-V. Beige Pants for boys of classes VI-XII. Beige Dividers Skirts for Girls (Beige cycle shorts compulsory). Red/Beige Fabric belt. Beige socks with red stripe. Black Gola Shoes.<br />
          
          <span className="font-semibold text-2xl text-blue-700">Winter Uniform (Pre-Primary to XII):</span><br />
          Red/Beige checked full-sleeves shirt. Beige Pants for classes I-XII (Boys). Beige Dividers Skirts for classes I-XII (Girls). Red Sweater with Beige Stripes. School Blazer. Red/Beige Fabric belt. Beige socks with red stripe. Black Gola Shoes.<br />
          
          <span className="font-semibold text-2xl text-blue-700">Winter House Uniform (To be worn on Wed and Sat):</span><br />
          T-Shirt of House Colour. White colour shorts for boys (I-V). White colour Pants for boys (VI-XII). White Colour Divider Skirts for Girls (I-XII). White socks with House colour stripes. White Tennis / Fleet Shoes.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-semibold text-blue-500 text-center underline">Examination</h2>
        <p className="text-lg text-white leading-relaxed">
          <span className="font-semibold text-2xl text-blue-700">Pre Primary Assessment:</span><br />
          Non-formal evaluation system in the form of Class Assessment for students of Pre-Primary and 3 Rounds of Internal Evaluation Worksheets for classes Pre-School to II form the evaluation system.<br />
          
          <span className="font-semibold text-2xl text-blue-700">Mock / Pre-Board Examination:</span><br />
          These are administered to classes X and XII by giving students practice in taking examinations on the board pattern. The number of papers and the marks for each will be the same as in the CBSE Examination.<br />
          
          <span className="font-semibold text-2xl text-blue-700">Eligibility:</span><br />
          A student is required to have <span className="text-blue-700">75% attendance</span> to be eligible to appear at the Annual Examination. In genuine cases, the Principal may condone the shortage in attendance not exceeding <span className="text-blue-700">10%</span>.<br />
          
          <span className="font-semibold text-2xl text-blue-700">Promotion Criteria:</span><br />
          Promotion is made based on the cumulative results of weekly tests in each subject and the comprehensive examination. The decision of the school authorities regarding promotion is final and binding on the parents/guardian. No student is given double promotion.<br />
          
          <span className="font-semibold text-2xl text-blue-700">CCE (Continuous and Comprehensive School-Based Evaluation):</span><br />
          As per the CBSE guidelines & directives, at the end of class X, all the students are issued CCE Certificates by the school. The CCE Certificate consists of academic performance, personal & social qualities, attitudes & values, co-curricular activities, outdoor activities, health status, and attendance of a child. The certificate will bear the grading based on the evaluation of the student during his/her stay in the school up to Class X.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-semibold text-blue-700 text-center underline">Attendance Requirements</h2>
        <p className="text-lg text-white leading-relaxed text-center">
          The first bell rings at <span className="text-blue-700">7:50 A.M.</span> and all students are required to be in school by/before the first bell. At <span className="text-blue-700">7:50</span>, roll call is marked by the class teacher in the home room period. The school gate is closed at <span className="text-blue-700">8.00 A.M.</span> and no latecomers are allowed in the school premises after this time. It is compulsory for all students to attend the morning assembly. At every school program, activity, or function as applicable, attendance is compulsory. <span className="text-blue-700">75% attendance</span> is compulsory for promotion. There is a prize for full attendance awarded at the time of the annual function. Withdrawal of a child during school hours for attending religious/social functions is not allowed. In case of emergency, the Principal may be contacted. No leave of absence is granted except for compelling/unavoidable reasons, subject to a written application submitted well in advance. Absence for more than five days after vacations renders the student liable to have his/her name struck off from the rolls.
        </p>
      </div>
    </div>
  );
}

export default page;
