"use client"

import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import AddMenuModal from "./AddMenuModal";

const MenuCard = () => {
  const [isMenuModalOpen, setMenuModalOpen] = useState(false);
  const [isItemModalOpen, setItemModalOpen] = useState(false);

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
            If you'd like to create or update menus, use the buttons below.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setMenuModalOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-300"
            >
              Add Menu
            </button>
            <button
              onClick={() => setItemModalOpen(true)}
              className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition duration-300"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddMenuModal
        isOpen={isMenuModalOpen}
        closeModal={() => setMenuModalOpen(false)}
      />
      <AddItemModal
        isOpen={isItemModalOpen}
        closeModal={() => setItemModalOpen(false)}
      />
    </div>
  );
};

export default MenuCard;
