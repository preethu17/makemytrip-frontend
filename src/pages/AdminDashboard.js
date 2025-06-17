import React, { useState, useEffect } from 'react';
import API from '../api';

function AdminDashboard() {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);

  const [newFlight, setNewFlight] = useState({ from: '', to: '', date: '', price: '' });
  const [newHotel, setNewHotel] = useState({ name: '', city: '', price: '' });

  useEffect(() => {
    API.get('/flights').then(res => setFlights(res.data));
    API.get('/hotels').then(res => setHotels(res.data));
  }, []);

  const addFlight = async () => {
    await API.post('/flights', newFlight);
    alert('Flight added');
    window.location.reload();
  };

  const addHotel = async () => {
    await API.post('/hotels', newHotel);
    alert('Hotel added');
    window.location.reload();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Add Flight</h3>
      <input placeholder="From" onChange={(e) => setNewFlight({ ...newFlight, from: e.target.value })} />
      <input placeholder="To" onChange={(e) => setNewFlight({ ...newFlight, to: e.target.value })} />
      <input type="date" onChange={(e) => setNewFlight({ ...newFlight, date: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setNewFlight({ ...newFlight, price: e.target.value })} />
      <button onClick={addFlight}>Add Flight</button>

      <h3>Add Hotel</h3>
      <input placeholder="Name" onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })} />
      <input placeholder="City" onChange={(e) => setNewHotel({ ...newHotel, city: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setNewHotel({ ...newHotel, price: e.target.value })} />
      <button onClick={addHotel}>Add Hotel</button>

      <h3>All Flights</h3>
      <ul>
        {flights.map((f) => (
          <li key={f._id}>
            ✈️ {f.from} → {f.to} | Date: {new Date(f.date).toLocaleDateString()} | Price: ₹{f.price}
          </li>
        ))}
      </ul>

      <h3>All Hotels</h3>
      <ul>
        {hotels.map((h) => (
          <li key={h._id}>
            🏨 {h.name} in {h.city} | Price: ₹{h.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
