import "../styling/FollowMe.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const FollowMe = () => {
  return (
    <div className="followMeContainer">
      <div className="linkedinContainer">
        <a
          href="https://www.linkedin.com/in/thinuja-hettiarachchi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="linkedinContainer">
        <a
          href="https://github.com/Thinuj01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default FollowMe;
