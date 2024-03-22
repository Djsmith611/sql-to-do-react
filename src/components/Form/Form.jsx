import React, { useState, useEffect } from "react";

import axios from "axios";

function Form({ sendToServer, task, setTask }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer(e);
  };

  return (
    <form onSubmit={handleSubmit}>
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
