import React from "react";
import "./Item.css";
import ItemContent from "../ItemContent/ItemContent.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";

function Item({task, isEditMode, setTaskList}) {
    const itemClasses = `Item ${task.complete ? 'complete' : 'incomplete'}`

    return(
        <div className={itemClasses}>
          <ItemContent task={task} setTaskList={setTaskList} />
          {isEditMode && (
            <DeleteButton task={task} setTaskList={setTaskList} />
          )}
        </div>
    );
}

export default Item;