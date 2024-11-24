import React from 'react';

function Page() {
    return (
        <div className="w-full bg-gradient-to-br from-blue-500 via-white to-blue-500 pt-8 p-4 pb-8">
            <div
                className="grid md:grid-cols-2 max-md:flex-col-reverse gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-500 before:h-full max-md:before:hidden"
            >
                <div>
                    <h2 className="text-gray-800 text-3xl font-extrabold">Contact Us</h2>
                    <p className="text-lg text-gray-500 mt-4 leading-relaxed">
                        Vishal Bharti Sr. Sec. School, opposite D Block, Sarawati Vihar, Parwana Road, Pitampura Delhi-110034
                    </p>
                    <h3 className="mt-4 text-gray-600">Phone Numbers: <span className="text-gray-500">011-27026750, 27023377, 9354937851/54</span></h3>

                    <form>
                        <div className="space-y-4 mt-8">
                            <input
                                type="text"
                                placeholder="Full Name"
                                aria-label="Full Name"
                                className="px-3 py-2 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                aria-label="Your Email"
                                className="px-3 py-2 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                aria-label="Subject"
                                className="px-3 py-2 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                aria-label="Your Message"
                                rows={5}
                                className="px-3 py-2 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                fill="#fff"
                                className="mr-2"
                                viewBox="0 0 548.244 548.244"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Send Message
                        </button>
                    </form>

                    <ul className="mt-4 flex flex-wrap justify-center gap-6">
                        <li className="flex items-center text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                fill="currentColor"
                                viewBox="0 0 479.058 479.058"
                            >
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                />
                            </svg>
                            <a href="mailto:vbsschool.info@gmail.com" className="text-sm ml-4">
                                <strong>vbsschool.info@gmail.com</strong>
                            </a>
                        </li>
                        <li className="flex items-center text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                fill="currentColor"
                                viewBox="0 0 482.6 482.6"
                            >
                                <path
                                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2..."
                                />
                            </svg>
                            <a href="tel:+158996888" className="text-sm ml-4">
                                <strong>+158 996 888</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="z-10 relative h-full max-md:min-h-[350px]">
                    <iframe
                        src="https://maps.google.com/maps?q=Vishal%20Bharti%20Sr.%20Sec.%20School%2C%20opposite%20D%20Block%2C%20Sarawati%20Vihar%2C%20Parwana%20Road%2C%20Pitampura%2C%20Delhi-110034&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        title="Location Map"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

export default Page;
