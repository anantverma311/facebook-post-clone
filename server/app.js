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
  lastName: String,
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

app.get("/feed", (req, res) => {
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

app.post("/feed", (req, res) => {
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

app.post("/imageupload", (req, res) => {
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

app.get("/register", (req, res) => {
  User.find((err, userData) => {
    if (err) {
      return console.log(err);
    } else {
      return res.json(userData);
    }
  });
});

app.post("/register", async (req, res) => {
  const userData = req.body;
  // check if the email already exists
  const emailExist = await User.findOne({ email: userData.email });
  if (emailExist) {
    return res.send("email already exist! please sign in").status(400);
  } else {
    const userProfile = new User({
      firstName: userData.firstname,
      lastName: userData.lastname,
      email: userData.email,
      password: userData.password,
    });
    userProfile.save();
    res.send(200);
  }
  //creating user profile document
});

app.post("/signin", async (req, res) => {
  const userSignInData = req.body;
  console.log(userSignInData);
  const emailExist = await User.findOne({ email: userSignInData.email });
  if (emailExist) {
    const passCheck = await User.findOne({ password: userSignInData.password });
    if (passCheck) {
      res.sendStatus(200);
    } else {
      res.send("Enter a valid email/password");
    }
  } else {
    res.send("Enter a valid email/password").status(400);
  }
});

app.listen(port, () => {
  console.log("server started at localhost:" + port);
});
