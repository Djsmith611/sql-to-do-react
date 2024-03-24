import axios from "axios";

function LoadList (setTaskList){
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

export default LoadList;