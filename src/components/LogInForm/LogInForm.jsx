import { useState } from 'react';
import * as usersService from '../../utilities/users-service'
import '../modal.css'

export default function LoginForm({ setUser, onLoginSuccess }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    onLoginSuccess(user);
    // setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className="form-container">
      <h2 className="form-heading">Log In</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}