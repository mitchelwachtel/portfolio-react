import React from "react";
import "../styles/Footer.css";
import githubPic from "../assets/images/github.png";
import youtubePic from "../assets/images/youtube.png";
import linkedinPic from "../assets/images/linkedinB.jpeg";
import twitterPic from "../assets/images/twitter.png";
import instaPic from "../assets/images/insta.png";

export default function Footer() {
  return (
    <footer class="footer-links">
      <a href="https://github.com/mitchelwachtel" target="_blank">
        <img
          className="linkPic"
          src={githubPic}
          alt="link to Mitchel Wachtel's Github"
        />
      </a>

      <a href="https://www.linkedin.com/in/mitchelwachtel/" target="_blank">
        <img
          className="linkPic"
          src={linkedinPic}
          alt="link to Mitchel Wachtel's LinkedIn Profile"
        />
      </a>
      <a href="https://youtube.com/docwach" target="_blank">
        <img
          className="linkPic"
          src={youtubePic}
          alt="link to Mitchel Wachtel's Youtube Channel"
        />
      </a>
      <a href="https://twitter.com/Mitchwach" target="_blank">
        <img
          className="linkPic"
          src={twitterPic}
          alt="link to Mitchel Wachtel's Twitter Profile"
        />
      </a>
      <a href="https://www.instagram.com/_docwach/" target="_blank">
        <img
          className="linkPic"
          src={instaPic}
          alt="link to Mitchel Wachtel's Instagram Profile"
        />
      </a>
    </footer>
  );
}
