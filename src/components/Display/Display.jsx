import React from "react";
import "./Display.css";
import ToggleComplete from "../Requests/ToggleComplete.jsx";

function Display({ task, setTaskList}) {
  return (
    <div className="Display">
      <input
        className="Display-input"
        type="checkbox"
        checked={task.complete}
        onChange={() => ToggleComplete(task.id, setTaskList)}
      />
      <span className="Display-task"> {task.todo} </span>
    </div>
  );
}
export default Display;
