import React from "react";
import salad from "../images/greek salad.jpg";
import bruschetta from "../images/bruchetta.jpg";
import cake from "..//images/lemon dessert.jpg";
import { Link } from "react-router-dom";

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week’s specials!</h2>
        <Link to="/order">
        <button className="specials-button">Online Menu</button>
        </Link>
      </div>

      <div className="specials-cards">
        {/* CARD 1 */}
        <article className="special-card">
          <img src={salad} alt="Greek Salad" />
          <div className="card-content">
            <div className="card-title">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              Fresh lettuce, tomatoes, olives and feta cheese, dressed with
              olive oil.
            </p>
            <button className="order-btn">Order a delivery 🚴</button>
          </div>
        </article>

        {/* CARD 2 */}
        <article className="special-card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-content">
            <div className="card-title">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Grilled bread garlic, tomatoes, olive oil and salt.
            </p>
            <button className="order-btn">Order a delivery 🚴</button>
          </div>
        </article>

        {/* CARD 3 */}
        <article className="special-card">
          <img src={cake} alt="Lemon Dessert" />
          <div className="card-content">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <span className="price">$4.99</span>
            </div>
            <p>
              Traditional homemade lemon dessert straight from grandma’s recipe.
            </p>
            <button className="order-btn">Order a delivery 🚴</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;


