import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(book);
  };

  const handleClick = async (e) => {
    // la prevent default non di compila in automatico ma devo scriverla per esteso a mano
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Aggiungi nuovo libro</h1>
      <input placeholder="title" name="title" onChange={handleChange}></input>
      <input
        placeholder="description"
        name="description"
        onChange={handleChange}
      ></input>
      <input placeholder="cover" name="cover" onChange={handleChange}></input>
      <input placeholder="price" name="price" onChange={handleChange}></input>
      <button onClick={handleClick}>Aggiungi</button>
    </div>
  );
};

export default Add;
