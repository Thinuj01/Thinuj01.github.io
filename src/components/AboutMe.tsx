import "../styling/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <h2>About Me</h2>
      <p className="aboutMeParagraph">
        I'm a dedicated and enthusiastic computer science undergraduate at Uva
        Wellassa University, passionate about building powerful digital
        experiences. I specialize in full-stack development using technologies
        like React, Express.js, Node.js, and Django, and I have a strong
        foundation in both frontend and backend engineering. Over the past few
        years, I've developed various web applications ranging from e-commerce
        platforms to cloud-based management systems. I take pride in writing
        clean, maintainable code and crafting responsive, user-centric
        interfaces. I'm always eager to explore new tools and methodologies,
        with a growing interest in machine learning and AI integration in web
        applications. I believe in continuous learning and love taking on new
        challenges that push my skills to the next level. When I'm not coding, I
        enjoy contributing to open-source projects, collaborating with peers,
        and staying up-to-date with the latest trends in tech.
      </p>
      <p className="aboutMeParagraphMobile">
        I'm a dedicated and enthusiastic computer science undergraduate at Uva
        Wellassa University. I specialize in full-stack development and have
        hands-on experience with modern frameworks like React, Express.js, and
        Django. I enjoy turning complex problems into elegant, user-friendly
        solutions. I'm constantly exploring new technologies and have a strong
        interest in ML.
      </p>
    </div>
  );
};

export default AboutMe;
