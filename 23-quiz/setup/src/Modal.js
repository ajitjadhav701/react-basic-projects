import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        {((correct / questions.length) * 100).toFixed(0) > 50 ? (
          <h2>congrets..!</h2>
        ) : (
          <h2>Bad performance..!</h2>
        )}
        <p>
          Your correct answer Percentage :
          {((correct / questions.length) * 100).toFixed(0)}%
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
