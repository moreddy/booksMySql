// creo un server di backend
import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8800, () => {
  console.log("---- Backend connesso SUCCESSO ----");
});

//creo la connessione al database
import sql from "mysql2";

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "Eruption78",
  database: "test",
});

//funzione diprova per vedere se il backend è leggibile
/*app.get("/", (req, res) => {
  res.json("Ciao questo è il backend");
});*/

//READ
// leggo il contenuto del db
app.get("/", (req, res) => {
  const queryLeggiTuttoIlDatabase = "SELECT * FROM test.books";

  db.query(queryLeggiTuttoIlDatabase, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//CREATE
//creo la parte di backend che mi permette di inserire un nuovo record nel database
// all'inizio uso postman che mi permetterá di testare se il backend funziona in questo senso

app.post("/books", (req, res) => {
  const queryInserisciNuovoLibro =
    "INSERT INTO test.books (`title`, `description`, `cover`,`price`) VALUES (?);";

  // questi valori li uso per fare una prova con postman
  //(dentro postman faccio la richiesta senza aver ancora inserito alcun json)
  /* const values = [
    "title from backend 1117",
    "description from backend 11117",
    "cover from backend 11117",
    "11117",
  ];*/

  //  questi valori li inserisco da post man
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price,
  ];

  db.query(queryInserisciNuovoLibro, [values], (err, data) => {
    if (err) {
      return res.json.err;
    } else {
      //return res.json("libro inserito con successo");
      return res.json(data);
    }
  });
});

// DELETE
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM test.books WHERE id=?";
  db.query(query, [bookId], (err, data) => {
    if (err) {
      return req.json(err);
    } else {
      return res.json(data);
    }
  });
});
