import React from "react";
import "./Form.css";

function Form({ sendToServer, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer(e);
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <h3>Add an item</h3>
      <input
        type="text"
        value={task}
        placeholder="Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <input type="submit" value="+" />
    </form>
  );
}

export default Form;
