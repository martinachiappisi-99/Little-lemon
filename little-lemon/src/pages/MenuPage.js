import React from "react";


function MenuPage() {
  return (
    <main className="menu-page">
      <h1>Our Menu</h1>
      <p>
        Welcome to Little Lemon! Explore our delicious selection of dishes,
        crafted with fresh ingredients and authentic flavors. From appetizers to
        desserts, we have something for everyone.
      </p>

      <section className="menu-section">
        <h2>Appetizers</h2>
        <ul>
          <li>Bruschetta – Grilled bread with tomato and basil</li>
          <li>Stuffed Mushrooms – Mushrooms filled with cheese and herbs</li>
          <li>Garlic Prawns – Sautéed prawns with garlic and chili</li>
        </ul>
      </section>

      <section className="menu-section">
        <h2>Main Courses</h2>
        <ul>
          <li>Grilled Salmon – Fresh salmon with lemon butter sauce</li>
          <li>Spaghetti Carbonara – Classic Italian pasta with pancetta</li>
          <li>Chicken Parmesan – Breaded chicken with marinara and cheese</li>
        </ul>
      </section>

      <section className="menu-section">
        <h2>Desserts</h2>
        <ul>
          <li>Tiramisu – Coffee-flavored Italian dessert</li>
          <li>Chocolate Lava Cake – Warm chocolate cake with molten center</li>
          <li>Panna Cotta – Creamy dessert with berry sauce</li>
        </ul>
      </section>
    </main>
  );
}

export default MenuPage;
