import { useEffect, useState } from "react";
import TechText from "./TechText";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Landing.css";

const Landing = ({ children }) => {
  const { isLoading } = useLoading();
  const [shouldAnimate, setShouldAnimate] = useState(!isLoading);

  useEffect(() => {
    if (!isLoading) {
      setShouldAnimate(true);
    }
  }, [isLoading]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 className="landing-tech-name">
              <span className="landing-tech-sr">KRISH KALIA</span>
              <div className="landing-tech-line" aria-hidden="true">
                {shouldAnimate && (
                  <TechText
                    text="KRISH KALIA"
                    align="left"
                    fontFamily='"Geist Mono", monospace'
                    fontWeight={500}
                    fontSize={120}
                    reveal="letter"
                    dashLength={13}
                    dashGap={4}
                    specks={32}
                    intro="assemble"
                    introDuration={2.2}
                    clickKick
                    guides={false}
                    letterSpacing={-0.08}
                    accentColor="#24c3af"
                    strokeWidth={1.75}
                    color="#ffffff"
                  />
                )}
              </div>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A MERN Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
