import React from "react";
import pro1 from "../../assets/images/pro1.jpg";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="content-container container">
      <div className="title-header">
          <h1 className="page-title">Resume</h1>
      </div>
      <div className="row">
        <div className="col-6">
      <div className="section">
        
        <h2 className="section-title">Overview</h2>
        <ul>
          <li>Successful math teacher turned developer</li>
          <li>
            Seeking job as a front-end, back-end, or full stack web developer
          </li>
          <li>
            Experience in React, HTML, CSS, JavaScript, Node, Express, Mongo, &
            MySQL.
          </li>
          <li>Experience leading teams and setting long-term goals</li>
          <li>Life-long learner with a strong work ethic</li>
        </ul>
      </div>
      <div className="section">
        <h2 className="section-title">Education</h2>
        <h3>Georgia Tech Coding Bootcamp</h3>
        <p>December 2021 - PRESENT</p>
        <h3>Middle Georgia State University</h3>
        <p>Macon, GA</p>
        <p>Bachelor of Science in Mathematics</p>
      </div>

      <div className="section">
        <h2 className="section-title">Experience</h2>
        <h3>Academy For Classical Education</h3>
        <p>Macon, GA</p>
        <p>Math Teacher</p>
        <p>July 2014 - PRESENT</p>
        <ul>
          <li>
            Teacher: Algebra 1 and 2, Geometry, Precalculus, and AP Calculus
          </li>
          <li>
            Technologies: Google Suite, Infinite Campus, Desire2Learn,
            TI-Smartview
          </li>
          <li>Math Department Chair: August 2018 - Present</li>
          <li>
            Cross Country Team Head Coach: July 2016 - November 2020. Coached
            both the girls and boys varsity teams at ACE. Each year from 2016 to
            2020, I led at least one team to the state championship.
          </li>
          <li>
            Math Team Head Coach: July 2015 - Present. ACE Math Team competed in
            GA Math League and MGA hosted Math Olympics and Puzzle Competition.
          </li>
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
