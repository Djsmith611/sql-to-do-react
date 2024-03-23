import React from "react";
import "./Item.css";
import Display from "../Display/Display.jsx";
import Delete from "../Delete/Delete.jsx";

function Item({task, toggleComplete, deleteTask, isEditMode}) {
    const itemClasses = `Item ${task.complete ? 'complete' : 'incomplete'}`

    return(
        <li className={itemClasses}>
          <Display task={task} toggleComplete={toggleComplete} />
          {isEditMode && (
            <Delete task={task} deleteTask={deleteTask} />
          )}
        </li>
    );
}

export default Item;