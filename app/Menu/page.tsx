"use client";

import React, { useState } from "react";

interface MenuItems {
  [key: string]: string[];
}

const MenuFeed = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Drinks");

  const menuItems: MenuItems = {
    Drinks: ["Coffee", "Tea", "Orange Juice", "Cocktails"],
    Food: ["Burger", "Pizza", "Pasta", "Salad"],
    Brunch: ["Pancakes", "Omelette", "Bagel", "French Toast"],
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Header Section */}
      <div className="flex-1 relative flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/BGM.jpeg")' }}
        ></div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold">MENU</h1>
          <p className="text-lg mt-4">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the{" "}
            <strong>"Order Online"</strong> button located below the menu.
          </p>
        </div>
      </div>

      {/* Menu Headings Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto grid grid-cols-3 gap-4 text-center">
          {Object.keys(menuItems).map((menu, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 rounded-md ${
                activeMenu === menu ? "bg-gray-700 text-white" : "bg-gray-600"
              }`}
              onClick={() => setActiveMenu(menu)}
            >
              <h2 className="text-2xl font-bold">{menu}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Listing Section */}
      <div className="flex-2 overflow-y-auto bg-gray-900 ">
        <div className="flex flex-col container mx-auto py-8 items-center">
          <h2 className="text-3xl font-bold mb-4">{activeMenu} Menu</h2>
          <ul className="list-disc pl-5 ">
            {menuItems[activeMenu].map((item, index) => (
              <li key={index} className="mb-2 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuFeed;
