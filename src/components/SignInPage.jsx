/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState("");
  let history = useHistory();
  return (
    <div className="text-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post("/signin", signIn)
            .then(async(response) => {
              console.log(response.data);
              const SignInData = await response.data;
              if (SignInData === "OK") {
                history.push("/");
              }
              setValidate(SignInData);
              setSignIn({ email: "", password: "" });
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        className="form-signin"
      >
        <i className="fas fa-seedling signInAvatar"></i>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <p style={{ color: "grey", fontSize: "12px" }}>{validate}</p>
        <label htmlFor="inputPassword" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email Address"
          value={signIn.email}
          onChange={(e) => {
            setSignIn({ ...signIn, email: e.target.value });
          }}
          required
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
          value={signIn.password}
          onChange={(e) => {
            setSignIn({ ...signIn, password: e.target.value });
          }}
        />
        <button className="btn btn-lg btn-dark btn-block" type="submit">
          Sign In
        </button>
        <p className="signUpContent">new to seedlnks?</p>
        <button
          onClick={() => {
            history.push("/register");
          }}
          className="btn  btn-dark"
        >
          Sign Up
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 🖤 Anant Verma</p>
      </form>
    </div>
  );
};

export default SignInPage;
