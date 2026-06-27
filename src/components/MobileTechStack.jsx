import React from "react";
import LogoLoop from "./LogoLoop";
import { 
  SiMongodb, 
  SiFirebase, 
  SiMysql, 
  SiReact, 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiGit, 
  SiGithub, 
  SiPostman 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdLanguage, MdVideoLibrary, MdEdit, MdHardware, MdImage } from "react-icons/md";
import "./styles/MobileTechStack.css";

const MobileTechStack = () => {
  const techLogos = [
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiFirebase />, title: "Firebase" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiReact />, title: "React.js" },
    { node: <SiReact />, title: "React Native" },
    { node: <MdLanguage />, title: "English & Hindi" },
    { node: <SiC />, title: "C" },
    { node: <SiCplusplus />, title: "C++" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <MdHardware />, title: "SMD Repair" },
    { node: <MdVideoLibrary />, title: "Video Editing" },
    { node: <MdImage />, title: "Adobe Photoshop" },
    { node: <MdEdit />, title: "Content Creation" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <VscVscode />, title: "VS Code" },
    { node: <SiPostman />, title: "Postman" },
  ];

  return (
    <div className="mobile-techstack-section section-container" id="skills">
      <h2>
        My <span>Skills</span>
      </h2>
      <div className="mobile-techstack-container">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#120F17" /* Matching typical dark background */
          ariaLabel="Technology stack"
          renderItem={(item, key) => (
            <div className="mobile-techstack-item" key={key}>
              <span className="mobile-techstack-icon">{item.node}</span>
              <span className="mobile-techstack-title">{item.title}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MobileTechStack;
