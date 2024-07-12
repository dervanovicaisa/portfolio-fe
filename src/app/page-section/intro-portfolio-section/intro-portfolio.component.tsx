import { YogisImage, HarizmaImage } from "@/export-img-url";
import styles from "./intro-portfolio.module.css";
import Image from "next/image";
function IntroPortfolio() {
  return (
    <section className="px-5 px-sm-4 pb-5 m-auto bg-black text-light fs-5">
      <div className="pt-5 pb-3 lh-2">
        <b className="ibm-plex-serif-regular fs-1 d-block">
          I bring designs to life through code
        </b>
        <p className="ibm-plex-serif-light pt-sm-3 text-sm-justify text-xs-justify">
          I bring designs to life through code, transforming static visual
          concepts into dynamic, interactive experiences. As a front-end
          developer, I bridge the gap between design and functionality,
          meticulously translating wireframes and mockups into responsive
          websites and intuitive user interfaces. Each line of code I write adds
          functionality and enhances user experience, ensuring that the final
          product not only looks polished but also operates seamlessly across
          devices and platforms.
        </p>
      </div>
      <div>
        <div className="py-4 lh-2">
          <b className="ibm-plex-serif-regular d-block fs-2">Recent projects</b>
          <p className="ibm-plex-serif-light">
            Here are quick highlights of what I&apos;ve been up to lately:
          </p>
        </div>
        <div
          className={
            "row flex-lg-row flex-md-row flex-sm-column " + styles.boxGrid
          }
        >
          <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 card-box">
            <div className="card">
              <Image
                src={HarizmaImage.src}
                className="card-img-top"
                alt="harizma"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="card-body">
                <b className="ibm-plex-serif-regular d-block fs-2">Harizma</b>
                <small className="text-muted ibm-plex-serif-light">
                  Developed in 2024
                </small>
                <p className="card-text ibm-plex-serif-light">
                  Harizma is a hair salon that offers a wide range of hair and
                  cosmetic services. In addition to these services, they have
                  partnerships with REVLON and Alfaton to sell their products.
                  Established in 2007 and based in Podgorica, Montenegro,
                  Harizma is led by CEO and senior hairdresser Mirsada
                  Hadzajlic. Known for her highly satisfied customers, Mirsada
                  has asked me to create a website that is both attractive and
                  user-friendly. Credits for inspiring me with this design go to{" "}
                  <a
                    href="https://dribbble.com/iman0000"
                    className="text-decoration-underline text-primary-subtle"
                  >
                    Iman
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 card-box">
            <div className="card">
              <Image
                src={YogisImage.src}
                className="card-img-top"
                alt="harizma"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="card-body">
                <b className="ibm-plex-serif-regular d-block fs-2">Yogis</b>
                <small className="text-muted text-light ibm-plex-serif-light">
                  Developed in 2024
                </small>
                <p className="card-text ibm-plex-serif-light">
                  Yogis is a freelance website designed by{" "}
                  <a
                    href="https://dribbble.com/aish_sinha"
                    className="text-decoration-underline text-primary-subtle"
                  >
                    Aishwarya Sinha
                  </a>
                  . In my free time, I enjoy experimenting by finding designs on
                  Dribbble or similar websites and bringing them to life through
                  code. As a fan of yoga and someone who practiced it for a
                  while, this particular design caught my attention. All credit
                  for the design goes to Aishwarya Sinha, while I take pride in
                  the coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end">
        <a
          className={
            "btn btn-outline-light p-3 text-primary-subtle " +
            styles.btnViewFull
          }
          href="/portfolio"
          role="button"
        >
          View full portfolio <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default IntroPortfolio;
