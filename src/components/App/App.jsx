import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "../Form/Form.jsx";
import List from "../List/List.jsx";
import Footer from "../Footer/Footer.jsx";
import LoadList from "../Requests/LoadList.jsx";
import PostData from "../Requests/PostData.jsx";
import DeleteTask from "../Requests/DeleteTask.jsx";
import ToggleComplete from "../Requests/ToggleComplete.jsx";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);


  const toggleComplete = (id) => {
    axios
      .put(`/api/todo/${id}`)
      .then((response) => {
        LoadList(setTaskList);
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
    LoadList(setTaskList);
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
        <Form 
          sendToServer={PostData}
          task={task} 
          setTask={setTask} 
          toggleEditMode={toggleEditMode} 
          isEditMode={isEditMode}
          setTaskList={setTaskList}/>
        <List
          taskList={taskList}
          toggleComplete={toggleComplete}
          deleteTask={DeleteTask}
          isEditMode={isEditMode}
          setTaskList={setTaskList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
