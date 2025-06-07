import '../styling/IntroComp.css';
import { FaDownload } from "react-icons/fa";

const IntroComp = () => {
  return (
    <div className="introContainer">
      <h1>Hi,</h1>
      <h3>I'am Thinuja Hettiarachchi</h3>
      <p>A Passionate Full Stack Developer</p>
      <div className="resumeBtn">
        <FaDownload/>
        Download Resume
      </div>
    </div>
  )
}

export default IntroComp
