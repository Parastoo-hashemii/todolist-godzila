const Member = require("../model/model-member");
module.exports.getAllMember = async (req, res) => {
  const member = await Member.find();
  console.log(member);
  res.json(member);
};

module.exports.CreateMember = async (req, res) => {
  const { name, age, linkedin, github, skill, language } = req.body;
  if (!name || !age || !linkedin || !github || !skill || !language) {
    return res.status(400).json({ masege: "all filed is requied " });
  }
  try {
    const member = await Member.findOne({ name });
    if (member) {
      return res.status(400).json({ masege: " member has in db " });
    }
    const creatrmmber = await Member.create({
      name,
      age,
      linkedin,
      github,
      skill,
      language,
    });
    res.json(creatrmmber);
  } catch (error) {
    return res.status(500).json({ masege: "sever error " });
  }
};

module.exports.updateMember = async (req, res) => {
  const { age, linkedin, github, language } = req.body;
  const { id } = req.params;
  if (!age || !linkedin || !github || !language) {
    return res.status(400).json({ masege: "all filed is requied " });
  }
  try {
    const updatemember = await Member.findByIdAndUpdate(
      id,
      {
        age,
        linkedin,
        github,
        language,
      },
      { new: true }
    );
    res.json(updatemember);
  } catch (error) {
    return res.status(500).json({ masege: "sever error " });
  }
};

module.exports.deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    console.log(req.params);
    const deletmember = await Member.findByIdAndDelete(id, { new: false });
    res.json(deletmember);
  } catch (error) {
    return res.status(500).json({ masege: "sever error " });
  }
};
