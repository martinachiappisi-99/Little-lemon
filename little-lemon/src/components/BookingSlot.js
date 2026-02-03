import React from "react";

function BookingSlot({ time }) {
  return (
    <div className="booking-slot">
      <p>Orario disponibile: {time}</p>
    </div>
  );
}

export default BookingSlot;
