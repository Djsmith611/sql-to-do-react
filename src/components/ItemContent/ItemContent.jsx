import React from "react";
import "./ItemContent.css";
import ToggleComplete from "../Requests/ToggleComplete.jsx";
import Checkbox from '@mui/material/Checkbox';

function ItemContent({ task, setTaskList}) {
  const label = { inputProps: { 'aria-label': task.todo } };
  return (
    <div className="ItemContent">
      <Checkbox
        className="ItemContent-input"
        {...label}
        checked={task.complete}
        onChange={() => ToggleComplete(task.id, setTaskList)} 
        />
      <span className="ItemContent-task"> {task.todo} </span>
    </div>
  );
}
export default ItemContent;
