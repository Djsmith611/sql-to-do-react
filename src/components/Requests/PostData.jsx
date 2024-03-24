import axios from "axios";
import LoadList from "./LoadList.jsx";


function PostData (e, task, setTask, setTaskList) {
    e.preventDefault();
    const data = { todo: task, complete: false };
    axios
      .post("/api/todo", data)
      .then((response) => {
        LoadList(setTaskList);
        setTask("");
      })
      .catch((error) => {
        console.error("ERROR in POST", error);
        alert("Something went wrong.");
      });
  };

export default PostData;