import { useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { createHistory, createTask } from "../Api/Handellapi";
import useMember from "../hook/useMember";
import useTask from "../hook/useTask";

export const Addtask = () => {
  const [model, setModel] = useState(false);
  const [newHistory, setNewHistory] = useState({
    title: "",
    typeOfModification: "added",
    date: "",
    userName: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    explain: "",
    userName: "",
    finished: false,
  });
  const { memberList } = useMember();
  const { addTask } = useTask();
  const { taskList } = useTask();

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "title")
      setNewHistory({ ...newHistory, title: e.target.value });
    if (e.target.name === "userName")
      setNewHistory({
        ...newHistory,
        userName: e.target.value,
        date: new Date().toString(),
      });
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.explain || !formData.userName) {
      alert("  all filde required");
      return;
    }
    const newtask = await createTask(formData);
    addTask(newtask);
    setModel(false);
    setFormData({
      title: "",
      explain: "",
      userName: "",
    });
    // setNewHistory({
    //   ...newHistory,
    //   date: new Date().toString(),
    // });
    const historyAdded = await createHistory(newHistory);
    console.log(newHistory);
  };

  return (
    <>
      <Modal isOpen={model} toggle={() => setModel(!model)}>
        <ModalHeader toggle={() => setModel(!model)}>new Task</ModalHeader>
        <ModalBody>
          <form onSubmit={handelsubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    name="title"
                    value={formData.title}
                    type="text"
                    className="form-control"
                    placeholder="Enter titel"
                    onChange={handelChange}
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="explain">Explain</label>
                  <input
                    name="explain"
                    value={formData.explain}
                    type="text"
                    className="form-control"
                    placeholder="Enter explain"
                    onChange={handelChange}
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  choose user
                  <select
                    id="select-style"
                    name="userName"
                    value={formData.userName}
                    onChange={handelChange}
                  >
                    <option value=""> select user</option>
                    {memberList?.map((member) => {
                      return (
                        <option key={member._id} value={member.name}>
                          {member.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </Col>
            </Row>
            <button
              className=" btn mt-3 "
              style={{ backgroundColor: " #eee659" }}
              // onClick={createTask()}
            >
              Add
            </button>
          </form>
        </ModalBody>
      </Modal>
      <div className="style-botton">
        <button
          className=" btn mt-3 style-button-task"
          onClick={() => setModel(true)}
        >
          add new task
        </button>

        <button className=" btn mt-3 style-button-task">
          total task: {taskList.length}
        </button>
      </div>
    </>
  );
};
