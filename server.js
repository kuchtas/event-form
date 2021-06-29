const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");
const database = require("./database/index");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3003;

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

database.connect().then(() => {
  app.listen(port, () => console.log(`Port: ${port}`));
});

app.use("/users", usersRoute);

module.exports = app;
