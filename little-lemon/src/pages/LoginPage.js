import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    alert(`Logging in with email: ${email}`);
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }} className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#F4CE14", border: "none", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
