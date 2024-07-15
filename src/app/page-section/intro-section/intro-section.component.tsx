import styles from "./intro-section.module.css";
import { PeopleImage } from "./../../../export-img-url";
import Image from "next/image";
function IntroSection() {
  return (
    <section>
      <div className="row flex-lg-row flex-md-row flex-sm-column align-items-center justify-content-center px-lg-4 px-md-4 px-sm-0">
        <div
          className={`col col-lg-5 col-md-3 col-sm-10 ${styles.portfolioImage} text-end text-md-center text-sm-center`}
        >
          <Image
            src={PeopleImage.src}
            className="w-100 w-sm-50 text-end text-md-center text-sm-center"
            alt="girl with quote"
            layout="responsive"
            width={500}
            height={300}
            priority
          />
        </div>
        <div className="col col-lg-6 col-md-11 col-sm-10 col-xs-10 px-sm-0  pb-lg-5 pb-md-5 pb-sm-5 text-md-justify text-sm-justify">
          <div
            className={
              "ibm-plex-serif-regular m-auto fs-4 " + styles.textAnimation
            }
          >
            <p
              className={
                "ibm-plex-serif-bold text-lg-start text-sm-center mb-md-0 mb-sm-0 fs-1 pt-sm-3"
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
            <p className={"text-justify mb-sm-0"}>
              My goal is to make each interface a masterpiece, functional and
              bug-free, providing a seamless user experience akin to enjoying a
              perfectly executed piece of art.
            </p>
            <br />
            <div className={"d-flex align-items-center fs-5 "}>
              {/* <a
                href="https://www.patreon.com/etherealechoes/shop"
                className="text-decoration-underline text-indigo"
                target="_blank"
              >
                Buy Me a Coffee
              </a>
              <i className="bi bi-dot"></i> */}
              <a
                href="/about"
                className="text-decoration-underline text-indigo"
              >
                Get to know me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
