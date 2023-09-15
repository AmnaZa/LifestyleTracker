import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Modal from 'react-modal';
import LoginForm from './LogInForm';
import '../modal.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

function LoginModal({ isOpen, onRequestClose, setUser, user }) {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Handle any logic you need for a successful login
    setUser(user);
    onRequestClose();
    navigate('/home'); // Navigate to the home page
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="login-modal" // Add a class for custom styling
      overlayClassName="modal-overlay" // Add a class for the overlay
    >
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      {/* You can add additional content or styling here */}
    </Modal>
  );
}

export default LoginModal;
