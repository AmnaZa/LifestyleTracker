import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import '../modal.css';
import LoginModal from '../LogInForm/LoginModal';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Define isLoginModalOpen state

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
    setError(''); // Clear any previous error message
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = await signUp(formData);

      // Redirect to /home on successful signup
      navigate('/home');

      // Optionally, you can clear the form fields here
      setFormData({
        name: '',
        email: '',
        password: '',
        confirm: '',
      });
    } catch (err) {
      setError('Sign Up Failed - Try Again');
    }
  };

  const disable = formData.password !== formData.confirm;

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="form-heading">Sign Up</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
      {/* <div>
        <button onClick={openLoginModal}>Log In</button>
      </div> */}
      {isLoginModalOpen && ( // Render the login modal if isLoginModalOpen is true
        <LoginModal
          isOpen={isLoginModalOpen}
          onRequestClose={() => setIsLoginModalOpen(false)}
        />
      )}
    </div>
  );
}
