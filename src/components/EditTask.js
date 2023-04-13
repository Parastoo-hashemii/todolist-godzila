import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { createHistory, updateTask } from "../Api/Handellapi";
import useTask from "../hook/useTask";

export const EditTask = ({ ele }) => {
  const [model, setModel] = useState(false);
  const [newHistory, setNewHistory] = useState({
    title: "",
    typeOfModification: "edited",
    date: "",
    userName: "",
  });
  const [formData, setFormData] = useState({
    title: ele.title,
    explain: ele.explain,
    finished: false,
  });
  const { editTask } = useTask();
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "title")
      setNewHistory({
        ...newHistory,
        title: e.target.value,
        userName: ele.userName,
        date: new Date().toString(),
      });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.explain) {
      alert("edit");
      return;
    }
    const upTask = await updateTask({
      title: formData.title,
      explain: formData.explain,
      id: ele._id,
    });
    console.log(upTask);
    editTask(upTask);
    setModel(false);

    const historyAdded = await createHistory(newHistory);
  };

  return (
    <>
      <Modal isOpen={model} toggle={() => setModel(!model)}>
        <ModalHeader toggle={() => setModel(!model)}>Edit Task</ModalHeader>
        <ModalBody>
          <form onSubmit={handelSubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    value={formData.title}
                    name="title"
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
                    value={formData.explain}
                    name="explain"
                    type="text"
                    className="form-control"
                    placeholder="Enter explain"
                    onChange={handelChange}
                  />
                </div>
              </Col>
            </Row>
            <button
              className=" btn mt-3 "
              style={{ backgroundColor: " #eee659" }}
              // onClick={createTask()}
            >
              Update
            </button>
          </form>
        </ModalBody>
      </Modal>
      <button onClick={() => setModel(true)}>
        <BiEdit className="icon" />
      </button>
    </>
  );
};
