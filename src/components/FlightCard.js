// src/components/FlightCard.js
import React from 'react';

function FlightCard({ flight }) {
  const handleBook = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ flightId: flight._id }),
      });

      await res.json();
      alert('Flight booked successfully!');
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <p>
        ✈️ {flight.from} → {flight.to}
      </p>
      <p>Date: {new Date(flight.date).toLocaleDateString()}</p>
      <p>Price: ₹{flight.price}</p>
      <button onClick={handleBook}>Book Flight</button>
    </div>
  );
}

export default FlightCard;
