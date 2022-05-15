import React from "react";
import "../../styles/Portfolio.css";
import weather from "../../assets/images/lowUV.png";
import techBlog from "../../assets/images/tech-blog.png"
import snode from "../../assets/images/snode.png"
import guru from "../../assets/images/food.png"
import code from "../../assets/images/question.png"

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
                className="card-link" rel="noreferrer" target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/snode"
                className="card-link"  rel="noreferrer" target="_blank"
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
                className="card-link" rel="noreferrer" target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                className="card-link" rel="noreferrer" target="_blank"
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
                className="card-link" rel="noreferrer" target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                className="card-link" rel="noreferrer" target="_blank"
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
                className="card-link" rel="noreferrer" target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                className="card-link" rel="noreferrer" target="_blank"
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
                className="card-link" rel="noreferrer" target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                className="card-link" rel="noreferrer" target="_blank"
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
                className="card-link" rel="noreferrer" target="_blank"
              >
                Deployed App
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                className="card-link" rel="noreferrer" target="_blank"
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
