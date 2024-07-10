import styles from "./intro-section.module.css";
import { PeopleImage } from "./../../../export-img-url";
function IntroSection() {
  return (
    <section>
      <div className="row align-items-center justify-content-center px-4">
        <div className={`col col-lg-5 ${styles.portfolioImage} text-center`}>
          <img
            src={PeopleImage.src}
            className="w-auto"
            alt="girl with 'i am fine day' quote"
          />
        </div>
        <div className="col">
          <div
            className={
              "ibm-plex-serif-regular w-75 m-auto fs-4 " + styles.textAnimation
            }
          >
            <p className={"ibm-plex-serif-bold fs-2 "}>
              I'am a front-end developer with a specialization in software
              engineering.
            </p>
            <br />
            <p className={"text-justify "}>
              Like an artist carefully selecting colors and brushstrokes, I am
              passionate about creating UI/UX designs that are simple,
              accessible, and visually appealing. I often use pastel or{" "}
              light-specific colors , crafting digital landscapes that captivate
              and soothe users.
            </p>
            <p className={"text-justify "}>
              My goal is to make each interface a masterpiece, functional and
              bug-free, providing a seamless user experience akin to enjoying a
              perfectly executed piece of art.
            </p>
            <br />
            <div className={"d-flex fs-5 "}>
              <a
                href="https://buymeacoffee.com/aisadf"
                className="text-decoration-underline text-indigo"
              >
                Buy me a coffee
              </a>
              <i className="bi bi-dot"></i>
              <a
                href="/portfolio"
                className="text-decoration-underline text-indigo"
              >
                Learn about my journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
