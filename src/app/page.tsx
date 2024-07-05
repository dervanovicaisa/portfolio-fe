import Header from "./layout/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div
        className={`${styles.portfolioImage}
          d-flex flex-column align-items-end justify-content-center px-4`}
      >
        <div className="w-50">
          <p className={`${styles.intro} roboto-bold`}>
            I'am software engineer who builds immersive and user-friendly
            applications that users love.
          </p>
          <p className="roboto-light fs-4">
            Check out what{" "}
            <a
              href="https://ehereal-echoes.blogspot.com/"
              className="text-dark"
            >
              books
            </a>{" "}
            I'm reading, find me on{" "}
            <a
              href="https://www.linkedin.com/in/aisadervanovic/"
              className="text-dark"
            >
              LinkedIn
            </a>
            , or just send me{" "}
            <a href="mailto:dervanovicaisa@gmail.com" className="text-dark">
              an email
            </a>{" "}
            saying hi.
          </p>
          <div className={styles.colors}>
            <i className="bi bi-circle-fill fs-1 text-dark"></i>
            <i className="bi bi-circle-fill fs-1 mx-3 text-muted"></i>
            <i className="bi bi-circle-fill fs-1 text-secondary"></i>
          </div>
        </div>
      </div>
    </main>
  );
}
