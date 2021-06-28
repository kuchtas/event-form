const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRoute = require("./routes/users");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3003;

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

mongoose.connect(
  "mongodb://localhost:27017/event_users",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Database connected")
);

app.listen(port, () => console.log(`Port: ${port}`));

app.use("/users", usersRoute);
