// users-service.js (Merged Utility File)

// Import any dependencies you need
import { useNavigate } from 'react-router-dom';

const BASE_URL = '../../controllers/api'

// Function to get the token from localStorage
export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }

  return token;
}

// Function to get the user from the token
export function getUser() {
  const token = getToken();

  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

// Function to log the user out
export function logOut(navigate) {
  localStorage.removeItem('token');
  navigate('/login'); // Redirect to the login page
}

// Function to send HTTP requests with authentication headers
export async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code is set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

// Function to sign up a user
export async function signUp(userData) {
  return sendRequest('/api/users', 'POST', userData);
}

// Function to log in a user
export async function login(credentials) {
  try {
    const token = await sendRequest(`${BASE_URL}/login`, 'POST', credentials);
    localStorage.setItem('token', token);
    return getUser();
  } catch (error) {
    console.error('Login Error:', error);
    throw error; // Rethrow the error to be caught where you call the login function
  }
}

// Function to check the token's validity
export async function checkToken() {
  return sendRequest('/api/users/check-token');
}
