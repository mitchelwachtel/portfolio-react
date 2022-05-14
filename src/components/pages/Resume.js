import React from "react";

export default function Resume() {
  return (
    <div className="content-container">
      <h1>Resume</h1>
      <div>
        <h2>Overview</h2>
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
      <div>
        <h2>Education</h2>
        <h3>Georgia Tech Coding Bootcamp</h3>
        <p>December 2021 - PRESENT</p>
        <h3>Middle Georgia State University</h3>
        <p>Macon, GA</p>
        <p>Bachelor of Science in Mathematics</p>
      </div>
      <div>
        <h2>Projects</h2>
        <h3>Snode</h3>
        <p>
          Collaborative full stack application. Incorporated a search feature
          for users to search for other user’s posts in multiple ways. Gained
          experience with posting, retrieving and sorting data on the back end
          before it is rendered on the front end.
        </p>
        <a href="https://floating-shore-96827.herokuapp.com/">Deployed App</a>
        <a href="https://github.com/mitchelwachtel/snode">Github Repo</a>
        <p>
          Technologies: JS, Express.js, Node.js, Handlebars.js, CSS, Sequelize,
          CodeMirror
        </p>

        <h3>Gourmet Guru</h3>
        <p>
          Front-end Web app gives the user the ability to quickly journal their
          favorite restaurants and dishes; information is retrieved and stored
          from Foursquare and Spoonacular APIs to bolster the user's log entry.
        </p>
        <a href="https://mitchelwachtel.me/gourmet-guru">Deployed App</a>
        <a href="https://github.com/mitchelwachtel/gourmet-guru">Github Repo</a>
        <p>Technologies: HTML, CSS, Bootstrap, JS, jQuery, Foursquare API</p>

        <h3>Tech Blog</h3>
        <p>
          My first full stack application. Users can post, update, comment,
          delete, and see others’ posts. Working through this project was an
          epiphany moment on how the front and back end work together.
        </p>
        <a href="https://boiling-ravine-98433.herokuapp.com/">Deployed App</a>
        <a href="https://github.com/mitchelwachtel/tech-blog">Github Repo</a>
        <p>
          Technologies: JS, Express.js, Node.js, Handlebars.js, CSS, Sequelize
        </p>
      </div>
      <div>
        <h2>Experience</h2>
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
  );
}
