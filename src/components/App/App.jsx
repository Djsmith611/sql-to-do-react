import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

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
