const express = require("express");

const app = express();

const port = process.env.PORT || 3003;

app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
