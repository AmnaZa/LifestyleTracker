import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Modal from 'react-modal';
import LoginForm from './LogInForm';
import '../modal.css';

// Set the root element for accessibility
Modal.setAppElement('#root');

function LoginModal({ isOpen, onRequestClose, setUser, user }) {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Handle any logic you need for a successful login
    setUser(user);
    onRequestClose();
    navigate('/home');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="login-modal" // Add custom styling class if needed
      overlayClassName="modal-overlay" // Add overlay styling class if needed
    >
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      {/* Additional content or styling can be added here */}
    </Modal>
  );
}

export default LoginModal;
