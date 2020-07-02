import React from "react";
import Container from "./Container";
import PostData from "../postDataModel";

function App() {
  return PostData.map((data) => {
    return (
      <div>
        <Container
          URL={data.profileImage}
          profileName={data.userName}
          postContent={data.postContent}
          postImage={data.postImage}
        />
      </div>
    );
  });
}

export default App;
