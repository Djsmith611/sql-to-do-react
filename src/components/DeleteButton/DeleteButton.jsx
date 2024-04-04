import React from "react";
import "./DeleteButton.css";
import DeleteTask from "../Requests/DeleteTask.jsx";


function DeleteButton({ task, setTaskList }) {
  return (
    <button className="Delete" onClick={() => DeleteTask(task.id, setTaskList)}>
      Remove
    </button>
  );
}

export default DeleteButton;
