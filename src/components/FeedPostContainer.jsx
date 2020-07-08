import React, { useState, useEffect } from "react";
import Container from "./Container";
import Axios from "axios";

function FeedPostContainer(props) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    Axios.get("/user")
      .then((response) => {
        console.log(response.data);
        setFeed(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [...feed].reverse().map((data) => {
    return (
      <div key={data._id}>
        <Container
          URL={data.profileImage}
          profileName={data.profileName}
          postContent={data.postContent}
          postImage={data.imageUrl}
        />
      </div>
    );
  });
}

export default FeedPostContainer;
