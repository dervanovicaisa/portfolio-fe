import Header from "./layout/header";
import styles from "./page.module.css";
import {
  CardsImage,
  FlayerImage,
  GirlImage,
  HarizmaImage,
  RotationFormImage,
  YogisImage,
} from "../export-img-url";
import Footer from "./layout/footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section>
        <div
          className={`${styles.portfolioImage}
          d-flex flex-column align-items-end justify-content-center px-4`}
        >
          <div className="w-50">
            <p className={`${styles.intro} roboto-bold`}>
              I'am software engineer who builds immersive and user-friendly
              applications that users love.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 pb-5 m-auto bg-dark text-light fs-5">
        <div className="pt-5 pb-3 lh-2">
          <b className="ibm-plex-serif-regular fs-1 d-block">
            I lead teams of product designers to success.
          </b>
          <p className="ibm-plex-serif-light">
            I’m a participatory, goal-oriented designer who leads with
            compassion and transparency. Since 2016, I have managed and mentored
            designers in various capacities. Through my work as both a product
            design leader and workplace community organizer, I have learned to
            create inclusive working environments that increase both team
            cohesion and the achievement of business goals.
          </p>
        </div>
        <div>
          <div className="py-4 lh-2">
            <b className="ibm-plex-serif-regular d-block fs-2">
              Recent projects
            </b>
            <p className="ibm-plex-serif-light">
              Here are quick highlights of what I've been up to lately:
            </p>
          </div>
          <div className="d-flex flex-wrap gap-4">
            <div className="card-box">
              <div className="card">
                <img
                  src={HarizmaImage.src}
                  className="card-img-top"
                  alt="harizma"
                />
                <div className="card-body">
                  <b className="ibm-plex-serif-regular d-block fs-2">Harizma</b>
                  <small className="text-muted ibm-plex-serif-light">
                    Developed in 2024
                  </small>
                  <p className="card-text ibm-plex-serif-light">
                    I make the experience of using Dropbox products seamless
                    through collaborations across the organization. Projects
                    include a 40+ page redesign of a long-neglected experience
                    that powers team growth and a coordinated rollout of
                    cross-product onboarding modules to support overall paid
                    user growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card">
                <img
                  src={YogisImage.src}
                  className="card-img-top"
                  alt="harizma"
                />
                <div className="card-body">
                  <b className="ibm-plex-serif-regular d-block fs-2">Yogis</b>
                  <small className="text-muted text-light ibm-plex-serif-light">
                    Developed in 2024
                  </small>
                  <p className="card-text ibm-plex-serif-light">
                    I make the experience of using Dropbox products seamless
                    through collaborations across the organization. Projects
                    include a 40+ page redesign of a long-neglected experience
                    that powers team growth and a coordinated rollout of
                    cross-product onboarding modules to support overall paid
                    user growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <a className="btn btn-outline-light p-3" href="#" role="button">
            View full portfolio <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>
      <section className="px-5 py-5 m-auto bg-light text-dark fs-5">
        <div className="w-50 m-auto">
          <b className="ibm-plex-serif-regular d-block fs-2">
            I also make designs.
          </b>
          <p className="ibm-plex-serif-light pt-4">
            Since 2011, I have designed and built a variety of human-centered
            video games. My games have been shown in spaces around the world
            including IndieCade in Los Angeles, Fantastic Arcade in Austin, and
            the V&A Museum in London.
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
                <img
                  src={CardsImage.src}
                  className="card-img-top"
                  alt="harizma"
                />
              </div>
            </div>
            <div className="w-50 text-justify d-flex flex-column justify-content-space-evenly">
              <b className="ibm-plex-serif-regular d-block fs-2">
                Business cards
              </b>
              <p className="card-text ibm-plex-serif-light">
                Many people act as if they have no agency at work. Changing the
                way you view your role as a designer might benefit your career.
              </p>
            </div>
          </div>
          <div className="w-50 m-auto d-flex justify-content-between">
            <div className="w-50 text-justify d-flex flex-column justify-content-space-evenly">
              <b className="ibm-plex-serif-regular d-block fs-2">Flyer</b>
              <p className="card-text ibm-plex-serif-light">
                Many people act as if they have no agency at work. Changing the
                way you view your role as a designer might benefit your career.
              </p>
            </div>
            <div className="card-box">
              <div className="card">
                <img
                  src={FlayerImage.src}
                  className="card-img-top"
                  alt="harizma"
                />
              </div>
            </div>
          </div>
          <div className="w-50 m-auto d-flex justify-content-between">
            <div className="card-box">
              <div className="card">
                <img
                  src={RotationFormImage.src}
                  className="card-img-top"
                  alt="harizma"
                />
              </div>
            </div>
            <div className="w-50 text-justify d-flex flex-column justify-content-space-evenly">
              <b className="ibm-plex-serif-regular d-block fs-2">
                Rotation form
              </b>
              <p className="card-text ibm-plex-serif-light">
                Many people act as if they have no agency at work. Changing the
                way you view your role as a designer might benefit your career.
              </p>
            </div>
          </div>
        </div>
        <p className="ibm-plex-serif-light pt-4 w-50 m-auto">
          Since 2011, I have designed and built a variety of human-centered
          video games.
        </p>
      </section>
      <section className="p-5 m-auto bg-dark text-light fs-5">
        <div className="row p-5">
          <div className="col">
            <div className="p-5 bg-secondary">
              <b className="ibm-plex-serif-regular d-block fs-2">
                In my free time I also make:
              </b>
              <p className="ibm-plex-serif-light pt-4">
                Over my many years in design and technology, I have created a
                variety of free and low-cost tutorials, printable worksheets,
                and more.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="p-4">
              <b className="ibm-plex-serif-regular d-block fs-2">
                Want to talk?
              </b>
              <p className="ibm-plex-serif-light pt-4">
                Got feedback, looking to suggest a future writing topic, or want
                to invite me to speak at your organization? Send me a message
                and I'll get back to you as soon as possible!
              </p>
              <a href="mailto:dervanovicaisa@gmail.com" className="text-light">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
