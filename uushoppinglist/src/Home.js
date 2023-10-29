import React, { useRef } from "react";
import ShoppingList from "./ShoppingList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* Sem můžete přidat další kód podstránky */}

      {/* Tlačítko pro navigaci */}
      <Link to="/ShoppingList">
        <button>Zobrazit nákupní seznam</button>
      </Link>
    </div>
  );
};

export default Home;
