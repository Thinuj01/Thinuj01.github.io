import "../styling/FollowMe.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const FollowMe = () => {
  return (
    <div className="followMeContainer">
      <div className="linkedinContainer">
        <FaLinkedinIn />
      </div>
      <div className="linkedinContainer">
        <FaGithub />
      </div>
    </div>
  );
};

export default FollowMe;
