import express from "express";
import pool from "./db.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Hogwarts API listening on port ${port}`);
});

/******************** Teachers *******************/

// teachers - get all teachers //

app.get("/teachers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM teachers");
    console.log(result);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
});

// teachers - get a single teacher //

app.get("/teachers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const one = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);

    if (one.rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).json(one.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// teachers - Update a single teacher //

app.put("/teachers/:id", async function (req, res) {
  console.log(req.params.id);
  //   res.send(`Updated book with ID: ${req.params.id}`);
  try {
    const { name, house } = req.body;
    const update = await pool.query(
      `UPDATE teachers 
      SET name = $1, house = $2
      WHERE id = $3
      RETURNING id, name, house`, // gemmer de opdaterede data //
      [name, house, req.params.id],
    );

    if (update.rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).json(update.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

/******************** Students *******************/

// students - get all students //

app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    console.log(result);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
});

// students - get a single student //

app.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const one = await pool.query("SELECT * FROM students WHERE id = $1", [id]);

    if (one.rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).json(one.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// students - Update a single student //

app.put("/students/:id", async function (req, res) {
  console.log(req.params.id);
  //   res.send(`Updated book with ID: ${req.params.id}`);
  try {
    const { first } = req.body;
    const update = await pool.query(
      `UPDATE students 
      SET first = $1
      WHERE id = $2
      RETURNING id, first`,
      [first, req.params.id],
    );

    if (update.rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).json(update.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
