import React from "react";
import "./TaskForm.css";
import PostData from "../Requests/PostData.jsx";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';


function TaskForm({ task, setTask, toggleEditMode, isEditMode, setTaskList }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    PostData(e, task, setTask, setTaskList);
  };

  return (
    <form onSubmit={handleSubmit} className="TaskForm">
      <h3 className="TaskForm-head">Add a task</h3>
      <input
        className="TaskForm-input"
        type="text"
        value={task}
        placeholder="Type here!"
        onChange={(e) => setTask(e.target.value)}
      />
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab className="TaskForm-submit" size="small" color="primary" aria-label="add" type="submit">
        <AddIcon />
      </Fab>
      <Fab className="List-edit" size="small" color="secondary" aria-label="edit" onClick={toggleEditMode}>
        <EditIcon />
      </Fab>
      </Box>
    </form>
  );
}

export default TaskForm;
