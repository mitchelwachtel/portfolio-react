import React from "react";
import fam2 from "../../assets/images/fam2.jpeg";
import "../../styles/About.css";

const aboutMe = (
  <p>
    I have experience in HTML, CSS, Javascript, Node.js, Express.js,
    Handlebars.js, React.js, Mongo, GraphQL, and MySQL. I'm currently in the Georgia Tech
    Coding Bootcamp with plans to secure a job in front-end, back-end, or full
    stack web development in June of 2022. As I have taught seniors in AP
    Calculus the last several years, I have been inspired. I continue to send
    brilliant students to study and pursue careers in multiple STEM fields, and
    I want to follow them. That is why I’m in the GT coding bootcamp while I
    finish this school year teaching. I want to apply my logic and
    problem-solving abilities to create. I want to leverage my passion for
    education in new avenues, including making myself a life-long learner in the
    constantly changing tech world.
  </p>
);

function About({currentPage}) {
  if (currentPage === "About") {
    return (
      <div className="content-container container">
        <div className="row">
          <div className="col-6">
            <div className="title-header">
              <h1 className="page-title">About Me</h1>
            </div>

            {aboutMe}
          </div>
          <div className="col-6 img-div">
            <img
              className="famPic2"
              src={fam2}
              alt="Professional Mitchel Wachtel"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="content-container container">
        <div className="title-header">
          <h1 className="page-title">About Me</h1>
        </div>
        <div className="row">
          <div className="col">{aboutMe}</div>
        </div>
      </div>
    );
  }
}

export default About;
