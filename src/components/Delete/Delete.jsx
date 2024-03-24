import React from "react";
import "./Delete.css";

function Delete({ task, deleteTask, setTaskList }) {
  return (
    <button className="Delete" onClick={() => deleteTask(task.id, setTaskList)}>
      Remove
    </button>
  );
}

export default Delete;
