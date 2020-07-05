import React, { useState, useEffect } from "react";
import Container from "./Container";
import PostData from "../postDataModel";
import axios from "axios";

function App(props) {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState({ name: "" });

  function changeHandler(event) {
    const parada = setMember({ [event.target.name]: event.target.value });
    console.log(parada);
  }

  function submitHandler(event) {
    event.preventDefault();

    const user = {
      name: member,
    };

    axios
      .post("/backend", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
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
          <form onSubmit={submitHandler}>
            <input type="text" name="name" onChange={changeHandler}></input>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    );
  });
}

export default App;
