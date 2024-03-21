const express = require("express");
const todoRouter = express.Router();
const pool = require("../modules/pool.js");

// GET

// POST
todoRouter.post("/", (req, res) => {
  const task = req.body;
  const sqlText = `
  INSERT INTO tasks (todo, complete, toggleText) 
  VALUES ($1, $2, $3);
  `;
  pool
    .query(sqlText, [task.todo, task.complete, task.toggleText])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(`ERROR in ROUTER POST${sqlText}:`, error);
      res.sendStatus(500);
    });
});

// PUT

// DELETE

module.exports = todoRouter;
