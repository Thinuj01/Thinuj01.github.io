import "../styling/ProjectCard.css";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { SiApachehive } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  const renderTechbologies = (tech: string) => {
    switch (tech) {
      case "react":
        return <FaReact />;
        break;
      case "django":
        return <SiDjango />;
        break;
      case "mysql":
        return <SiMysql />;
        break;
      case "php":
        return <SiPhp />;
        break;
      case "flutter":
        return <FaFlutter />;
        break;
      case "hive":
        return <SiApachehive />;
        break;
      case "nextjs":
        return <RiNextjsFill />;
        break;
      case "typescript":
        return <BiLogoTypescript />;
        break;
      case "tailwindcss":
        return <RiTailwindCssFill />;
        break;
    }
  };

  return (
    <div className="projectCardInner">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="techSection">
        {technologies.map((tech, index) => (
          <span key={index} className="technology">
            {renderTechbologies(tech)}
          </span>
        ))}
      </div>
      <div className="gitProject">
        <a
          href="https://lnkd.in/gjapc9wd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="gitBtn" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
