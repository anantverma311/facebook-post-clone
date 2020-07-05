import React, { useState, useEffect } from "react";
import Container from "./Container";
import PostData from "../postDataModel";
import axios from "axios";

function App(props) {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState("");

  function changeHandler(event) {
    console.log(event.target.value);
    setMember({
      [event.target.name]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const user = {
      member,
    };

    axios
      .post("/backend", user, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  useEffect(() => {
    function backend() {
      axios
        .get("/backend")
        .then((result) => {
          const resultData = result;
          return setMembers(resultData.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    backend();
  }, []);

  return PostData.map((data) => {
    return (
      <div key={data.id}>
        <Container
          URL={data.profileImage}
          profileName={data.userName}
          postContent={data.postContent}
          postImage={data.postImage}
        />
        <div className="backendContainer">
          <ul>
            {members.map((member) => {
              return (
                <li key={member.id}>{member.fname + " " + member.lname}</li>
              );
            })}
          </ul>
          <form action="/backend" method="post" onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={changeHandler}
            ></input>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    );
  });
}

export default App;
