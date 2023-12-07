import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import Details from "./pages/Details";

function App() {


  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryName" element={<Details />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
