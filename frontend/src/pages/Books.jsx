import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="BB">
      <h1>Scotu Library</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <img src={book.cover}></img>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className="addButton">
        <Link to={"/add"} style={{ color: "inherit", textDecoration: "none" }}>
          Aggiungi nuovo libro
        </Link>
      </button>
    </div>
  );
};

export default Books;
