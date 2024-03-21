const express = require("express");
const todoRouter = express.Router();
const pool = require("../modules/pool.js");

// GET
todoRouter.get("/", (req, res) => {
  const sqlText = `
    SELECT * FROM tasks;
    `;
  pool
    .query(sqlText)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in ROUTER GET ${sqlText}:`, error);
      res.sendStatus(500);
    });
});

// POST
todoRouter.post("/", (req, res) => {
  const task = req.body;
  const sqlText = `
  INSERT INTO tasks (todo, complete) 
  VALUES ($1, $2);
  `;
  pool
    .query(sqlText, [task.todo, task.complete])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(`ERROR in ROUTER POST${sqlText}:`, error);
      res.sendStatus(500);
    });
});

// PUT
todoRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const sqlText = `
    UPDATE tasks
    SET complete = NOT complete
    WHERE id = $1;
    `;
  pool
    .query(sqlText, [taskId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(`ERROR in ROUTER PUT${sqlText}:`, error);
      res.sendStatus(500);
    });
});

// DELETE
todoRouter.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const sqlText = `
    DELETE FROM tasks 
    WHERE id = $1;
    `;

    pool.query(sqlText, [taskId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(`ERROR in ROUTER DELETE${sqlText}:`, error);
            res.sendStatus(500);
        });
})

module.exports = todoRouter;