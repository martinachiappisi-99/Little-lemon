import React from "react";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";

function BookingPage({ availableTimes, onDateChange, submitForm }) {
  return (
    <div className="booking-page">
      <h1>Prenota un tavolo</h1>

      {/* Mostriamo gli slot già disponibili */}
      <div className="booking-slots">
        {availableTimes.map((time, index) => (
          <BookingSlot key={index} time={time} />
        ))}
      </div>

      {/* Form di prenotazione */}
      <BookingForm 
        availableTimes={availableTimes} 
        onDateChange={onDateChange} 
        submitForm={submitForm} 
      />
    </div>
  );
}

export default BookingPage;
