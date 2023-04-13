import { createContext, useEffect, useState } from "react";
import { getAlltask } from "../Api/Handellapi";

export const taskContext = createContext();

const TaskProvaider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getAlltask().then((data) => {
      setTaskList(data);
    });
  }, []);
  const deletetask = (id) => {
    const temp = taskList.filter((task) => {
      if (task._id !== id) {
        return task;
      }
    });
    setTaskList(temp);
  };
  const addTask = (task) => {
    setTaskList([task, ...taskList]);
  };
  const editTask = (newtask) => {
    const temp = taskList.map((task) => {
      if (task._id === newtask._id) {
        task.title = newtask.title;
        task.explain = newtask.explain;
      }
      return task;
    });
    setTaskList(temp);
  };
  return (
    <taskContext.Provider value={{ taskList, deletetask, addTask, editTask }}>
      {children}
    </taskContext.Provider>
  );
};
export default TaskProvaider;
