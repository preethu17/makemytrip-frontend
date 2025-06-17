// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import API from '../api';

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await API.get('/bookings/my');
        setBookings(res.data);
      } catch (err) {
        console.error('Failed to fetch bookings', err);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
            <p>Flight: {booking.flight?.from} → {booking.flight?.to}</p>
            <p>Date: {new Date(booking.flight?.date).toLocaleDateString()}</p>
            <p>Booking ID: {booking._id}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
