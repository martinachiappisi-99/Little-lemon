import React from "react";
import OrderForm from "../components/OrderForm";

function OrderPage() {
  return (
    <div className="order-page">
      <h1>Ordine Online</h1>
      <p>Compila il modulo per ordinare i tuoi piatti preferiti da Little Lemon.</p>
      <OrderForm />
    </div>
  );
}

export default OrderPage;


