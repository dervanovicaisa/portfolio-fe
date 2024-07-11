import {
  CleaningServiceImage,
  FLPImage,
  HarizmaImage,
  YogisImage,
} from "@/export-img-url";
import styles from "./portfolio.module.css";

function Portfolio() {
  return (
    <div className="text-black row justify-content-center bg-glow">
      <div className="col col-lg-7">
        <div>
          <p className="ibm-plex-serif-regular fs-1">
            Let me help you bring your vision to life
          </p>
          <p className="ibm-plex-serif-light fs-5">
            I am passionate about making the web a more inclusive and
            user-friendly space through frontend development. I thrive on
            tackling complex design and functionality challenges, creating
            solutions that enhance user experiences globally, and working
            alongside.
          </p>
        </div>
        <div className="py-4 lh-2">
          <p className="ibm-plex-serif-regular fs-2">Recent work</p>
          <p className="ibm-plex-serif-light fs-5 pb-2">
            Here are quick highlights of what I've been up to lately:
          </p>
          <div className={"row gap-4 " + styles.boxGrid}>
            <div className="card-box col">
              <div className="card">
                <img
                  src={HarizmaImage.src}
                  className="card-img-top"
                  alt="harizma"
                />
                <div className="card-body">
                  <b className="ibm-plex-serif-regular d-block fs-2 text-black">
                    Harizma
                  </b>
                  <small className="text-muted ibm-plex-serif-light">
                    Developed in 2024
                  </small>
                  <p className="card-text ibm-plex-serif-light text-black">
                    Harizma is a hair salon that offers a wide range of hair and
                    cosmetic services. In addition to these services, they have
                    partnerships with REVLON and Alfaton to sell their products.
                    Established in 2007 and based in Podgorica, Montenegro,
                    Harizma is led by CEO and senior hairdresser Mirsada
                    Hadzajlic. Known for her highly satisfied customers, Mirsada
                    has asked me to create a website that is both attractive and
                    user-friendly. Credits for inspiring me with this design go
                    to{" "}
                    <a
                      href="https://dribbble.com/iman0000"
                      className="text-decoration-underline text-indigo"
                    >
                      Iman
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="card-box col">
              <div className="card">
                <img
                  src={YogisImage.src}
                  className="card-img-top"
                  alt="yogis"
                />
                <div className="card-body">
                  <b className="ibm-plex-serif-regular d-block fs-3 text-black">
                    Yogis
                  </b>
                  <small className="text-muted text-black ibm-plex-serif-light">
                    Developed in 2024
                  </small>
                  <p className="card-text ibm-plex-serif-light text-black">
                    Yogis is a freelance website designed by{" "}
                    <a
                      href="https://dribbble.com/aish_sinha"
                      className="text-decoration-underline text-indigo"
                    >
                      Aishwarya Sinha
                    </a>
                    . In my free time, I enjoy experimenting by finding designs
                    on Dribbble or similar websites and bringing them to life
                    through code. As a fan of yoga and someone who practiced it
                    for a while, this particular design caught my attention. All
                    credit for the design goes to Aishwarya Sinha, while I take
                    pride in the coding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"row gap-4 " + styles.boxGrid}>
            <div className="card-box col">
              <div className="card">
                <img src={FLPImage.src} className="card-img-top" alt="flp" />
                <div className="card-body">
                  <b className="ibm-plex-serif-regular d-block fs-3 text-black">
                    Forever Living Products
                  </b>
                  <small className="text-muted ibm-plex-serif-light">
                    Developed in 2023
                  </small>
                  <p className="card-text ibm-plex-serif-light text-black">
                    {" "}
                    Forever Living Products is well-known for their Aloe Vera
                    products. The requested website features include: displaying
                    a comprehensive list of products; allowing users to add
                    products to a shopping cart; enabling users to send their
                    cart contents directly to an email address. All actions
                    should be possible without requiring user registration. The
                    website's primary purpose is to list all products and
                    facilitate communication with customers, allowing them to
                    create and send a product list to their employer via email.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-box col">
              <div className="card">
                <img
                  src={CleaningServiceImage.src}
                  className="card-img-top"
                  alt="cleaning services"
                />
                <div className="card-body">
                  <b className="ibm-plex-serif-regular d-block fs-3 text-black">
                    M&M cleaning services
                  </b>
                  <small className="text-muted text-black ibm-plex-serif-light">
                    Developed in 2023
                  </small>
                  <p className="card-text ibm-plex-serif-light text-black">
                    M&M is a German start-up company based in Berlin,
                    established in 2023. They provide a range of cleaning
                    services. M&M seeks to create a professional website to
                    showcase their services, provide information about the
                    company, and include a contact form for user feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
