function Footer() {
  return (
    <footer className="bg-light text-dark ibm-plex-serif-regular py-4 px-5">
      <div className="w-50 m-auto lh-2">
        <p className="pb-0 mb-0 text-center text-monospace">
          Website designed and built with love by{" "}
          <span className="text-decoration-underline">Aisa Dervanovic </span>
        </p>
        <p className="pb-0 mb-0 text-center text-monospace">
          Follow me via:{" "}
          <a
            href="https://www.linkedin.com/in/aisadervanovic/"
            className="text-dark text-decoration-underline text-indigo"
          >
            LinkedIn
          </a>
          ,
          <a
            href="https://github.com/dervanovicaisa"
            className="text-dark text-decoration-underline text-indigo"
          >
            {" "}
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
