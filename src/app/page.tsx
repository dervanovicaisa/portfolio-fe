import styles from "./page.module.css";
import IntroSection from "./page-section/intro-section/intro-section.component";
import IntroPortfolio from "./page-section/intro-portfolio-section/intro-portfolio.component";
import DesignSection from "./page-section/design-section/design-section.component";
import ContactSection from "./page-section/contact-section/contact-section.component";
export default function Home() {
  return (
    <main className={styles.main}>
      <IntroSection />
      <IntroPortfolio />
      <DesignSection />
      <ContactSection />
    </main>
  );
}
