import { useState, useEffect } from "react";
import "./styles/Work.css";
import Carousel from "./Carousel";

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, Responsive Design",
    image: "/images/portfolio.png",
    link: "https://github.com/Krishkalia/Portfolio",
  },
  {
    title: "RD Collection System",
    category: "MERN Stack (Ongoing)",
    tools: "React, Node.js, Express, MongoDB",
    image: "/images/rd.png",
    link: "https://rd-collection-sysytem.vercel.app/admin",
  },
  {
    title: "BLE Attendance System",
    category: "Full Stack / Mobile App",
    tools: "Node.js, React Native, MongoDB, Socket.io, BLE",
    image: "/images/ble-attendance.png",
    link: "https://github.com/Krishkalia/BLE-Attendence-system",
  },
  {
    title: "TutFind",
    category: "Web Platform",
    tools: "Tutor & Student Booking Platform",
    image: "/images/tutfind.png",
    link: "https://github.com/Krishkalia/TutFind",
  },
  {
    title: "AI-Interviewer",
    category: "AI Application",
    tools: "AI Interview Assistant",
    image: "/images/ai-interviewer.png",
    link: "https://cognitiveecho.vercel.app",
  },
  {
    title: "MediVault",
    category: "MERN Stack / AI",
    tools: "React, Node.js, MongoDB, Gemini API, Tailwind CSS",
    image: "/images/medivault.png",
    link: "https://github.com/Krishkalia/Medivault",
  },
  {
    title: "KINFED Website",
    category: "Government Website",
    tools: "React, Vite, Web Development",
    image: "/images/kinfed.png",
    link: "https://kinfed.com",
  },
];

const Work = () => {
  const [baseWidth, setBaseWidth] = useState(
    window.innerWidth < 768 ? window.innerWidth - 40 : window.innerWidth > 1024 ? 900 : 700
  );

  useEffect(() => {
    const handleResize = () => {
      setBaseWidth(
        window.innerWidth < 768
          ? window.innerWidth - 40
          : window.innerWidth > 1024
          ? 900
          : 700
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper" style={{ marginTop: '50px' }}>
          <Carousel
            items={projects}
            baseWidth={baseWidth}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
