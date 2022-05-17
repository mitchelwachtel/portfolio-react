import "../../../styles/Portfolio.css";
import weather from "../../../assets/images/lowUV.png";
import techBlog from "../../../assets/images/tech-blog.png";
import snode from "../../../assets/images/snode.png";
import guru from "../../../assets/images/food.png";
import code from "../../../assets/images/question.png";
import socialNet from "../../../assets/images/users.png";


export default function Project({
  title,
  description,
  tech,
  isDeployed,
  deployLink,
  repoLink,
  img,
}) {
    return (
    <div className="card" >
      <a
        href={deployLink}
        className="card-link"
        rel="noreferrer"
        target="_blank"
      >
        <img src={img} className="card-img-top" alt={title} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="technologies">{tech}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a
            href={deployLink}
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            {isDeployed ? "Deployed App" : "Video Walkthrough" }
          </a>
        </li>
        <li className="list-group-item">
          <a
            href={repoLink}
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            Github Repo
          </a>
        </li>
      </ul>
    </div>
  );
}
