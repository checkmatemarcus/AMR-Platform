import React from 'react';

function Modal({ isOpen, onRequestClose, explanation, reference }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-md">
          <div className="text-lg font-semibold mb-2">Explanation</div>
          <div dangerouslySetInnerHTML={{ __html: explanation }}></div>
          <div className="text-lg font-semibold mt-3">Reference</div>
          <div dangerouslySetInnerHTML={{ __html: reference }}></div>
          <button
            onClick={onRequestClose}
            className="py-2 px-4 rounded mt-3"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
export default Modal;