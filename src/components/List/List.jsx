import React, { useState } from "react";
import "./List.css";
import Item from "../Item/Item.jsx";

function List({ taskList, toggleComplete, deleteTask, isEditMode}) {

  return (
    <ul className="List">
      
      {taskList.map((task) => (
        <li key={task.id}>
          <Item
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            isEditMode={isEditMode}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
