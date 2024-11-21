import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const recuperaTuttiLibriNelDB = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    recuperaTuttiLibriNelDB();
  }, []);
  return (
    <div className="books">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.cover}></img>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <span>{book.price}</span>
        </div>
      ))}
      <button>
        <Link to={"/add"}>Aggiungi nuovo libro</Link>
      </button>
    </div>
  );
};

export default Books;
