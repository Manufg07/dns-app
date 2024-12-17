"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/DNS_logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="h-11 w-auto"
          />
          <div className="text-center">
            <h1 className="text-xl font-bold">
              <span className="text-blue-500">Deep</span>{" "}
              <span className="text-green-400">Net</span>
            </h1>
            <h1 className="text-xl font-bold text-gray-400">Soft</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <p className="cursor-pointer hover:text-blue-500 transition-colors">
                HOME
              </p>
            </Link>
          </li>
          <li>
            <Link href="/Menu">
              <p className="cursor-pointer hover:text-blue-500 transition-colors">
                MENU
              </p>
            </Link>
          </li>
          <li>
            <Link href="/reservation">
              <p className="cursor-pointer hover:text-blue-500 transition-colors">
                MAKE A RESERVATION
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="cursor-pointer hover:text-blue-500 transition-colors">
                CONTACT US
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
