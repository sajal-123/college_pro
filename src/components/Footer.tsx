import React from "react";

function FooterWithPlayfulBackground() {
  return (
    <div className="relative  bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500 py-16 overflow-hidden">
      <div className="absolute rounded-lg top-0 h-[1px] w-full bg-blue-700">

      </div>
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-40 left-1/3 w-12 h-12 bg-red-400 rounded-full animate-bounce delay-150"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-10 left-1/4 w-10 h-10 bg-purple-400 rounded-full animate-bounce delay-500"></div>

      {/* Moving Clouds */}
      <div className="absolute top-20 right-0 w-40 h-20 bg-white rounded-full opacity-50 animate-move-cloud"></div>
      <div className="absolute top-5 left-0 w-32 h-16 bg-white rounded-full opacity-50 animate-move-cloud"></div>

      {/* Kite */}
      <div className="absolute top-10 left-1/2 w-16 h-16 bg-red-500 rotate-45 transform origin-bottom-left animate-fly-kite"></div>
      <div className="absolute top-16 left-[52%] w-1 h-16 bg-red-700"></div>
      <div className="absolute top-32 left-[53%] w-4 h-4 bg-red-400 rounded-full"></div>

      {/* Footer Content */}
      <footer className="relative z-10 text-center">
        <h2 className="text-3xl font-bold">Vishal Bharti Senior Secondary School</h2>
        <p className="mt-4">
          Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar,
          Pitam Pura, New Delhi, Delhi, India
        </p>
        <p className="mt-2 font-semibold">9354937851 / 54</p>
        <p className="mt-4 text-sm">
          Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default FooterWithPlayfulBackground;
