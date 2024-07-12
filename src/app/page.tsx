import styles from "./page.module.css";
import IntroSection from "./page-section/intro-section/intro-section.component";
import IntroPortfolio from "./page-section/intro-portfolio-section/intro-portfolio.component";
import DesignSection from "./page-section/design-section/design-section.component";
import ContactSection from "./page-section/contact-section/contact-section.component";
export default function Home() {
  return (
    <main id="main" className={styles.main}>
      <div>
        <IntroSection />
        <IntroPortfolio />
        <DesignSection />
        <ContactSection />
      </div>
    </main>
  );
}
