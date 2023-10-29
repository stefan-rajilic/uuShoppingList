import logo from "./logo.svg";
import "./App.css";
import ShoppingList from "./ShoppingList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useRef } from 'react';
import Home from "./Home";


function App() {
  return (
    <Router>
      <div className="App">

        

        <Routes>
          <Route path="/Shoppinglist" element={<ShoppingList />} />
          {/* Můžete přidat další routy zde */}
       
          <Route path="/" element={<Home />} />
          {/* Můžete přidat další routy zde */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
