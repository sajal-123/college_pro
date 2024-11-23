'use client'
import { Links } from '@/Data/Links';
import Link from 'next/link';
import { Link as NavLink } from '@/Data/Interface'; 
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

interface SideNavbarProps {
    setMenuOpen: () => void;
}

function SideNavbar({ setMenuOpen }: SideNavbarProps) {

    // Function to toggle the menu state
    const handleMenuToggle = () => {
        setMenuOpen(); // Call the parent function to perform additional actions
    };

    return (
        <div className={`w-full z-20 bg-blue-500 text-white p-4`}>
            {/* Logo Section */}
            <div className="flex items-center mb-4">
                <div className='flex gap-2 items-center'>
                    <Link href="/">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aI_6Ty_nZ95DmZc6V0F0q7vfSkX3s4kaMA&s"
                            alt="Logo"
                            className=" mr-2 cursor-pointer"
                            height={10}
                            width={10}
                        />
                    </Link>
                    <h1 className="text-2xl font-bold">Logo</h1>
                </div>
                    <button
                        className="text-white hover:scale-125 duration-300  z-20 hover:font-bold font-bold text-2xl absolute right-6 md:hidden"
                        onClick={handleMenuToggle} // Toggle menu on click
                    >
                        <MdCancel/>
                    </button>
            </div>

            {/* Links Section */}
            <div className="flex flex-col gap-4 z-20">
                {Links.map((link: NavLink, index: number) => (
                    <div key={index} className="relative">
                        {link.isSublinkns ? (
                            <div className="group">
                                <Link href={link.link || '#'} className="hover:text-blue-300">
                                    {link.label}
                                </Link>
                                {/* Sublinks */}
                                <div className="absolute top-full left-0  bg-white shadow-lg rounded hidden group-hover:block z-10">
                                    {link.sublinks?.map((sublink, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            href={sublink.link || '#'}
                                            className="block px-4 py-2 text-blue-500 hover:bg-blue-100 whitespace-nowrap"
                                        >
                                            {sublink.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="relative group">
                                <Link
                                    href={link.link || '#'}
                                    className="hover:text-blue-300 transition duration-300"
                                >
                                    {link.label}
                                </Link>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideNavbar;
