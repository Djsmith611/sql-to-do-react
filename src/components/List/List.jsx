import React from "react";
import "./List.css";

function List({ taskList, toggleComplete, deleteTask }) {
  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id} className={task.complete.toString()}>
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => toggleComplete(task.id)}
          />
          <span> {task.todo} </span>
          <button onClick={() => deleteTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
