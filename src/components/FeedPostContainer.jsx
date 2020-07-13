import React, { useState, useEffect } from "react";
import Container from "./Container";
import Axios from "axios";

function FeedPostContainer(props) {
 const [feed, setFeed] = useState([]);

  useEffect(() => {
    Axios.get("/feed")
      .then((response) => {
        console.log(response.data);
        setFeed(response.data.reverse()); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

// can't add reverse here coz it will keep on reversing on click as return will execute on every click 

  return feed.map((data) => {
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
