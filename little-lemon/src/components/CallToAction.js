import React from "react";
import { Link } from "react-router-dom";
import image from "../images/restauranfood.jpg"

function CallToAction() {
  return (
    <section className="cta">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.</p>
      <Link to="/booking">
      <button>Reserve a Table</button>
    </Link>
    <img src={image} alt="spiedini" />
    </section>
  );
}

export default CallToAction;
