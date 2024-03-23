import React from "react";
import "./Display.css";

function Display({ task, toggleComplete }) {
  return (
    <div className="Display">
      <input
        className="Display-input"
        type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.id)}
      />
      <span className="Display-task"> {task.todo} </span>
    </div>
  );
}
export default Display;
