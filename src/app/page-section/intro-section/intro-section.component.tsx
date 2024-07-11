import styles from "./intro-section.module.css";
import { PeopleImage } from "./../../../export-img-url";
import Image from "next/image";
function IntroSection() {
  return (
    <section>
      <div className="row align-items-center justify-content-center px-4">
        <div
          className={`col col-lg-5 col-md-3 col-sm-3 col-xs-3 ${styles.portfolioImage} text-end`}
        >
          <Image
            src={PeopleImage.src}
            className="w-100 text-end"
            alt="girl with quote"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div className="col col-lg-6 col-md-10 col-sm-10 col-xs-10 pb-3 pb-sm-5 text-md-justify text-sm-justify">
          <div
            className={
              "ibm-plex-serif-regular m-auto fs-4 " + styles.textAnimation
            }
          >
            <p
              className={
                "ibm-plex-serif-bold text-lg-start text-sm-center fs-1"
              }
            >
              I&apos;am a front-end developer with a specialization in software
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
                Buy Me a Coffee
              </a>
              <i className="bi bi-dot"></i>
              <a
                href="/about"
                className="text-decoration-underline text-indigo"
              >
                Meet me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
