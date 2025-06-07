import "../styling/MyProjectsSection.css";
import ProjectCard from "./ProjectCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useState, useRef } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

interface PositionedProject extends Project {
  position: number;
}

const MyProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Rentit - A Comperhensive Online Rental App",
      description:
        "RentIt is a user-friendly web platform that connects people renting items and services with those looking to rent them, offering secure payments and real-time updates. It simplifies the rental process for everything from tools to real estate, ensuring a smooth and reliable experience for all users.",
        technologies: ["react", "php", "mysql"],
    },
    {
      title: "Evently - A Events Palnning Web site",
      description:
        "Evently is an intuitive event management platform that helps users create, organize, and track events with features like guest lists, budgets, and task management. It streamlines event planning by combining essential tools into one easy-to-use system.",
        technologies: ["react", "django", "mysql"],
    },
    {
      title: "SpendWise - An Expense Tracker Mobile Application",
      description:
        "Expense Tracker is a Flutter-based app that helps users monitor income and expenses in real time, with features like category-based sorting, advanced filtering, and visual financial analytics. Designed for simplicity, it promotes better money management through an intuitive interface and insightful spending trends",
        technologies: ["flutter", "hive"],
    },
    {
      title: "Portfolio",
      description:
        "A modern developer portfolio built with React and Vite, showcasing my technical skills and professional projects. Features responsive design, smooth animations, and a contact form integrated with EmailJS. Demonstrates clean code practices and attention to UX/UI details.",
        technologies: ["react"],
    },
  ];

  const [centerIndex, setCenterIndex] = useState<number>(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleLeftClick = () => {
    if (centerIndex > 0) {
      setCenterIndex(centerIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (centerIndex < projects.length - 1) {
      setCenterIndex(centerIndex + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const threshold = 50;

      if (distance > threshold) {
        handleRightClick(); 
      } else if (distance < -threshold) {
        handleLeftClick(); 
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getVisibleProjects = (): PositionedProject[] => {
    const visible: PositionedProject[] = [];
    for (let i = centerIndex - 1; i <= centerIndex + 1; i++) {
      if (i >= 0 && i < projects.length) {
        visible.push({ ...projects[i], position: i - centerIndex });
      }
    }
    return visible;
  };

  return (
    <div className="myProjectsContainer">
      <h2>My Projects</h2>
      <div className="projectContent">
        <div
          className="sectionArrow sectionArrowLeft"
          onClick={handleLeftClick}
        >
          <FaCaretLeft />
        </div>

        <div
          className="projectsContainer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleProjects().map((project) => {
            let className = "projectCard ";
            if (project.position === 0) className += "focused";
            else if (project.position === -1) className += "leftBlurred";
            else if (project.position === 1) className += "rightBlurred";

            return (
              <div key={project.title} className={className}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              </div>
            );
          })}
        </div>

        <div
          className="sectionArrow sectionArrowRight"
          onClick={handleRightClick}
        >
          <FaCaretRight />
        </div>
      </div>
    </div>
  );
};

export default MyProjectsSection;
