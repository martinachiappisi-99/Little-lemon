import React, { useState } from "react";

function BookingForm() {
  // Stato per ogni campo del modulo
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Compleanno");

  // Array di orari disponibili
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  // Funzione invio modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    // Al momento logghiamo i dati del form
    console.log({ date, time, guests, occasion });
    alert("Prenotazione inviata! Controlla console per i dati.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <label htmlFor="res-date">Scegli la data</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Scegli l'orario</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Seleziona un orario</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Numero di ospiti</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="20"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasione</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Compleanno">Compleanno</option>
        <option value="Anniversario">Anniversario</option>
      </select>

      <button type="submit">Invia prenotazione</button>
    </form>
  );
}

export default BookingForm;


