import axios from "axios";
import LoadList from "./LoadList.jsx";

function DeleteTask(id, setTaskList) {
    axios
      .delete(`/api/todo/${id}`)
      .then((response) => {
        LoadList(setTaskList);
      })
      .catch((error) => {
        console.error("ERROR in DELETE", error);
        alert("Something went wrong.");
      });
  };

export default DeleteTask