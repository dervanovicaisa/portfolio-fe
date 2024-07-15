import { Me1Image, Me2Image, Me3Image } from "@/export-img-url";
import styles from "./about.module.css";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className={styles.aboutBgImage + " text-dark"}>
      <div className={"m-auto row " + styles.bgAboutInner}>
        <div className="m-auto col-xl-6 col-lg-8 col-md-10 col-sm-11 col-xs-11 py-4 d-flex flex-column gap-lg-5 gap-md-5 gap-sm-3">
          <div>
            <p className="ibm-plex-serif-bold fs-1">
              Software Engineer born in Montenegro, Podgorica
            </p>
            <p className="ibm-plex-serif-regular fs-5 mb-0">
              I grew up fixing technological issues for others on phones and
              laptops, from simple matters to more complex ones, all while being
              a fan of games and science fiction. There has always been a
              passion for it. I like to solve problems — that&apos;s just who I
              am.
            </p>
          </div>
          <div>
            <Link legacyBehavior href="./CV.pdf" passHref>
              <a
                className="btn btn-bg-primary-subtle text-dark ibm-plex-serif-medium p-lg-3 p-md-3 p-sm-2"
                role="button"
                download
                target="_blank"
              >
                View my résumé (PDF)
              </a>
            </Link>
          </div>
          <div>
            <p className="ibm-plex-serif-bold fs-1">
              My journey has only just begun, but it&apos;s already fascinating
            </p>
            <div className="col-lg-9 col-md-9 col-sm-12 pt-lg-3 pt-md-3 pt-sm-0 m-lg-auto m-md-auto ps-lg-0 ps-md-0 ps-sm-5">
              <ul className="list-unstyled">
                <li className={styles.timelineEvent}>
                  <small className={"pb-2 pt-1 " + styles.timelineDate}>
                    2020
                  </small>
                  <b className="ibm-plex-serif-bold d-block mb-2 fs-5">
                    BSc in Information Technology
                  </b>
                  <div className="d-flex align-items-center gap-2 pb-3 flex-wrap">
                    <span className="badge text-bg-secondary">PHP</span>
                    <span className="badge text-bg-secondary">MySql</span>
                    <span className="badge text-bg-secondary">Java EE</span>
                    <span className="badge text-bg-secondary">HTML/CSS</span>
                    <span className="badge text-bg-secondary">C#</span>
                    <span className="badge text-bg-secondary">
                      Microsoft Project
                    </span>
                    <span className="badge text-bg-secondary">Network</span>
                    <span className="badge text-bg-secondary">
                      Distrect Math
                    </span>
                    <span className="badge text-bg-secondary">Drools</span>
                    <span className="badge text-bg-secondary">
                      Software Engineering
                    </span>
                    <span className="badge text-bg-secondary">XML</span>
                    <span className="badge text-bg-secondary">
                      Andorid Studio
                    </span>
                    <span className="badge text-bg-secondary">OracleDB</span>
                    <span className="badge text-bg-secondary">AutoCAD</span>
                    <span className="badge text-bg-secondary">
                      Data structures and algorithms
                    </span>
                  </div>
                  <p>
                    From my Bachelor&apos;s degree at the University
                    Mediterranean in Montenegro, Podgorica, I gained a solid
                    foundation in my field of study, critical thinking skills,
                    practical research abilities, effective communication
                    skills, and the ability to work collaboratively in teams.
                  </p>
                </li>
                <li className={styles.timelineEvent}>
                  <small className={"pb-2 pt-1 " + styles.timelineDate}>
                    2021
                  </small>
                  <b className="ibm-plex-serif-bold d-block mb-2 fs-5">
                    Intern backend developer
                  </b>
                  <div className="d-flex align-items-center gap-2 pb-3 flex-wrap">
                    <span className="badge text-bg-secondary">Laravel</span>
                    <span className="badge text-bg-secondary">PHP</span>
                    <span className="badge text-bg-secondary">MySql</span>
                    <span className="badge text-bg-secondary">
                      Eloquent ORM
                    </span>
                    <span className="badge text-bg-secondary">
                      Blade Templating Engine
                    </span>
                    <span className="badge text-bg-secondary">
                      RESTful APIs
                    </span>
                    <span className="badge text-bg-secondary">Composer</span>
                    <span className="badge text-bg-secondary">Artisan CLI</span>
                    <span className="badge text-bg-secondary">Caching</span>
                    <span className="badge text-bg-secondary">
                      Authentication & Authorization
                    </span>
                    <span className="badge text-bg-secondary">CI/CD Tools</span>
                    <span className="badge text-bg-secondary">
                      Third-Party Integrations
                    </span>
                  </div>
                  <p>
                    As an intern Laravel Developer at{" "}
                    <span className="text-decoration-underline">QQRIQ</span>, I
                    had the opportunity to work on various projects, gaining
                    insights into client requirements through direct
                    communication. Leveraging my strong foundation in PHP
                    programming from my academic background, I primarily focused
                    on backend development.
                  </p>
                  <p>Key projects and responsibilities include:</p>
                  <ul>
                    <li>
                      <b>UrbanOne:</b> Led backend development enabling users to
                      upload and apply designs to products like mugs and shirts,
                      acquiring skills in coordinate systems, ImageMagick for
                      image processing, element positioning, and database
                      management.
                    </li>
                    <li>
                      <b> Piano Cars (Rent a Car): </b> Expanded project
                      architecture and implemented new functionalities, focusing
                      on optimizing backend processes for improved performance
                      and scalability.
                    </li>
                    <li>
                      <b>Petzoona Blog:</b> Revamped backend architecture,
                      integrated frontend functionalities, enhanced style and
                      responsiveness, and managed user authentication and site
                      localization to improve overall user experience.
                    </li>
                  </ul>
                  <p className="mt-3">
                    Through these projects, I honed my skills in Laravel backend
                    development, project management, and client interaction,
                    gaining practical experience in adapting to varying project
                    scopes and technical requirements. My contributions played a
                    pivotal role in delivering robust solutions that met client
                    expectations and improved user experience.
                  </p>
                </li>
                <li className={styles.timelineEvent}>
                  <small className={"pb-2 pt-1 " + styles.timelineDate}>
                    2022
                  </small>
                  <b className="ibm-plex-serif-bold d-block mb-2 fs-5">
                    Frontend developer
                  </b>
                  <div className="d-flex align-items-center gap-2 pb-3 flex-wrap">
                    <span className="badge text-bg-secondary">React</span>
                    <span className="badge text-bg-secondary">
                      JavaScript (ES6+)
                    </span>
                    <span className="badge text-bg-secondary">Bootstrap</span>
                    <span className="badge text-bg-secondary">JSX</span>
                    <span className="badge text-bg-secondary">Redux</span>
                    <span className="badge text-bg-secondary">
                      React Router
                    </span>
                    <span className="badge text-bg-secondary">
                      Axios and Fetch API
                    </span>
                    <span className="badge text-bg-secondary">NPM</span>
                    <span className="badge text-bg-secondary">Hooks</span>
                    <span className="badge text-bg-secondary">Prettier</span>
                    <span className="badge text-bg-secondary">CI/CD Tools</span>
                  </div>
                  <p>
                    As a remote ReactJS Frontend Developer at{" "}
                    <span className="text-decoration-underline">Fuel Me</span>,
                    a company headquartered in the United States with a
                    programming team consisting of members from Montenegro and
                    Serbia, I contributed to enhancing software solutions
                    tailored for gas stations and related corporations. The
                    software provided insights into the transfer of oil, gas,
                    and similar products within the industry, including tracker
                    overviews.
                  </p>
                  <p>My key responsibilities included:</p>
                  <ul>
                    <li>
                      <b>Interface Redesign:</b> Improved user experience and
                      visual appeal.
                    </li>
                    <li>
                      <b> Code Quality & Performance: </b> Enhanced scalability
                      and maintainability.
                    </li>
                    <li>
                      <b>Feature Implementation:</b> Added new features to meet
                      business needs.
                    </li>
                    <li>
                      <b> Team Collaboration:</b> Worked effectively with a
                      distributed team across time zones.
                    </li>
                  </ul>
                  <p className="mt-3">
                    Working on the Fuel Me project allowed me to deepen my
                    expertise in ReactJS development while navigating remote
                    work dynamics and multicultural team collaboration. It
                    provided valuable experience in delivering impactful
                    solutions to streamline operations and enhance user
                    engagement within the energy sector.
                  </p>
                </li>
                <li className={styles.timelineEvent}>
                  <small className={"pb-2 pt-1 " + styles.timelineDate}>
                    2022
                  </small>
                  <b className="ibm-plex-serif-bold d-block mb-2 fs-5">
                    Spec. Sci in Information Technology
                  </b>
                  <div className="d-flex align-items-center gap-2 pb-3 flex-wrap">
                    <span className="badge text-bg-secondary">VueJS</span>
                    <span className="badge text-bg-secondary">
                      Advanced Databases
                    </span>
                    <span className="badge text-bg-secondary">Quarkus</span>
                    <span className="badge text-bg-secondary">MS Project</span>
                    <span className="badge text-bg-secondary">
                      Advanced Networks
                    </span>
                    <span className="badge text-bg-secondary">
                      Digital Forensics
                    </span>
                  </div>
                  <p>
                    From my Specialist&apos;s degree at the University
                    Mediterranean in Montenegro, Podgorica, I gained specialized
                    knowledge in my field of study, advanced analytical skills,
                    practical research expertise, and the ability to apply
                    specialized knowledge in real-world scenarios.
                  </p>
                </li>
                <li className={styles.timelineEvent}>
                  <small className={"pb-2 pt-1 " + styles.timelineDate}>
                    2022
                  </small>
                  <b className="ibm-plex-serif-bold d-block mb-2 fs-5">
                    Frontend developer (part-time)
                  </b>
                  <div className="d-flex align-items-center gap-2 pb-3 flex-wrap">
                    <span className="badge text-bg-secondary">React</span>
                    <span className="badge text-bg-secondary">
                      JavaScript (ES6+)
                    </span>
                    <span className="badge text-bg-secondary">Bootstrap</span>
                    <span className="badge text-bg-secondary">SAAS</span>
                    <span className="badge text-bg-secondary">JSX</span>
                    <span className="badge text-bg-secondary">Redux</span>
                    <span className="badge text-bg-secondary">
                      React Router
                    </span>
                    <span className="badge text-bg-secondary">
                      Axios and Fetch API
                    </span>
                    <span className="badge text-bg-secondary">NPM</span>
                    <span className="badge text-bg-secondary">Hooks</span>
                    <span className="badge text-bg-secondary">Prettier</span>
                    <span className="badge text-bg-secondary">CI/CD Tools</span>
                    <span className="badge text-bg-secondary">
                      Third-Party Integrations
                    </span>
                  </div>
                  <p>
                    As a part-time Frontend Developer at{" "}
                    <span className="text-decoration-underline">
                      NinjaCloud
                    </span>
                    , based in Novi Sad, I collaborated with a team of
                    developers primarily from Montenegro on a greenfield project
                    called CyberLux. This project aimed to automate event
                    reservation processes and interface customization for
                    various client types.
                  </p>
                  <p>Key responsibilities included:</p>
                  <ul>
                    <li>
                      <b>Frontend Development Leadership:</b> Led frontend
                      efforts from inception, including setup, design, and
                      architecture.
                    </li>
                    <li>
                      <b>Team Collaboration:</b> Worked closely with teams in
                      Montenegro and Serbia to build the application from
                      scratch.
                    </li>
                    <li>
                      <b>Interface Design:</b> Enhanced user experience and
                      functionality through thoughtful interface design.
                    </li>
                    <li>
                      <b> Feature Implementation:</b> Added new features based
                      on client requirements and market trends.
                    </li>
                    <li>
                      <b> Backend Coordination:</b> Collaborated with the
                      backend team to ensure cohesive application architecture.
                    </li>
                    <li>
                      <b> Implemented Third-Party Authentication:</b>{" "}
                      Implemented JWT (JSON Web Token) authentication for AWS
                      services on the frontend, ensuring secure and efficient
                      user authentication and authorization.
                    </li>
                    <li>
                      <b> AWS Cognito Integration: </b>Integrated AWS Cognito
                      for seamless user authentication and registration,
                      utilizing AWS Amplify for frontend interaction and secure
                      token management.
                    </li>
                  </ul>
                  <p className="pt-3">
                    Working on CyberLux at NinjaCloud provided invaluable
                    experience in setting up and leading frontend development
                    for a new project, making critical design and architecture
                    decisions, and collaborating effectively with a distributed
                    team. This role not only enhanced my technical skills in
                    ReactJS but also strengthened my ability to deliver
                    innovative solutions in a dynamic and collaborative
                    environment.
                  </p>
                </li>
                <li className={styles.timelineEvent}>
                  <small className={"pb-2 pt-1 " + styles.timelineDate}>
                    2023
                  </small>
                  <b className="ibm-plex-serif-bold d-block mb-2 fs-5">
                    Frontend developer
                  </b>
                  <div className="d-flex align-items-center gap-2 pb-3 flex-wrap">
                    <span className="badge text-bg-secondary">Angular</span>
                    <span className="badge text-bg-secondary">TypeScript</span>
                    <span className="badge text-bg-secondary">Bootstrap</span>
                    <span className="badge text-bg-secondary">
                      RESTful APIs
                    </span>
                    <span className="badge text-bg-secondary">HTML/CSS</span>
                    <span className="badge text-bg-secondary">RxJS</span>
                    <span className="badge text-bg-secondary">Angular CLI</span>
                    <span className="badge text-bg-secondary">
                      Angular Material
                    </span>
                    <span className="badge text-bg-secondary">
                      Angular Forms
                    </span>
                    <span className="badge text-bg-secondary">HTTPClient</span>
                    <span className="badge text-bg-secondary">
                      Ngx-Translate
                    </span>
                    <span className="badge text-bg-secondary">NPM</span>
                    <span className="badge text-bg-secondary">Git</span>
                  </div>
                  <p>
                    As a member of the development team at{" "}
                    <span className="text-decoration-underline">
                      Uhura Solutions
                    </span>
                    , I played a small role in transforming the financial
                    automation software. Our software harnesses advanced AI and
                    ML technologies to enable banks and corporate clients to
                    efficiently manage large volumes of documentation.
                  </p>
                  <p>My responsibilities included:</p>
                  <ul>
                    <li>
                      <b>App Redesign:</b> Made the app look better and easier
                      to use.
                    </li>
                    <li>
                      <b> New Features:</b> Added cool features with Angular to
                      make the app faster and more functional.
                    </li>
                    <li>
                      <b>Architecture Planning:</b> Helped design the overall
                      structure of the app.
                    </li>
                    <li>
                      <b> Team Collaboration:</b> Solved problems in real-time
                      and continuously improved the software with a great team.
                    </li>
                  </ul>
                  <p className="pt-3">
                    Through this project, I gained insights into complex
                    technological components (AI, ML) into frontend
                    applications. Working in a dynamic team environment on
                    high-impact projects for users strengthened my abilities in
                    real-time problem-solving and continuous software
                    optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-12 py-4">
          <div
            id={styles.biography}
            className="row py-2  px-lg-5 px-md-4 px-sm-0 p bg-secondary text-white justify-content-center"
          >
            <div className="col col-xl-7 col-lg-9 col-md-10 col-sm-11 p-lg-5 p-md-4 p-sm-3 p-xs-2 text-lg-justify text-md-justify">
              <div className="lh-2">
                <b className="ibm-plex-serif-bold d-block fs-1 pb-lg-3 pb-md-3 pb-sm-1">
                  Biography
                </b>

                <p className="mb-0 fs-5 ibm-plex-serif-regular">
                  I&apos;m a frontend developer, specializing in creating
                  intuitive user interfaces and enhancing user experiences.
                  I&apos;ve collaborated on projects that range from startups to
                  large corporations, focusing on delivering impactful designs
                  and functionalities. My interest in frontend development began
                  early, sparked by a fascination with interactive technologies.
                  Outside of work, I enjoy writing, photography, pottery,
                  swimming, and designing — especially selecting designs before
                  diving into coding them.
                </p>
                <p className="fs-5 ibm-plex-serif-regular">
                  You can explore my work at{" "}
                  <a
                    href="/"
                    className="text-decoration-underline text-primary-subtle"
                  >
                    www.justanotheronesoftwareengineerr.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 pt-lg-3 pt-md-3 pt-sm-1 pb-lg-5 pb-md-5 pb-sm-2 d-lg-block d-md-block d-sm-none">
          <div className="mx-lg-4 mx-md-3 mx-sm-0">
            <p className="fs-1">Gallery</p>
            <div className="row py-2 align-items-center justify-content-around">
              <div className="col">
                <Image
                  src={Me1Image.src}
                  className="w-100 rounded"
                  alt="Budva, Montenegro"
                  layout="responsive"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className="col">
                <Image
                  src={Me2Image.src}
                  className="w-100 rounded"
                  alt="Private"
                  layout="responsive"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className="col">
                <Image
                  src={Me3Image.src}
                  className="w-100 rounded"
                  alt="Rome, Italy"
                  layout="responsive"
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
