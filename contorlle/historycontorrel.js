const History = require("../model/model-history");

module.exports.getAllHistory = async (req, res) => {
  const history = await History.find().sort("-createdAt");
  res.json(history);
};

module.exports.createHistory = async (req, res) => {
  //   const { title, explain, userName, finished } = req.body;
  const history = new History(req.body);

  try {
    const historyResponse = await History.create(history);
    res.json(historyResponse);
  } catch (err) {
    return res.status(500).json({ message: "sever error " });
  }
};
