import { useState, useEffect } from "react";
import axios from "axios";

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
    const data = { todo: task };
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
        <form onSubmit={sendToServer}>
          <h3>Add an item</h3>
          <input
            type="text"
            value={task}
            placeholder="Task"
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="submit" value="+" />
        </form>
        <h2>List</h2>
        <ul>
          {taskList.map((task) => (
            <div key={task.id}>
              <li> {task.todo} {task.complete} </li>
              <button onClick={() => deleteTask(task.id)}>Remove</button>
              <button onClick={() => toggleComplete(task.id)}>{task.toggleText}</button>
            </div>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
