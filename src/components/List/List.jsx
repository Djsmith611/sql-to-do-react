import React, { useState } from "react";
import "./List.css";
import Item from "../Item/Item.jsx";

function List({ taskList, toggleComplete, deleteTask, isEditMode, setTaskList}) {

  return (
    <ul className="List">
      
      {taskList.map((task) => (
        <li key={task.id}>
          <Item
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            isEditMode={isEditMode}
            setTaskList={setTaskList}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
