import React, { useState } from "react";
import "./List.css";
import Item from "../Item/Item.jsx";

function List({ taskList, toggleComplete, deleteTask }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <ul className="List">
      <button className="List-edit" onClick={toggleEditMode}>
        {isEditMode ? "Cancel Edit" : "Edit"}
      </button>
      {taskList.map((task) => (
        <div key={task.id}>
          <Item
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            isEditMode={isEditMode}
          />
        </div>
      ))}
    </ul>
  );
}

export default List;
