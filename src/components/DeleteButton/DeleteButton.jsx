import "./DeleteButton.css";
import DeleteTask from "../Requests/DeleteTask.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function DeleteButton({ task, setTaskList }) {
  return (
    <IconButton 
      aria-label="delete" 
      onClick={() => DeleteTask(task.id, setTaskList)}
      sx={{
        '&:hover': {
          color: 'red'
        }
      }}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
