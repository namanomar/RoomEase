"use client"

import React, { useState ,useContext} from 'react';
import { Camera, Moon, Sun, ChevronDown, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import ThemeContext from '@/context/themeContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { assets } from '../../../public/assets/assets';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Demo state for auth
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  
  const { data: session } = useSession();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Contact', path: '/contact' },
    { label: 'Dining', path: '/dining' }
  ];

  const userMenuItems = [
    { label: 'My Profile', path: '/profile' },
    { label: 'My Bookings', path: '/bookings' },
    { label: 'Settings', path: '/settings' }
  ];

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
    darkTheme
      ? localStorage.removeItem('hotel-theme')
      : localStorage.setItem('hotel-theme', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <header className="py-6 px-4 container mx-auto ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image src={assets.logo} className="text-2xl font-black text-blue-600 hover:text-blue-700 w-44 cursor-pointer" alt="RoomEase"/>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Theme Toggle & User Menu */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            {darkTheme ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* User Menu */}
          <div className="relative">
          {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='cursor-pointer' />
                )}
              </Link>
            ) : (
              <Link
                href={"/auth"}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Sign In
              </Link>
            )}

            {/* Dropdown Menu */}
            {showDropdown && isLoggedIn && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {userMenuItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <hr className="my-2" />
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;