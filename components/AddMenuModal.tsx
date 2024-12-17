import React from "react";

interface AddMenuModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddMenuModal: React.FC<AddMenuModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black text-white rounded-lg w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Add Menu</h2>
        <form>
          {/* Form fields */}
          <div className="mb-4">
            <label className="block text-gray-400 font-bold mb-2">
              Menu Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
              placeholder="Enter menu name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full border border-gray-600 bg-gray-800 text-white p-2 rounded"
              placeholder="Enter menu description"
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuModal;
