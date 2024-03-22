import { useState, useEffect } from "react";

function List({ taskList, toggleComplete, deleteTask }) {
  return (
    <ul>
      {taskList.map((task) => (
        <div key={task.id}>
          <li className={task.complete.toString()}> {task.todo} </li>
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => toggleComplete(task.id)}
          />
          <button onClick={() => deleteTask(task.id)}>Remove</button>
        </div>
      ))}
    </ul>
  );
}

export default List;
