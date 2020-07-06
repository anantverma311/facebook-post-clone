const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connecting mongoose to the server

mongoose.connect("mongodb://localhost:27017/Fb_PostDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// creating a database schema

const userSchema = new mongoose.Schema({
  profileImage: String,
  profileName: String,
  postContent: String,
  imageUrl: String,
});

// creating database model

const Post = mongoose.model("post", userSchema);

//port for the server

const port = 5000;

// get and post req for the user profile database

app.get("/user", (req, res) => {
  // reading data from the database

  // eslint-disable-next-line array-callback-return
  Post.find((err, postData) => {
    if (!err) {
      res.json(postData);
    } else {
      console.log(err);
    }
  });
});

app.post("/user", (req, res) => {
  const user = req.body;
  console.log(user);
  res.send(user);
  // creating documents for the database
  const profilePost = new Post({
    profileImage:req.body.profileImage,
    profileName: req.body.profileName,
    postContent: req.body.postContent,
    imageUrl: req.body.imageUrl,
  });
  // for saving it to the database
  profilePost.save();
});

app.listen(port, () => {
  console.log("server started at localhost:" + port);
});
