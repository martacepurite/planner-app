const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data.db");

db.run("CREATE TABLE IF NOT EXISTS users(id TEXT, name TEXT)");

//db.run(`INSERT INTO users(id, name) VALUES (
  //(1, 'John'),
  //(2, 'Bob');
//`);

const sql_insert = `INSERT INTO users (id, name ) VALUES
  (1, 'Jon'),
  (2, 'Mr. Bridge'),
  (3, 'L');`;
  db.run(sql_insert, err => {
    if (err) {
      return console.error(err.message);
    }
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", function (req, res) {
  db.serialize(() => {
    db.each('SELECT id ID, name NAME FROM users WHERE id =?', [req.params.id], function(err,row){     
      if(err){
        res.send("Error encountered while displaying");
        return console.error(err.message);
      }
      res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
      console.log("Entry displayed successfully");
    });
  });
});

app.post("/add", function (req, res) {
  db.serialize(() => {
    db.run(
      "INSERT INTO users(id,name) VALUES(?,?)",
      [req.body.id, req.body.name],
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New employee has been added");
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
