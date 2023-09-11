import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginForm from './LogInForm'
import './modal.css'

Modal.setAppElement('#root'); // Set the root element for accessibility

function LoginModal({ isOpen, onRequestClose, setUser }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="login-modal" // Add a class for custom styling
      overlayClassName="modal-overlay" // Add a class for the overlay
    >
      <LoginForm setUser={setUser} />

      {/* You can add additional content or styling here */}
    </Modal>
  );
}

export default LoginModal;
