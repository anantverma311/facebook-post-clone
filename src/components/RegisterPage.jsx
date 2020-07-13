/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  let history = useHistory();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [imageUpload, setImageUpload] = useState({});
  const [afterRegister, setAfterRegister] = useState("");

  return (
    <div>
      <div className="text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("file", imageUpload);

            axios
              .post("/imageupload", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((response) => {
                console.log(response.data);
                setImageUpload({
                  fileName: response.data.filename,
                  filePath: response.data.filePath,
                });
              })
              .catch((err) => {
                if (err.response.status === 500) {
                  console.log("there is a problem with the server");
                } else {
                  console.log(err.response.data.msg);
                }
              });
            axios
              .post("/register", userData)
              .then(async (response) => {
                console.log(response.data);
                const backData = await response.data;
                if (backData === "OK") {
                   history.push("/");
                }
                setAfterRegister(backData);
              })
              .catch((error) => {
                console.log(error);
              });
            setUserData({
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            });
          }}
          className="form-signin"
        >
          <div className="imageContainer">
            <img
              onClick={() => {
                document.getElementById("fileUpload").click();
              }}
              className="addImage"
              src="images/add-image.svg"
              alt="addProfile"
            ></img>
          </div>

          <input
            style={{ display: "none" }}
            type="file"
            name="profilePhoto"
            id="fileUpload"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          ></input>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            FirstName
          </label>
          <input
            type="text"
            id="fName"
            className="form-control"
            placeholder="FirstName"
            required
            autoFocus
            value={userData.firstname}
            onChange={(e) => {
              setUserData({ ...userData, firstname: e.target.value });
            }}
          ></input>
          <label htmlFor="inputPassword" className="sr-only">
            LastName
          </label>
          <input
            type="text"
            id="lName"
            className="form-control"
            placeholder="LastName"
            value={userData.lastname}
            onChange={(e) => {
              setUserData({ ...userData, lastname: e.target.value });
            }}
            required
          ></input>
          <label htmlFor="inputPassword" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            required
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          ></input>
          <label htmlFor="lname" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <p style={{ color: "red", fontSize: "12px" }}>{afterRegister}</p>
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Create An Account
          </button>
          <p className="signUpContent">already have an account?</p>
          <button
            onClick={() => {
              history.push("/signin");
            }}
            className="btn  btn-dark"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 🖤 Anant Verma</p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
