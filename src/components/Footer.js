import React from "react";
import "../styles/Footer.css";
import githubPic from "../assets/images/github.png";
import youtubePic from "../assets/images/youtube.png";
import linkedinPic from "../assets/images/linkedinC.png";
import twitterPic from "../assets/images/twitter.png";
import instaPic from "../assets/images/insta.png";
import gmailPic from "../assets/images/gmail.png";

export default function Footer() {
  return (
    <footer class="footer-links">
      <a href="https://github.com/mitchelwachtel" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={githubPic}
          alt="link to Mitchel Wachtel's Github"
        />
      </a>

      <a href="https://www.linkedin.com/in/mitchelwachtel/" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={linkedinPic}
          alt="link to Mitchel Wachtel's LinkedIn Profile"
        />
      </a>
      <a href="mailto:mitchel.wachtel@gmail.com" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={gmailPic}
          alt="link to Mitchel Wachtel's Email"
        />
      </a>
      <a href="https://youtube.com/docwach" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={youtubePic}
          alt="link to Mitchel Wachtel's Youtube Channel"
        />
      </a>
      <a href="https://twitter.com/Mitchwach" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={twitterPic}
          alt="link to Mitchel Wachtel's Twitter Profile"
        />
      </a>
      <a href="https://www.instagram.com/_docwach/" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={instaPic}
          alt="link to Mitchel Wachtel's Instagram Profile"
        />
      </a>
    </footer>
  );
}
