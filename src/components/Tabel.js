import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { createHistory, deleteToDo, updateTask } from "../Api/Handellapi";
import useTask from "../hook/useTask";
import { EditTask } from "./EditTask";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";

export const Tabel = ({ column }) => {
  const { taskList } = useTask();
  console.log(taskList.length);
  return (
    <>
      <table className="tabel">
        <thead>
          <tr>
            {column.map((ele, index) => (
              <TabeleHeader key={index} ele={ele} />
            ))}
          </tr>
        </thead>
        <tbody>
          {taskList?.map((ele, index) => (
            <TabeleRow ele={ele} key={index} />
          ))}
          {/* <tr>
            <td colSpan="5">
              {/* {ToDoTask.data ? (
                  ToDoTask.data.map(
                    (item) => (
               
                    )
                    // console.log(toDo);
                  )
                ) : (
                  <h1>looodding</h1>
                )} */}
          {/* tsakkkk <button>delete</button> <button>edit</button>
              <button>completed</button>
            </td>
            <td>user 1</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

const TabeleHeader = ({ ele }) => <th>{ele.heading}</th>;

const TabeleRow = (props) => {
  const { deletetask } = useTask();
  const [ele, setEle] = useState(props.ele);

  const checkboxEdit = async (e) => {
    const upTask = await updateTask({
      title: ele.title,
      explain: ele.explain,
      finished: e.target.checked,
      id: ele._id,
    });
    setEle(upTask);
  };

  const ondelete = async (id) => {
    const newHistory = {
      title: ele.title,
      typeOfModification: "deleted",
      date: new Date().toString(),
      userName: ele.userName,
    };
    await createHistory(newHistory);
    const data = await deleteToDo(ele._id);

    deletetask(ele._id);
  };
  return (
    <tr
      style={
        ele.finished ? { backgroundColor: "green" } : { backgroundColor: "red" }
      }
    >
      <td>{ele.title}</td>
      <td>{ele.explain}</td>
      <td>{ele.userName}</td>
      <td>
        <EditTask ele={ele} />

        <button onClick={ondelete}>
          <AiFillDelete className="icon" />
        </button>
        <input
          type="checkbox"
          checked={ele.finished}
          onChange={(e) => checkboxEdit(e)}
        />
        {/* <BsCheckLg className="icon" /> */}
      </td>
    </tr>
  );
};
