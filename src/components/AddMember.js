import { useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { createMember } from "../Api/Handellapi";
import useMember from "../hook/useMember";

export const Addmember = () => {
  const [model, setModel] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    github: "",
    linkedin: "",
    skill: "",
    language: "",
  });
  const [skills, setSkils] = useState([]);

  const { addMember } = useMember();

  const handeladdskill = () => {
    if (formData.skill) {
      setSkils([formData.skill, ...skills]);
      setFormData({ ...formData, skill: "" });
    }
  };

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.age ||
      !formData.github ||
      !formData.linkedin ||
      !skills.length ||
      !formData.language
    ) {
      alert("  all filde required");
      return;
    }
    const data = {
      name: formData.name,
      age: formData.age,
      github: formData.github,
      linkedin: formData.linkedin,
      skill: skills,
      language: formData.language,
    };
    const newMember = await createMember(data);
    addMember(newMember);
    setModel(false);
    setFormData({
      name: "",
      age: "",
      github: "",
      linkedin: "",
      skill: "",
      language: "",
    });
  };

  return (
    <>
      <Modal size="lg" isOpen={model} toggle={() => setModel(!model)}>
        <ModalHeader toggle={() => setModel(!model)}>new user</ModalHeader>
        <ModalBody>
          <form onSubmit={handelsubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="form-control"
                    placeholder="Enter name"
                    onChange={handelChange}
                  />
                </div>
              </Col>
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
                  <label htmlFor="linkdin">linkedin</label>
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
              <Col lg={12}>
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
                  <button type="button" onClick={handeladdskill}>
                    add skills
                  </button>
                  {skills.map((skill, index) => {
                    return <p key={index}> {skill}</p>;
                  })}
                </div>
              </Col>
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

                {/* <div>
                  <p> choose your language</p>
                  <input
                    type="radio"
                    name="lan"
                    id="English"
                    value="English"
                    checked
                  />
                  <label for="English">English</label>

                  <input
                    type="radio"
                    name="lan"
                    id="Germeny"
                    value="Germeny"
                    checked
                  />
                  <label for="Germeny">Germeny</label>

                  <input
                    type="radio"
                    name="lan"
                    id="Arabic"
                    value="Arabic"
                    checked
                  />
                  <label for="Arabic">Arabic</label>
                </div> */}
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
              add Member
            </button>
          </form>
        </ModalBody>
      </Modal>
      <button
        className=" btn mt-3 style-button-member"
        onClick={() => setModel(true)}
      >
        add new Member
      </button>
    </>
  );
};
