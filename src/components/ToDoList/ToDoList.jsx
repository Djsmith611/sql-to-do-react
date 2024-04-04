import React, { useState } from "react";
import "./ToDoList.css";
import Item from "../Item/Item.jsx";

function ToDoList({ taskList, isEditMode, setTaskList}) {

  return (
    <ul className="List">
      
      {taskList.map((task) => (
        <li key={task.id}>
          <Item
            task={task}
            isEditMode={isEditMode}
            setTaskList={setTaskList}
          />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
