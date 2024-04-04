import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "../Form/Form.jsx";
import List from "../List/List.jsx";
import Footer from "../Footer/Footer.jsx";
import LoadList from "../Requests/LoadList.jsx";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

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
          <img className="App-logo-svg" src="/images/notepad.svg" width="55px"/>
        </div>
        <h1 className="App-title">TO DO LIST</h1>
      </header>
      <main>
        <Form 
          task={task} 
          setTask={setTask} 
          toggleEditMode={toggleEditMode} 
          isEditMode={isEditMode}
          setTaskList={setTaskList}/>
        <List
          taskList={taskList}
          isEditMode={isEditMode}
          setTaskList={setTaskList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
