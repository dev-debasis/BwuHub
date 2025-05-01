'use client'
import React from "react";
import { Link } from "next/link";
import navLogo from "../../public/images/nanotechnology.png";
import { BorderBeam } from "../components/ui/BorderBeam";

function NavBar() {
  return (
    <div className="fixed z-50 w-screen px-6 py-3 md:px-16 backdrop-blur-md shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={navLogo} alt="nav-logo" width="27px" />
        <p className="text-md font-semibold dark:text-cyan-500">SudoGeeks</p>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-gray-500">
        <li>
          <Link
            src="/"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            src="/features"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            src="/about"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            src="/contact"
            className="hover:text-white hover:underline underline-offset-4 duration-200 text-sm"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="relative ml-4">
        <Link
          src="/login"
          className="relative px-6 py-2 text-sm font-semibold text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Sign In →
          <BorderBeam
            size={40}
            initialOffset={20}
            className="from-transparent via-yellow-500 to-transparent"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
