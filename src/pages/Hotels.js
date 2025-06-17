// src/pages/Hotels.js
import React, { useState } from 'react';
import API from '../api';

function Hotels() {
  const [form, setForm] = useState({ city: '', date: '' });
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await API.get('/hotels/search', { params: form });
      setHotels(res.data);
      setError('');
    } catch {
      setError('Failed to fetch hotels');
    }
  };

  const handleBook = async (hotelId) => {
    try {
      await API.post('/bookings/hotel', { hotelId });
      alert('Hotel booked!');
    } catch {
      alert('Booking failed'
