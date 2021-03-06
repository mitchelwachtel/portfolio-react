import React from "react";
import "../../styles/Portfolio.css";
import weather from "../../assets/images/lowUV.png";
import techBlog from "../../assets/images/tech-blog.png";
import snode from "../../assets/images/snode.png";
import guru from "../../assets/images/food.png";
import code from "../../assets/images/question.png";
import socialNet from "../../assets/images/users.png";
import projects from "./page-components/project-list";
import Project from "./page-components/Project.js";

export default function Portfolio() {
  return (
    <div className="content-container">
      <div className="portfolio-header">
        <h1 className="page-title">Projects & Work Samples</h1>
      </div>
      <div className="container-fluid">
        {projects.map((proj) => (
          <Project
            title={proj.title}
            description={proj.description}
            tech={proj.tech}
            isDeployed={proj.isDeployed}
            repoLink={proj.repoLink}
            deployLink={proj.deployLink}
            img={proj.img}
            key={proj.id}
          />
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="card">
          <a
            href="https://floating-shore-96827.herokuapp.com/"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              src={snode}
              className="card-img-top"
              alt="Code Snippet Sharing Web App"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Snode</h5>
            <p className="card-text">
              Collaborative full stack application. Incorporated a search
              feature for users to search for other user’s posts in multiple
              ways. Gained experience with posting, retrieving and sorting data
              on the back end before it is rendered on the front end.
            </p>
            <p className="technologies">
              Technologies: JS, Express.js, Node.js, Handlebars.js, CSS,
              Sequelize, CodeMirror
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://floating-shore-96827.herokuapp.com/"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/snode"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <a
            href="https://www.mitchelwachtel.me/gourmet-guru/"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={guru}
              className="card-img-top"
              alt="Gourmet Guru Web App"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Gourmet Guru</h5>
            <p className="card-text">
              Front-end Web app gives the user the ability to quickly journal
              their favorite restaurants and dishes; information is retrieved
              and stored from Foursquare and Spoonacular APIs to bolster the
              user's log entry.
            </p>
            <p className="technologies">
              Technologies: HTML, CSS, Bootstrap, JS, jQuery, Foursquare API
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/gourmet-guru/"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/gourmet-guru"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <a
            href="https://boiling-ravine-98433.herokuapp.com/"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={techBlog}
              className="card-img-top"
              alt="Tech Blog Web App"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">
              My first full stack application. Users can post, update, comment,
              delete, and see others’ posts. Working through this project was an
              epiphany moment on how the front and back end work together.
            </p>
            <p className="technologies">
              Technologies: JS, Express.js, Node.js, Handlebars.js, CSS,
              Sequelize
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://boiling-ravine-98433.herokuapp.com/"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/tech-blog"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <a
            href="https://www.mitchelwachtel.me/weather-dashboard/"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={weather}
              className="card-img-top"
              alt="Weather Dashboard Web App"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">
              OpenWeather API is used so when a user searches for a city, the
              user is presented with forecast information in a convenient
              display.
            </p>
            <p className="technologies">
              Technologies: HTML, CSS, Bootstrap, JS, jQuery, OpenWeather API
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/weather-dashboard/"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <a
            href="https://youtu.be/2cX3MZx2oxM"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={socialNet}
              className="card-img-top"
              alt="Code Quiz Web App"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Social Network API</h5>
            <p className="card-text">
              This is a back-end application using the Mongo database, mongoose,
              and express. This app builds a API for a social network. Users can
              be added, obtained, updated, and deleted. Users can post thoughts
              about other users, add other users to their friends list, and
              react to another user's thoughts. All of this is stored in the
              NoSQL Mongo DB.
            </p>
            <p className="technologies">
              Technologies: MongoDB, node.js, npm, Express.js, dependencies:
              'mongoose' and 'express'. Routes tested with Insomnia.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://youtu.be/2cX3MZx2oxM"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Video Demonstration
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/social-network-api"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <a
            href="https://www.mitchelwachtel.me/code-quiz"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={code} className="card-img-top" alt="Code Quiz Web App" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Code Quiz</h5>
            <p className="card-text">
              User is presented with a quiz that subtracts from the timer when
              questions are answered correctly. Time left after 5 questions is
              the user’s score, which they can save locally.
            </p>
            <p className="technologies">Technologies: HTML, CSS, JS</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/code-quiz"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/code-quiz"
                className="card-link"
                rel="noreferrer"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div> */
}
