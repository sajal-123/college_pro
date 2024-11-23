import React from 'react';

function Infinite_Scroller() {
  return (
    <div className="relative overflow-hidden  h-20 text-black bg-gray-200 flex items-center justify-center">
      <div className="flex animate-scroll whitespace-nowrap">
        <p className="text-2xl px-8 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          This is some text that scrolls infinitely. It fades as it moves to the edges.
        </p>
        <p className="text-2xl px-8 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          This is some text that scrolls infinitely. It fades as it moves to the edges.
        </p>
        <p className="text-2xl px-8 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          This is some text that scrolls infinitely. It fades as it moves to the edges.
        </p>
        <p className="text-2xl px-8 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          This is some text that scrolls infinitely. It fades as it moves to the edges.
        </p>
        <p className="text-2xl px-8 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          This is some text that scrolls infinitely. It fades as it moves to the edges.
        </p>
        <p className="text-2xl px-8 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          This is some text that scrolls infinitely. It fades as it moves to the edges.
        </p>
      </div>
    </div>
  );
}

export default Infinite_Scroller;
