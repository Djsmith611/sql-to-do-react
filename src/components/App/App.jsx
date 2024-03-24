import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "../Form/Form.jsx";
import List from "../List/List.jsx";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const loadTasks = () => {
    axios
      .get("/api/todo")
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error("ERROR in GET", error);
        alert("Something went wrong.");
      });
  };

  const sendToServer = (e) => {
    e.preventDefault();
    const data = { todo: task, complete: false };
    axios
      .post("/api/todo", data)
      .then((response) => {
        loadTasks();
        setTask("");
      })
      .catch((error) => {
        console.error("ERROR in POST", error);
        alert("Something went wrong.");
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`/api/todo/${id}`)
      .then((response) => {
        loadTasks();
      })
      .catch((error) => {
        console.error("ERROR in DELETE", error);
        alert("Something went wrong.");
      });
  };

  const toggleComplete = (id) => {
    axios
      .put(`/api/todo/${id}`)
      .then((response) => {
        loadTasks();
      })
      .catch((error) => {
        console.error("ERROR in PUT", error);
        alert("Something went wrong.");
      });
  };
  

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img className="App-logo-svg" src="/public/images/notepad.svg" width="55px"/>
        </div>
        <h1 className="App-title">TO DO LIST</h1>
      </header>
      <main>
        <Form sendToServer={sendToServer} task={task} setTask={setTask} toggleEditMode={toggleEditMode} isEditMode={isEditMode}/>
        <List
          taskList={taskList}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          isEditMode={isEditMode}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
