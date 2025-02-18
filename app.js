const express = require("express");

const app = express();

const demoRoute = require("./routes/demo.js");

app.use(demoRoute);

app.listen(8080, () => console.log("App running on port 8080 ..."));
