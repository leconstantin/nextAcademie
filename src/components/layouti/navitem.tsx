"use client";
import { useState } from "react";
import { navLinks } from "@/lib/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GroupMenu from "./groupMenu";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
export default function NavItem() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="hidden lg:flex">
        <ul className="flex items-center justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <li
                className={`
              text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1  px-1 sm:px-4 rounded-md
              hover:text-gray-800
              dark:hover:text-gray-200 hover:border-b-2 hover:border-blue-500
              ${pathName == link.href ? "border-b-2 border-blue-500" : ""}`}
              >
                {link.label}
              </li>
            </Link>
          ))}
          <GroupMenu />
        </ul>
      </div>
      <div className="lg:hidden z-50">
        <div onClick={handleNav}>
          <HiMenu
            size={29}
            className="text-blue-500 hover:text-black cursor-pointer"
          />
        </div>
        <div
          className={`top-0 w-screen h-screen z-50 
            ${
              menuOpen
                ? "fixed left-0 bg-indigo-100 dark:bg-gray-800 p-10 ease-in duration-500"
                : "fixed  left-[-100%] p-10 ease-out duration-500"
            }
          
        `}
        >
          <div onClick={handleNav} className="flex justify-end pr-5">
            <MdOutlineClose
              size={29}
              className="text-blue-500 hover:text-black cursor-pointer"
            />
          </div>
          <ul className="flex items-start gap-20 py-16  max-w-3xl mx-auto text-gray-600 capitalize dark:text-gray-300">
            <div className="flex flex-col gap-9">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href} onClick={handleNav}>
                  <li
                    className={`
              text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1  px-1 sm:px-4 rounded-md
              hover:text-gray-800
              dark:hover:text-gray-200 hover:border-b-2 hover:border-blue-500
              ${pathName == link.href ? "border-b-2 border-blue-500" : ""}`}
                  >
                    {link.label}
                  </li>
                </Link>
              ))}
            </div>

            <GroupMenu />
          </ul>
        </div>
      </div>
    </>
  );
}
