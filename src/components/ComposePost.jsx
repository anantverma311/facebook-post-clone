import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function ComposePost(props) {
  const [formData, setFormData] = useState({
    profileImage: "",
    profileName: "",
    postContent: "",
    imageUrl: "",
  });
  let history = useHistory(); // programatically helps us to change routes

  return (
    <div className="composeContainer">
      <p className="formHeading">Create your post</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            formData.profileName === "" &&
            formData.postContent === "" &&
            formData.imageUrl === "" &&
            formData.profileImage === ""
          ) {
            alert("kindly fill the form !");
          } else {
            Axios.post("/user", formData)
              .then((response) => {
                console.log(response.data);
              })
              .catch((err) => {
                console.log(err);
              });
            setFormData({
              profileImage: "",
              profileName: "",
              postContent: "",
              imageUrl: "",
            });
            // sending a post req to the server
            window.location.reload(); // onSubmit automatically reload the page
            history.goBack("/"); // this will go-back to the route specified on the click of the button 
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="profileName">Profile Image</label>
          <input
            className="form-control"
            type="text"
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={(event) => {
              setFormData({ ...formData, profileImage: event.target.value });
            }}
          ></input>
          <label htmlFor="profileName">Profile Name</label>
          <input
            className="form-control"
            type="text"
            id="profileName"
            name="profileName"
            value={formData.profileName}
            onChange={(event) => {
              setFormData({ ...formData, profileName: event.target.value });
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="postContent">Your Post </label>
          <textarea
            id="postContent"
            className="form-control"
            rows="3"
            name="postContent"
            value={formData.postContent}
            onChange={(event) => {
              setFormData({ ...formData, postContent: event.target.value });
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="profileName">Add post Image Url</label>
          <input
            className="form-control"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={(event) => {
              setFormData({ ...formData, imageUrl: event.target.value });
            }}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default ComposePost;
