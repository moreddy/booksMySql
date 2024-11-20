// creo un server di backend
import express from "express";

const app = express();

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

//funzione diprova per vedere se il back + leggibile
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
