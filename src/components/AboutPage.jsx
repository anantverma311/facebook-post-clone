import React from "react";

const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      <div className="flexContainer">
        <div className="titleContainer">
          <h1 className="aboutTitle">Anant Verma</h1>
          <p className="subtitle">full-stack web developer</p>
          <p className="aboutContent">
            Hey! my name is Anant Verma and I am a full-stack web developer I
            enjoy turning complex ideas into something meaningful and achieving.
          </p>
          <p className="aboutContent">
            <i className="fas fa-seedling"></i> SeedLnks is my personal project
            that I started while learning web development and this project is a
            facebook feed clone.
          </p>
          <p className="aboutContent">
            I started this project after learning M.E.R.N Stack because I was
            really intrigued with the whole functioning and structural working
            of facebook so I decided to convert some of those functionalities
            into my own personal project.
          </p>
        </div>
        <img
          className="aboutProfileImage"
          src="images/twitter_pGRwdTLF_400x400.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default AboutPage;
