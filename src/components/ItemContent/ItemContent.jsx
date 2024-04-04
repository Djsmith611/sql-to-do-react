import React from "react";
import "./ItemContent.css";
import ToggleComplete from "../Requests/ToggleComplete.jsx";

function ItemContent({ task, setTaskList}) {
  return (
    <div className="ItemContent">
      <input
        className="ItemContent-input"
        type="checkbox"
        checked={task.complete}
        onChange={() => ToggleComplete(task.id, setTaskList)}
      />
      <span className="ItemContent-task"> {task.todo} </span>
    </div>
  );
}
export default ItemContent;
