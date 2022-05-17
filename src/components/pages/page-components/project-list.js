import weather from "../../../assets/images/lowUV.png";
import techBlog from "../../../assets/images/tech-blog.png";
import snode from "../../../assets/images/snode.png";
import guru from "../../../assets/images/food.png";
import code from "../../../assets/images/question.png";
import socialNet from "../../../assets/images/users.png";

const projects = [
  {
    title: "Snode",
    description:
      "Collaborative full stack application. Incorporated a search feature for users to search for other user’s posts in multiple ways. Gained experience with posting, retrieving and sorting data on the back end before it is rendered on the front end.",
    tech: "Technologies: JS, Express.js, Node.js, Handlebars.js, CSS, Sequelize, CodeMirror",
    isDeployed: true,
    deployLink: "https://floating-shore-96827.herokuapp.com/",
    repoLink: "https://github.com/mitchelwachtel/snode",
    img: snode,
    id: 0,
  },
  {
    title: "Gourmet Guru",
    description: "Front-end Web app gives the user the ability to quickly journal their favorite restaurants and dishes; information is retrieved and stored from Foursquare and Spoonacular APIs to bolster the user's log entry.",
    tech: "Technologies: HTML, CSS, Bootstrap, JS, jQuery, Foursquare API",
    isDeployed: true,
    deployLink: "https://www.mitchelwachtel.me/gourmet-guru/",
    repoLink: "https://github.com/mitchelwachtel/gourmet-guru",
    img: guru,
    id: 1,
  },
  {
    title: "Tech Blog",
    description: "My first full stack application. Users can post, update, comment, delete, and see others’ posts. Working through this project was an epiphany moment on how the front and back end work together.",
    tech: "Technologies: JS, Express.js, Node.js, Handlebars.js, CSS, Sequelize",
    isDeployed: true,
    deployLink: "https://boiling-ravine-98433.herokuapp.com/",
    repoLink: "https://github.com/mitchelwachtel/tech-blog",
    img: techBlog,
    id: 2
  },
  {
    title: "Weather Dashboard",
    description: "OpenWeather API is used so when a user searches for a city, the user is presented with forecast information in a convenient display.",
    tech: "Technologies: HTML, CSS, Bootstrap, JS, jQuery, OpenWeather API",
    isDeployed: true,
    deployLink: "https://www.mitchelwachtel.me/weather-dashboard/",
    repoLink: "https://github.com/mitchelwachtel/weather-dashboard",
    img: weather,
    id: 3
  },
  {
    title: "Social Network API",
    description: "This is a back-end application using the Mongo database, mongoose, and express. This app builds a API for a social network. Users can be added, obtained, updated, and deleted. Users can post thoughts about other users, add other users to their friends list, and react to another user's thoughts. All of this is stored in the NoSQL Mongo DB.",
    tech: "Technologies: MongoDB, node.js, npm, Express.js, dependencies: 'mongoose' and 'express'. Routes tested with Insomnia.",
    isDeployed: false,
    deployLink: "https://youtu.be/2cX3MZx2oxM",
    repoLink: "https://github.com/mitchelwachtel/social-network-api",
    img: socialNet,
    id: 4
  },
  {
    title: "Code Quiz",
    description: "User is presented with a quiz that subtracts from the timer when questions are answered correctly. Time left after 5 questions is the user’s score, which they can save locally.",
    tech: "Technologies: HTML, CSS, JS",
    isDeployed: true,
    deployLink: "https://www.mitchelwachtel.me/code-quiz",
    repoLink: "https://github.com/mitchelwachtel/code-quiz",
    img: code,
    id: 5
  },
];

export default projects;
