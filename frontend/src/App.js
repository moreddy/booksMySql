import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
