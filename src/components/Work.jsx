import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
