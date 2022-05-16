import React from "react";
import "../../styles/Portfolio.css";
import weather from "../../assets/images/lowUV.png";
import techBlog from "../../assets/images/tech-blog.png";
import snode from "../../assets/images/snode.png";
import guru from "../../assets/images/food.png";
import code from "../../assets/images/question.png";
import socialNet from "../../assets/images/users.png";

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container-fluid">
        <div className="card">
          <img
            src={snode}
            className="card-img-top"
            alt="Code Snippet Sharing Web App"
          />
          <div className="card-body">
            <h5 className="card-title">Snode</h5>
            <p className="card-text">Description of App & Technologies used</p>
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
          <img src={guru} className="card-img-top" alt="Gourmet Guru Web App" />
          <div className="card-body">
            <h5 className="card-title">Gourmet Guru</h5>
            <p className="card-text">Description of App & Technologies used</p>
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
          <img
            src={techBlog}
            className="card-img-top"
            alt="Tech Blog Web App"
          />
          <div className="card-body">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">Description of App & Technologies used</p>
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
          <img
            src={weather}
            className="card-img-top"
            alt="Weather Dashboard Web App"
          />
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">Description of App & Technologies used</p>
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
          <img
            src={socialNet}
            className="card-img-top"
            alt="Code Quiz Web App"
          />
          <div className="card-body">
            <h5 className="card-title">Social Network API</h5>
            <p className="card-text">Description of App & Technologies used</p>
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
          <img src={code} className="card-img-top" alt="Code Quiz Web App" />
          <div className="card-body">
            <h5 className="card-title">Code Quiz</h5>
            <p className="card-text">Description of App & Technologies used</p>
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
        </div>
      </div>
    </div>
  );
}
