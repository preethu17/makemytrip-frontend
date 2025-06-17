// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://makemytrip-backend-f7di.onrender.com', // adjust if backend is deployed
});
// Attach token to every request if present
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
