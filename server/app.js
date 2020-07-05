const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 5000;

app.get("/backend", (req, res) => {
  const members = [
    { id: 1, fname: "geetansh", lname: "monga" },
    { id: 2, fname: "Agam", lname: "makhija" },
    { id: 3, fname: "hemu", lname: "sharma" },
    { id: 4, fname: "kartik", lname: "sharma" },
  ];
  res.send(members);
});

app.post("/backend", (req, res) => {
  console.log(req.body);
  const data = req.body.name;
  res.send(data);
});

app.listen(port, () => {
  console.log("server started at localhost:" + port);
});
