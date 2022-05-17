import React from "react";
import pro1 from "../../assets/images/pro1.jpg";
import "../../styles/Resume.css";
import resume from "../../assets/files/MitchelWachtelEx.pdf";

export default function Resume() {
  return (
    <div className="content-container container">
      <div className="row">
        <div className="col-6">
          <div className="title-header">
            <h1 className="page-title">Resume</h1>
          </div>

          <a href={resume} download="WachtelResume.pdf">
            <button className="dl-btn">Download Resume</button>
          </a>

          <div className="section">
            <h2 className="section-title">Overview</h2>
            <ul>
              <li>Successful math teacher turned developer</li>
              <li>
                Seeking job as a front-end, back-end, or full stack web
                developer
              </li>
              <li>
                Experience in React, HTML, CSS, JavaScript, Node, Express,
                Mongo, & MySQL.
              </li>
              <li>
                Currently enrolled in the Georgia Tech Coding Bootcamp,
                graduating June 2022
              </li>
              <li>Graduated with Bachelor's degree in Mathematics in 2013</li>
              <li>
                9 years of teaching experience: Algebra 1 and 2, Geometry,
                Precalculus, and AP Calculus
              </li>
              <li>Experience leading teams and setting long-term goals</li>
              <li>Life-long learner with a strong work ethic</li>
            </ul>
          </div>
        </div>
        <div className="col-6 img-div">
          <img
            className="proPic"
            src={pro1}
            alt="Professional picture of Mitchel Wachtel"
          />
        </div>
      </div>
    </div>
  );
}
