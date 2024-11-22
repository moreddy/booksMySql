import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(book);
  };

  //   ora recupero id del libro che mi compare nella location della pagina
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  console.log(bookId);

  const navigate = useNavigate();
  const hancleClickAggiorna = (e) => {
    e.preventDefault();
    try {
      //   axios.put("http://localhost:8800/books/" + bookId, book);
      axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Update page</h1>
      <input
        placeholder="title"
        type="text"
        name="title"
        onChange={handleChange}
      ></input>
      <textarea
        placeholder="description"
        type="text"
        rows={5}
        name="description"
        onChange={handleChange}
      ></textarea>
      <input
        placeholder="cover"
        type="text"
        name="cover"
        onChange={handleChange}
      ></input>
      <input
        placeholder="price"
        type="number"
        name="price"
        onChange={handleChange}
      ></input>
      <button onClick={hancleClickAggiorna}>Aggiorna</button>
    </div>
  );
};

export default Update;
