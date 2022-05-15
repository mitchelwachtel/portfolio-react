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
      <div class="container-sm">
        <div class="card">
          <img
            src={snode}
            class="card-img-top"
            alt="Code Snippet Sharing Web App"
          />
          <div class="card-body">
            <h5 class="card-title">Snode</h5>
            <p class="card-text">Description of App & Technologies used</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="https://floating-shore-96827.herokuapp.com/"
                class="card-link"
              >
                Deployed App
              </a>
            </li>
            <li class="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/snode"
                class="card-link"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <img
            src={weather}
            class="card-img-top"
            alt="Weather Dashboard Web App"
          />
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Description of App & Technologies used</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/weather-dashboard/"
                class="card-link"
              >
                Deployed App
              </a>
            </li>
            <li class="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                class="card-link"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <img
            src={weather}
            class="card-img-top"
            alt="Weather Dashboard Web App"
          />
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Description of App & Technologies used</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/weather-dashboard/"
                class="card-link"
              >
                Deployed App
              </a>
            </li>
            <li class="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                class="card-link"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <img
            src={weather}
            class="card-img-top"
            alt="Weather Dashboard Web App"
          />
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Description of App & Technologies used</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/weather-dashboard/"
                class="card-link"
              >
                Deployed App
              </a>
            </li>
            <li class="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                class="card-link"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <img
            src={weather}
            class="card-img-top"
            alt="Weather Dashboard Web App"
          />
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Description of App & Technologies used</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/weather-dashboard/"
                class="card-link"
              >
                Deployed App
              </a>
            </li>
            <li class="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                class="card-link"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
        <div class="card">
          <img
            src={weather}
            class="card-img-top"
            alt="Weather Dashboard Web App"
          />
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Description of App & Technologies used</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="https://www.mitchelwachtel.me/weather-dashboard/"
                class="card-link"
              >
                Deployed App
              </a>
            </li>
            <li class="list-group-item">
              <a
                href="https://github.com/mitchelwachtel/weather-dashboard"
                class="card-link"
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
