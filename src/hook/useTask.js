import { taskContext } from "../context/taskContext";
import { useContext } from "react";

const useTask = () => {
  const task = useContext(taskContext);
  return task;
};
export default useTask;
