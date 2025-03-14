import React from "react";

const DeleteAlertBox = ({ message, onDelete, onCancel }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
             bg-white/10 backdrop-blur-md border border-white/20"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Delete Confirmation</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlertBox;
