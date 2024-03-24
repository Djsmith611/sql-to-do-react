import React from "react";
import "./Item.css";
import Display from "../Display/Display.jsx";
import Delete from "../Delete/Delete.jsx";

function Item({task, isEditMode, setTaskList}) {
    const itemClasses = `Item ${task.complete ? 'complete' : 'incomplete'}`

    return(
        <div className={itemClasses}>
          <Display task={task} setTaskList={setTaskList} />
          {isEditMode && (
            <Delete task={task} setTaskList={setTaskList} />
          )}
        </div>
    );
}

export default Item;