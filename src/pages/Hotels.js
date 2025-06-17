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
    } catch (error) {
      setError('Failed to fetch hotels');
    }
  };

  const handleBook = async (hotelId) => {
    try {
      await API.post('/bookings/hotel', { hotelId });
      alert('Hotel booked!');
    } catch (error){
      alert('Booking failed');
    }
  };

  return (
    <div>
      <h2>Search Hotels</h2>
      <form onSubmit={handleSearch}>
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {hotels.map((hotel) => (
          <div key={hotel._id} style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
            <h3>{hotel.name}</h3>
            <p>City: {hotel.city}</p>
            <p>Price: ₹{hotel.price}</p>
            <button onClick={() => handleBook(hotel._id)}>Book Hotel</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
