import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Modal from 'react-modal';
import LoginForm from './LogInForm';
import '../modal.css';

// Set the root element for accessibility
Modal.setAppElement('#root');

export default function LoginModal({ isOpen, onRequestClose, setUser, user }) {
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    // Handle any logic you need for a successful login
    onRequestClose();
    setUser(user);
    navigate('/home');
  };

  return (
    <div>
      {isOpen && <div className="dimmed-background"></div>}
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Login Modal"
        className="login-modal" // Use the updated CSS class name
        overlayClassName="modal-overlay" // Use the updated CSS class name
      >
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </div>
  );
}
