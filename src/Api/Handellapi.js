import axios from "axios";

const url = "https://todo-list-godzila-server.onrender.com";
export const getAlltask = async () => {
  const response = await axios.get(`${url}/task`);
  return response.data;
};

export const createTask = async ({ title, explain, userName, finished }) => {
  const response = await axios.post(
    `${url}/task`,
    {
      title,
      explain,
      userName,
      finished,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const updateTask = async ({ id, title, explain, finished }) => {
  const response = await axios.patch(
    `${url}/task/${id}`,
    { title, explain, finished },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const deleteToDo = async (id) => {
  const respons = axios.delete(`${url}/task/${id}`);
  return respons.data;
};

export const getAllMember = async () => {
  const response = await axios.get(`${url}/member`);
  return response.data;
};

export const createMember = async ({
  name,
  age,
  linkedin,
  skill,
  github,
  language,
}) => {
  const response = await axios.post(
    `${url}/member`,
    { name, age, linkedin, skill, github, language },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const updateMember = async ({ id, age, linkedin, github, language }) => {
  const response = await axios.patch(
    `${url}/member/${id}`,
    { id, age, linkedin, github, language },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const deletedMember = async (id) => {
  const respons = axios.delete(`${url}/member/${id}`);
  return respons.data;
};

export const getAllHistory = async () => {
  const response = await axios.get(`${url}/history`);
  return response.data;
};

export const createHistory = async (history) => {
  const response = await axios.post(`${url}/history`, history, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
