import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import "../src/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
