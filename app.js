const express = require("express");

const app = express();

const demoRoute = require("./routes/demo.js");

app.use((req, res, next) => {
  console.log("Logging middleware triggered ...");
  next();
});

app.use(demoRoute);

app.listen(8080, () => console.log("App running on port 8080 ..."));
