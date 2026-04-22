import styles from './App.module.css';
import { highlights, interactiveDetails } from './data/siteData';
import { FooterArt } from './components/sections/FooterArt';
import { HeroSection } from './components/sections/HeroSection';
import { HighlightCards } from './components/sections/HighlightCards';
import { InteractiveDetails } from './components/sections/InteractiveDetails';
import { StorySection } from './components/sections/StorySection';

function App() {
  return (
    <div className={styles.appShell}>
      <div className={styles.frameTop} />
      <HeroSection />
      <main className={styles.main}>
        <HighlightCards items={highlights} />
        <StorySection />
        <InteractiveDetails items={interactiveDetails} />
      </main>
      <FooterArt />
    </div>
  );
}

export default App;
