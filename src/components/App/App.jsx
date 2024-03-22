import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Form from '../Form/Form.jsx';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

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

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>TO DO</h1>
      </header>
      <main>
        <Form sendToServer={sendToServer} task={task} setTask={setTask} />
        <h2>List</h2>
        <ul>
          {taskList.map((task) => (
            <div key={task.id}>
              <li className={task.complete.toString()}> {task.todo} </li>
                <input 
                type="checkbox"
                checked={task.complete}
                onChange={() => toggleComplete(task.id)} />
              
              <button onClick={() => deleteTask(task.id)}>Remove</button>
            </div>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
