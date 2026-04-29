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
                <h4>Freelance Video Editor</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Professional video editor with experience in content creation and
              storytelling. Awarded 1st prize in the Video Editing Competition at
              DAVIET 2026. Specialized in creating engaging visual content for
              various platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
