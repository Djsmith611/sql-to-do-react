import React from "react";
import "./Delete.css";

function Delete({task, deleteTask}) {
    return(
        <button className="Delete" onClick={() => deleteTask(task.id)}>Remove</button>
    );
}

export default Delete;