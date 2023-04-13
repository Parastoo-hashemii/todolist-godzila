import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { updateMember } from "../Api/Handellapi";
import useMember from "../hook/useMember";

export const EditMember = ({ item }) => {
  console.log(item);
  const [model, setModel] = useState(false);
  const { editMember } = useMember();
  const [formData, setFormData] = useState({
    age: item.age,
    linkedin: item.linkedin,
    github: item.github,
    // skill: item.skill,
    language: item.language,
  });
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handeleditskill = () => {
  //   if (formData.skill) {
  //     setSkils([formData.skill, ...skills]);
  //     setFormData({ ...formData, skill: "" });
  //   }
  // };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.age ||
      !formData.linkedin ||
      !formData.github ||
      // !formData.skill ||
      !formData.language
    ) {
      alert("edit");
      return;
    }
    const upMember = await updateMember({
      age: formData.age,
      linkedin: formData.linkedin,
      github: formData.github,
      // skill: formData.skill,
      language: formData.language,

      id: item._id,
    });
    console.log(upMember);
    editMember(upMember);
    setModel(false);
  };

  return (
    <>
      <Modal size="lg" isOpen={model} toggle={() => setModel(!model)}>
        <ModalHeader toggle={() => setModel(!model)}>Edit user</ModalHeader>
        <ModalBody>
          <form onSubmit={handelSubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="age">Age</label>
                  <input
                    name="age"
                    value={formData.age}
                    type="number"
                    className="form-control"
                    placeholder="Enter age"
                    onChange={handelChange}
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="github">github</label>
                  <input
                    name="github"
                    value={formData.github}
                    type="url"
                    className="form-control"
                    placeholder="Enter github address"
                    onChange={handelChange}
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="linkdin">linkden</label>
                  <input
                    name="linkedin"
                    value={formData.linkedin}
                    type="url"
                    className="form-control"
                    placeholder="Enter linkden address"
                    onChange={handelChange}
                  />
                </div>
              </Col>
              {/* <Col lg={12}>
                <div>
                  <label htmlFor="skills">skills</label>
                  <input
                    name="skill"
                    value={formData.skill}
                    type="text"
                    className="form-control"
                    placeholder="Enter skilles"
                    onChange={handelChange}
                  />
                  <button>add skills</button>
                </div>
              </Col> */}
              <Col lg={12}>
                <div>
                  <label htmlFor="language">language</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    className="form-control"
                    placeholder="Enter name"
                    onChange={handelChange}
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="uploade Photo">uploade photo</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="choose photo"
                  />
                </div>
              </Col>
            </Row>
            <button
              className=" btn mt-3 "
              style={{ backgroundColor: " #eee659" }}
            >
              submit
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
