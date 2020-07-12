const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload"); // package for uploading files
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

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

//User account schema

const UserProfileSchema = new mongoose.Schema({
  firstName: String,
  LastName: String,
  email: String,
  password: String,
});

// user account model

const User = mongoose.model("user", UserProfileSchema);

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
    profileImage: req.body.profileImage,
    profileName: req.body.profileName,
    postContent: req.body.postContent,
    imageUrl: req.body.imageUrl,
  });
  // for saving it to the database
  profilePost.save();
});

// uploading files to the backend using express-fileUpload

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "no file uploaded" });
  }
  const file = req.files.file;
  console.log(file);
  file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.get("/upload/user", (req, res) => {
  User.find((err, userData) => {
    if (err) {
      console.log(err);
    } else {
      res.json(userData);
    }
  });
});

app.post("/upload/user", (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.send(userData);
  //creating user profile document
  const userProfile = new User({
    firstName: userData.firstname,
    lastName: userData.lastname,
    email: userData.email,
    password: userData.password,
  });
  userProfile.save();
});

app.listen(port, () => {
  console.log("server started at localhost:" + port);
});
