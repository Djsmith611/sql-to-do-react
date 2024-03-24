import React from "react";
import "./Delete.css";
import DeleteTask from "../Requests/DeleteTask.jsx";


function Delete({ task, setTaskList }) {
  return (
    <button className="Delete" onClick={() => DeleteTask(task.id, setTaskList)}>
      Remove
    </button>
  );
}

export default Delete;
