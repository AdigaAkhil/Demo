const express = require("express");

const router = express.Router();

router.get("/demo", (req, res, next) => {
  console.log("You have hit this route!");
  res.json({ value: "Hello-world" });
  next();
});

module.exports = router;
