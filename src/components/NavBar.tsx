import NavLinkComp from "./NavLinkComp";
import "../styling/NavBar.css";
import { AiFillHome } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { RiMailSendFill } from "react-icons/ri";


interface Props {
  handleContentChange: (newContent: string) => void;
  currentContent: string;
}

const NavBar = ({ handleContentChange,currentContent }: Props) => {
  return (
    <div className="NavBarContainer">
      <NavLinkComp currentContent={currentContent} handleContentChange={handleContentChange} name="Home">
        <AiFillHome />
      </NavLinkComp>
      <NavLinkComp currentContent={currentContent} handleContentChange={handleContentChange} name="About me">
        <FaCircleInfo />
      </NavLinkComp>
      <NavLinkComp currentContent={currentContent} handleContentChange={handleContentChange} name="My projects">
        <GrProjects />
      </NavLinkComp>
      <NavLinkComp currentContent={currentContent} handleContentChange={handleContentChange} name="Contact me">
        <RiMailSendFill />
      </NavLinkComp>
    </div>
  );
};

export default NavBar;
