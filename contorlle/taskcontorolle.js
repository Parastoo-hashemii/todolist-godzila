const Task = require("../model/model-task");

module.exports.getAllTask = async (req, res) => {
  const task = await Task.find().sort("-createdAt");
  res.json(task);
};

module.exports.createTask = async (req, res) => {
  const { title, explain, userName, finished } = req.body;
  if (!title || !explain || !userName) {
    return res.status(400).json({ masege: "all filed is requied " });
  }
  try {
    const task = await Task.create({ title, explain, userName, finished });
    res.json(task);
  } catch (err) {
    return res.status(500).json({ masege: "sever error " });
  }
};

module.exports.updatedTask = async (req, res) => {
  const { title, explain, finished } = req.body;
  const { id } = req.params;
  if (!title || !explain) {
    return res.status(400).json({ masege: "all filed is requied " });
  }
  try {
    const updatrTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        explain,
        finished,
      },
      { new: true }
    );
    res.json(updatrTask);
  } catch (error) {
    return res.status(500).json({ masege: "sever error " });
  }
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(req.params);
    const deleteTask = await Task.findByIdAndDelete(id, { new: false });
    res.json(deleteTask);
  } catch (error) {
    return res.status(500).json({ masege: "sever error " });
  }
};
