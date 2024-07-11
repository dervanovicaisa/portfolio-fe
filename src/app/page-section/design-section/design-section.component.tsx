import { CardsImage, FlayerImage, RotationFormImage } from "@/export-img-url";
import styles from "./design-section.module.css";
import Image from "next/image";
function DesignSection() {
  return (
    <section className="row gap-4 px-5 flex-column py-5 m-auto bg-light text-dark fs-5">
      <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 col-xs-11 m-auto">
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
      <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
        <b className="ibm-plex-serif-regular d-block fs-2">
          Most recent designs
        </b>
      </div>
      <div className="col col-12">
        <div className="row flex-column gap-5">
          <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="row justify-content-between">
              <div className="card-box col col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                  <Image
                    src={CardsImage.src}
                    className="card-img-top"
                    alt="card"
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="col col-lg-6 col-md-12 col-sm-12 text-justify d-flex flex-column justify-content-space-evenly px-3">
                <b className="ibm-plex-serif-regular d-block fs-2 py-sm-3">
                  Business cards
                </b>
                <small className="text-muted text-light ibm-plex-serif-light">
                  Designed in 2023
                </small>
                <p
                  className={
                    styles.cardText + " card-text ibm-plex-serif-light"
                  }
                >
                  I designed these business cards for a small start-up company
                  called M&M, based in Germany. The design was created using
                  Figma, focusing on a clean and professional aesthetic to
                  represent their brand effectively
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="row flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-xs-column-reverse justify-content-between">
              <div className="col col-lg-6 col-md-12 col-sm-12 text-justify d-flex flex-column justify-content-space-evenly px-3">
                <b className="ibm-plex-serif-regular d-block fs-2 py-sm-3">
                  Flyer
                </b>
                <small className="text-muted text-light ibm-plex-serif-light">
                  Designed in 2023
                </small>
                <p
                  className={
                    styles.cardText + " card-text ibm-plex-serif-light"
                  }
                >
                  I designed these flyers for a small start-up company called
                  M&M, based in Germany. They wanted to showcase their services
                  prominently. The design was created using Figma, with a focus
                  on a clean and professional aesthetic to effectively represent
                  their brand.
                </p>
              </div>
              <div className="card-box col col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                  <Image
                    src={FlayerImage.src}
                    className="card-img-top"
                    alt="flyer"
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="row justify-content-between">
              <div className="card-box col col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                  <Image
                    src={RotationFormImage.src}
                    className="card-img-top"
                    alt="rotation-form"
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="col col-lg-6 col-md-12 col-sm-12 text-justify d-flex flex-column justify-content-space-evenly px-3">
                <b className="ibm-plex-serif-regular d-block fs-2 py-sm-3">
                  Rotation window
                </b>
                <small className="text-muted text-light ibm-plex-serif-light">
                  Designed in 2022
                </small>
                <p
                  className={
                    styles.cardText + " card-text ibm-plex-serif-light"
                  }
                >
                  This design was created for Uhura Solutions, where I work. I
                  was tasked with developing a frontend rotation form/window,
                  and before starting implementation, I designed a startup
                  concept for it. The sketch was implemented using Figma, with
                  additional features such as rotation degree control and custom
                  inputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
        <p className="ibm-plex-serif-light pb-5 pt-3">
          There are many sketch up designs that I won&apos;t showcase here, but
          if you&apos;re interested in my amateur work with it, feel free to{" "}
          <a
            href="mailito:dervanovicaisa@gmail.com"
            className="text-indigo text-decoration-underline"
          >
            contact me
          </a>
        </p>
      </div>
    </section>
  );
}

export default DesignSection;
