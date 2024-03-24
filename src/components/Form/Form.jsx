import React from "react";
import "./Form.css";
import PostData from "../Requests/PostData.jsx";


function Form({ task, setTask, toggleEditMode, isEditMode, setTaskList }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    PostData(e, task, setTask, setTaskList);
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <h3 className="Form-head">Add a task</h3>
      <input
        className="Form-input"
        type="text"
        value={task}
        placeholder="Type here!"
        onChange={(e) => setTask(e.target.value)}
      />
      <input className="Form-submit" type="submit" value="Add" />
      <button className="List-edit" type="button" onClick={toggleEditMode}>
        {isEditMode ? "Cancel" : "Edit"}
      </button>
    </form>
  );
}

export default Form;
