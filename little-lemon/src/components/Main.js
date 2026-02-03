import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";

// inizializza array vuoto
const initializeTimes = () => [];

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times; // aggiorna con i dati ricevuti dall'API
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // funzione per aggiornare in base alla data selezionata
  const handleDateChange = async (date) => {
    if (window.fetchAPI) {
      const times = await window.fetchAPI(date);
      dispatch({ type: "UPDATE_TIMES", times });
    }
  };

  // carica orari iniziali quando il componente monta
  useEffect(() => {
    const fetchInitialTimes = async () => {
      if (window.fetchAPI) {
        const today = new Date();
        const times = await window.fetchAPI(today);
        dispatch({ type: "UPDATE_TIMES", times });
      }
    };
    fetchInitialTimes();
  }, []);

  return (
  
    <>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
            />
          }
        />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element = {<MenuPage />} />
        {/* Aggiungi altre rotte qui se serve */}
      </Routes>
  </>
  
  );
}

export default Main;



