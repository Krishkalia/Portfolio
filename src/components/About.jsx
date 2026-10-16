import ScrambledText from "./ScrambledText";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <ScrambledText
          className="about-scrambled"
          effect="scramble"
          radius={100}
          strength={1}
          trail={0.6}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
          scrambleColor="var(--accentColor)"
          clickBurst
          intro
        >
          Computer Science Engineering student at DAV Institute of Engineering and
          Technology (2023-2027). Passionate MERN Stack Developer with a focus on
          building interactive web applications using React, Node.js, and Firebase.
          Dedicated to crafting high-quality code and exploring innovative
          solutions in software development.
        </ScrambledText>
      </div>
    </div>
  );
};

export default About;
