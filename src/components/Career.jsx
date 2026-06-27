import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React + Firebase Training</h4>
                <h5>07 services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed intensive training (June - Aug 2025) focused on building
              web applications using React and Firebase. Gained hands-on experience
              in frontend development and backend integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Fullstack Training</h4>
                <h5>07 services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed comprehensive MERN stack training (Aug - Dec 2025). Covered
              MongoDB, Express.js, React, and Node.js to build full-stack
              production-ready applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Freelance</h4>
                <h5>Freelance | Remote Jalandhar, Punjab</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Developed 2+ commercial MERN stack platforms with dynamic admin panels, achieving seamless cross-device rendering and 99.9% uptime. Integrated secure authentication and optimized SEO features, reducing bounce rates and accelerating media asset delivery by 30%. Engineered high-conversion user flows that directly increased client sales by 40%.
              <br /><br />
              <span style={{ color: "var(--accentColor)", fontWeight: 500 }}>Technologies / Skills Used:</span> MERN, Responsive Design, React, Node.js, Express, MongoDB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
