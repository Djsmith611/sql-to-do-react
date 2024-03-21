import { useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const sendToServer = (e) => {
    e.preventDefault();
    const data ={task:task};
    axios.post('/api/todo', data).then((response) => {
      // todo GET
    }).catch((error) => {
      console.error('ERROR in POST',error);
      alert('Something went wrong.');
    });
  }

  return (
    <div className="app">
      <header>
        <h1>TO DO APP</h1>
      </header>
      <main>
        <form>
          <h3>Add a task</h3>
          <input
            type="text"
            value={task}
            placeholder="Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
        <h2>Tasks</h2>
        <ul>
          <li>{task}</li>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
