import axios from "axios";
import LoadList from "./LoadList.jsx";

function ToggleComplete(id, setTaskList){
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

export default ToggleComplete;