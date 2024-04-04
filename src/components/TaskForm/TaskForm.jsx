import React from "react";
import "./TaskForm.css";
import PostData from "../Requests/PostData.jsx";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TaskForm({ task, setTask, toggleEditMode, isEditMode, setTaskList }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    PostData(e, task, setTask, setTaskList);
  };

  return (
    <form onSubmit={handleSubmit} className="TaskForm">
      <TextField 
        className="TaskForm-input" 
        id="filled-basic" 
        label="Add a Task" 
        variant="filled" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        sx={{ 
          my: 1, 
          ml: 0,
          marginRight: '10%',
          borderRadius: '10px',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0  
        }}
        />
      <Box 
        sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab 
        className="TaskForm-submit" 
        size="small" 
        color="primary" 
        aria-label="add" 
        type="submit"
        >
        <AddIcon />
      </Fab>
      <Fab 
        className="List-edit" 
        size="small" 
        color="secondary" 
        aria-label="edit" 
        onClick={toggleEditMode}>
        <EditIcon />
      </Fab>
      </Box>
    </form>
  );
}

export default TaskForm;
