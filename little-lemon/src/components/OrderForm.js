import React, { useState } from "react";

function OrderForm() {
  // Stato per ogni campo del modulo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dish, setDish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const dishes = ["Greek Salad", "Capricciosa", "Bruschetta", "Lemon Cake"];

  // Funzione invio modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, dish, quantity, notes });
    alert("Ordine inviato! Controlla la console per i dettagli.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "400px", gap: "20px" }}
    >
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Telefono</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label htmlFor="dish">Seleziona il piatto</label>
      <select
        id="dish"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        required
      >
        <option value="">Seleziona un piatto</option>
        {dishes.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <label htmlFor="quantity">Quantità</label>
      <input
        type="number"
        id="quantity"
        min="1"
        max="20"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label htmlFor="notes">Note aggiuntive</label>
      <textarea
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button type="submit">Invia Ordine</button>
    </form>
  );
}

export default OrderForm;
