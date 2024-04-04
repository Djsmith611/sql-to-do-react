import React from "react";
import "./ItemContent.css";
import ToggleComplete from "../Requests/ToggleComplete.jsx";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ItemContent({ task, setTaskList}) {
  const label = { inputProps: { 'aria-label': task.todo } };
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Checkbox
        className="ItemContent-input"
        {...label}
        checked={task.complete}
        onChange={() => ToggleComplete(task.id, setTaskList)}
        sx={{ 
          marginRight: '10px',
          marginLeft: '10px',
          marginTop: '10px',
          marginBottom: '10px', 
          '& .MuiSvgIcon-root': {
            width: 30,
            height: 30
          }
        }}
      />
      <Divider 
        orientation="vertical" 
        variant="middle" 
        sx={{ 
          backgroundColor: 'black'
        }}  
        flexItem />
      <Typography 
        variant="h5" 
        className="ItemContent-task" 
        sx={{ 
          marginLeft: '10px'
        }} 
        gutterBottom> 
          {task.todo} 
      </Typography>
    </Box>
  );
}
export default ItemContent;
