// src/pages/Flights.js
import React, { useState } from 'react';
import API from '../api';
import FlightCard from '../components/FlightCard';

function Flights() {
  const [form, setForm] = useState({ from: '', to: '', date: '' });
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await API.get('/flights/search', {
        params: form,
      });
      setFlights(res.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch flights');
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <form onSubmit={handleSearch}>
        <input name="from" value={form.from} onChange={handleChange} placeholder="From" required />
        <input name="to" value={form.to} onChange={handleChange} placeholder="To" required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {flights.map((flight) => (
          <FlightCard key={flight._id} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default Flights;
