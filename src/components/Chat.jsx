'use client'
import React, { useState } from 'react';
import { MdCancel, MdMessage } from "react-icons/md";

function Chat() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Chat Icon */}
            <div
                className="fixed bottom-5 right-5 z-30 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600"
                onClick={toggleChat}
            >
                {isOpen ? <MdCancel size={24} /> : <MdMessage size={24} />}
            </div>

            {/* Chat Form */}
            {isOpen && (
                <div className="fixed z-30 bottom-16 right-5 bg-white shadow-lg p-1 rounded-lg w-96">
                    <div className="bg-blue-500 relative rounded-lg p-4">
                        <h2 className="text-3xl text-center font-semibold mb-2 text-white">
                            Vishal Bharti Senior Secondary School
                        </h2>
                        <div className="absolute bottom-[-44px] bg-blue-300 h-16 text-center w-[90%] left-1/2 transform -translate-x-1/2 rounded-md flex items-center justify-center text-white font-medium">
                        Hi! Let us know how we can help and we’ll respond shortly.
                        </div>
                    </div>


                    <form className='px-2'>
                        <div className="mb-3 mt-16">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Chat;
