"use client";
import ThemeContext from "@/context/themeContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3 ">
        <Link href="/" className="font-black text-tertiary-dark">
          RoomEase
        </Link>
        <ul className="flex item-center ml-5">
          <li className="flex items-center">
            <Link href="/auth" className="cursor-pointer">
              <FaUserCircle></FaUserCircle>
            </Link>
          </li>
          <li className="ml-2">
            {darkTheme ? (
              <MdLightMode
                className="cursor-pointer "
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              ></MdLightMode>
            ) : (
              <MdDarkMode
                className="cursor-pointer "
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme","true")
                }}
              ></MdDarkMode>
            )}
          </li>
        </ul>
      </div>
      <ul className="hidden items-center justify-between w-full md:w-1/3  sm:flex mt-4 ">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
