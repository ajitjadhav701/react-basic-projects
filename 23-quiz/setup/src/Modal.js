import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,closeModal,correct,questions}=useGlobalContext()
  return <div className={`${isModalOpen ? 'modal-container isOpen': 'modal'}`}>
      <div className="modal-content">
        <h2>congrets..!</h2>
        <p>Your correct answer Percentage :{((correct/questions.length)*100)}%</p>
        <button className='close-btn' onClick={closeModal}>play again</button>
      </div>
  </div>
}

export default Modal
