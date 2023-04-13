const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const MemberRoute = require("./routes/MemberRoute");
const TaskRoute = require("./routes/TaskRoute");
const HistoryRoute = require("./routes/HistoryRoute");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/member", MemberRoute);
app.use("/task", TaskRoute);
app.use("/history", HistoryRoute);
// app.use("/", route);
// app.use("/member", route);

const PORT = process.env.PORT || 5000;

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL);
//     app.listen(PORT, () => {
//       console.log("The server running on port:", PORT);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`conected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });
// app.use(route);

app.listen(PORT, () => {
  console.log(`listing on : ${PORT}`);
});
