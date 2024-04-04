import React from "react";
import "./TaskForm.css";
import PostData from "../Requests/PostData.jsx";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


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
      <input className="TaskForm-submit" type="submit" value="Add" />
      <Fab className="List-edit" color="secondary" aria-label="edit" onClick={toggleEditMode}>
        <EditIcon />
      </Fab>
    </form>
  );
}

export default TaskForm;
