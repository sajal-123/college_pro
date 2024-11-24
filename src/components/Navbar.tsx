'use client';
import { Links } from '@/Data/Links';
import { Link as NavLink } from '@/Data/Interface'; // Ensure this matches your interface location
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdMenu, MdCancel } from "react-icons/md";
import SideNavbar from './SideNavbar';
import './style.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname=usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);

  useEffect(() => {
    console.log(pathname);
    setAnimateLinks(true);
  }, []);

  return (
    <div className={`w-full h-16 ${menuOpen ? 'bg-gray-500' : 'bg-blue-500'} p-4 shadow-md`}>
      <nav className="flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aI_6Ty_nZ95DmZc6V0F0q7vfSkX3s4kaMA&s"
              alt="Logo"
              className="h-10 w-10 mr-2 cursor-pointer"
            />
          </Link>
          <h1 className="text-2xl font-bold text-white italic animate-bounce glow">vishalbhartischool</h1>
          </div>

        {/* Hamburger Menu */}
        <button
          className="text-white font-bold text-2xl absolute right-6 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdCancel /> : <MdMenu />}
        </button>

        {/* Links Section (Desktop Menu) */}
        <div className=" md:text-lg lg:text-xl text-md hidden lg:flex gap-4 items-center z-20">
          {Links.map((link: NavLink, index: number) => (
            <div key={index} className={`relative flex opacity-0 ${animateLinks ? `animate-slideIn delay-${index * 100}` : ''}`}
>
              {link.isSublinkns ? (
                <div className="group">
                  <Link href={link.link || '#'} className="hover:text-blue-900 hover:-translate-y-1 hover:text-bold hover:underline  duration-200 flex items-center">
                    {link.label} <span className='group-hover:rotate-180 duration-200'><MdKeyboardArrowDown /></span>
              
                  </Link>
                  {/* Sublinks */}
                  <div className="absolute top-full  bg-white shadow-lg rounded hidden group-hover:block z-10">
                    {link.sublinks?.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.link || '#'}
                        className="block px-4 text-nowrap py-2 text-blue-500 hover:bg-blue-100"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={link.link || ''} className="hover:text-blue-300">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden z-20 absolute top-0 p-2 left-0 w-full bg-blue-500 shadow-lg transition-transform duration-500 ease-in-out transform ${
            menuOpen ? 'translate-y-0' : '-translate-y-[400px]'
          }`}
        >
          <SideNavbar  setMenuOpen={() => {
            setMenuOpen(false)
            console.log("Hello")
          }}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
