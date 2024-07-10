import { CardsImage, FlayerImage, RotationFormImage } from "@/export-img-url";
import styles from "./design-section.module.css";
function DesignSection() {
  return (
    <section className="px-5 py-5 m-auto bg-light text-dark fs-5">
      <div className="w-50 m-auto">
        <b className="ibm-plex-serif-regular d-block fs-2">
          I also make designs.
        </b>
        <p className="ibm-plex-serif-light pt-4">
          I am also an amateur designer. As a front-end developer, I developed a
          love for design and started learning and practicing it. Currently, I
          focus on small projects like business cards, flyers, and some
          web/mobile UI/UX. I began this journey in 2021 and consider myself
          still an amateur, but I aspire to become a professional one day.
        </p>
      </div>
      <div className="w-50 m-auto py-5">
        <b className="ibm-plex-serif-regular d-block fs-2">
          Most recent designs
        </b>
      </div>
      <div className="d-flex flex-column gap-5">
        <div className="w-50 m-auto d-flex justify-content-between">
          <div className="card-box">
            <div className="card">
              <img src={CardsImage.src} className="card-img-top" alt="card" />
            </div>
          </div>
          <div className="w-50 text-justify d-flex flex-column justify-content-space-evenly px-3">
            <b className="ibm-plex-serif-regular d-block fs-2">
              Business cards
            </b>
            <small className="text-muted text-light ibm-plex-serif-light">
              Designed in 2023
            </small>
            <p className={styles.cardText + " card-text ibm-plex-serif-light"}>
              I designed these business cards for a small start-up company
              called M&M, based in Germany. The design was created using Figma,
              focusing on a clean and professional aesthetic to represent their
              brand effectively
            </p>
          </div>
        </div>
        <div className="w-50 m-auto d-flex justify-content-between">
          <div className="w-50 text-justify d-flex flex-column justify-content-space-evenly px-3">
            <b className="ibm-plex-serif-regular d-block fs-2">Flyer</b>
            <small className="text-muted text-light ibm-plex-serif-light">
              Designed in 2023
            </small>
            <p className={styles.cardText + " card-text ibm-plex-serif-light"}>
              I designed these flyers for a small start-up company called M&M,
              based in Germany. They wanted to showcase their services
              prominently. The design was created using Figma, with a focus on a
              clean and professional aesthetic to effectively represent their
              brand.
            </p>
          </div>
          <div className="card-box">
            <div className="card">
              <img src={FlayerImage.src} className="card-img-top" alt="flyer" />
            </div>
          </div>
        </div>
        <div className="w-50 m-auto d-flex justify-content-between">
          <div className="card-box">
            <div className="card">
              <img
                src={RotationFormImage.src}
                className="card-img-top"
                alt="rotation-form"
              />
            </div>
          </div>
          <div className="w-50 text-justify d-flex flex-column justify-content-space-evenly px-3">
            <b className="ibm-plex-serif-regular d-block fs-2">
              Rotation window
            </b>
            <small className="text-muted text-light ibm-plex-serif-light">
              Designed in 2022
            </small>
            <p className={styles.cardText + " card-text ibm-plex-serif-light"}>
              This design was created for Uhura Solutions, where I work. I was
              tasked with developing a frontend rotation form/window, and before
              starting implementation, I designed a startup concept for it. The
              sketch was implemented using Figma, with additional features such
              as rotation degree control and custom inputs.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <p className="ibm-plex-serif-light pb-5 pt-3 w-50 m-auto">
        There are many sketch up designs that I won't showcase here, but if
        you're interested in my amateur work with it, feel free to{" "}
        <a
          href="mailito:dervanovicaisa@gmail.com"
          className="text-indigo text-decoration-underline"
        >
          contact me
        </a>
      </p>
    </section>
  );
}

export default DesignSection;
