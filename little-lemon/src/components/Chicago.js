import React from "react";
import img1 from "..//images/Mario and Adrian b.jpg";
import img2 from "../images/restaurant.jpg";
import img3 from "../images/restaurant chef B.jpg";
function Chicago() {
  return (
    <section className="chicago">
      <h2>Little Lemon Chicago</h2>
      <p>A family owned Mediterranean restaurant.</p>
         <div className="chicago-images">
        <img src={img1} alt="Dish 1" />
        <img src={img2} alt="Dish 2" />
        <img src={img3} alt="Dish 3" />
      </div>
    </section>
  );
}

export default Chicago;
