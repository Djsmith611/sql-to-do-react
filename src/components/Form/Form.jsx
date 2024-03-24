import React from "react";
import "./Form.css";

function Form({ sendToServer, task, setTask, toggleEditMode, isEditMode }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer(e);
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
