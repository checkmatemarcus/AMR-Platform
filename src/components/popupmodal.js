import React from 'react';
import ReactModal from 'react-modal';
import { bacterial_answer, resistant_answer, positive_resistance, prevent_answer } from './constants'; 

const ModalPopup = ({ isOpen, onRequestClose, question, answer }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="flex flex-col items-center justify-center h-full">
        <div class = 'py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className="font-bold text-center mb-4">{question}</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{answer}</p>
        </div>
        <button
          className="text-xl font-bold bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default ModalPopup;

