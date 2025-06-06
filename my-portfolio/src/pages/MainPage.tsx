import { useState } from "react";
import main4to from "../assets/main4to.png";
import mobileImage4to from "../assets/mobileMain4to.png";
import NavBar from "../components/NavBar";
import "./MainPage.css";
import FollowMe from "../components/FollowMe";
import IntroComp from "../components/IntroComp";
import AboutMe from "../components/AboutMe";

const MainPage = () => {
  const [content, setContent] = useState("Home");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const showContent = () => {
    switch (content) {
      case "Home":
        return <IntroComp />;
      case "About me":
        return <AboutMe />;
      case "My projects":
        return <h1>Our Projects</h1>;
      case "Contact me":
        return <h1>Contact Us</h1>;
      default:
        return <h1>Page Not Found</h1>;
    }
  };
  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <div className="mobileImageContainer">
          <img
            src={mobileImage4to}
            alt="mobile main image"
            className="mobileMainImg"
          />
        </div>
        <NavBar
          handleContentChange={handleContentChange}
          currentContent={content}
        />
        <div className="pageContent">{showContent()}</div>
      </div>
      <div className="imageContainer">
        <img src={main4to} alt="main image" className="mainImg" />
      </div>
      <div className="followMe">
        <FollowMe />
      </div>
    </div>
  );
};

export default MainPage;
