const express = require("express");
const mongo = require("mongo");

const app = express();
const port = 3000;
const mongoDbUrl = "mongodb://localhost:27017/docker-node-mongo-example";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/tasks", (req, res) => {
  var task = new Task(req.body);
  task
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
