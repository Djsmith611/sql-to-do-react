import React from "react";
import "./TaskForm.css";
import PostData from "../Requests/PostData.jsx";


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
      <button className="List-edit" type="button" onClick={toggleEditMode}>
        {isEditMode ? "Cancel" : "Edit"}
      </button>
    </form>
  );
}

export default TaskForm;
