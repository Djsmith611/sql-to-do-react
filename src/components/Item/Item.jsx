import React from "react";
import "./Item.css";
import ItemContent from "../ItemContent/ItemContent.jsx";
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import Box from '@mui/material/Box';

function Item({task, isEditMode, setTaskList}) {
    const itemClasses = `Item ${task.complete ? 'complete' : 'incomplete'}`

    return(
        <Box className={itemClasses}>
          <ItemContent task={task} setTaskList={setTaskList} />
          {isEditMode && (
            <DeleteButton task={task} setTaskList={setTaskList} />
          )}
        </Box>
    );
}

export default Item;