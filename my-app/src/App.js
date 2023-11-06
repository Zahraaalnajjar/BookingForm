import React, { useState } from 'react';
import BookingForm from './BookingForm';

const App = () => {
  const [bookingData, setBookingData] = useState(null);

  const handleBookingSubmit = (data) => {
    setBookingData(data);
  };

  return (
    <div>
      <h1>Welcome to Little Lemon</h1>
      <BookingForm onSubmit={handleBookingSubmit} />
      {bookingData && (
        <div>
          <h2>Booking Details:</h2>
          <p>Name: {bookingData.name}</p>
          <p>Date: {bookingData.date}</p>
          <p>Time: {bookingData.time}</p>
          <p>Number of Guests: {bookingData.guests}</p>
        </div>
      )}
    </div>
  );
};

export default App;