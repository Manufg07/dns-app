import React from "react";

interface AddItemModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black text-white rounded-lg w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Add Item</h2>
        <form>
          {/* Form fields */}
          <div className="mb-4">
            <label className="block text-gray-400 font-bold mb-2">
              Item Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
              placeholder="Enter item name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
              placeholder="Enter item description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-bold mb-2">Price</label>
            <input
              type="number"
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
              placeholder="Enter item price"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-700 text-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
