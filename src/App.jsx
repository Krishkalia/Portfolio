import { lazy, Suspense, useEffect } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  useEffect(() => {
    let hasPlayed = false;
    const audio = new Audio('/voice/intro.mp3');
    audio.volume = 1.0;

    const tryPlay = () => {
      if (hasPlayed) return;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          hasPlayed = true;
          document.removeEventListener('click', tryPlay);
          document.removeEventListener('touchstart', tryPlay);
          document.removeEventListener('keydown', tryPlay);
          document.removeEventListener('scroll', tryPlay);
        }).catch(error => {
          console.warn("Autoplay blocked. Waiting for interaction.", error);
        });
      }
    };

    // Try playing immediately
    tryPlay();

    // If blocked, these listeners will trigger it when the user interacts
    document.addEventListener('click', tryPlay);
    document.addEventListener('touchstart', tryPlay);
    document.addEventListener('keydown', tryPlay);
    document.addEventListener('scroll', tryPlay, { once: true });

    return () => {
      audio.pause();
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('touchstart', tryPlay);
      document.removeEventListener('keydown', tryPlay);
      document.removeEventListener('scroll', tryPlay);
    };
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
