function Footer() {
  return (
    <footer className="bg-white text-dark ibm-plex-serif-regular py-3 px-5">
      <div className="w-50 m-auto lh-2">
        <p className="pb-0 mb-0 text-center text-monospace">
          Website designed and built with &hearts; by <b>Aisa Dervanovic. </b>
          Follow me via:{" "}
          <a
            href="https://www.linkedin.com/in/aisadervanovic/"
            className="text-indigo"
          >
            LinkedIn <i className="bi bi-linkedin"></i>
          </a>
          ,
          <a href="https://github.com/dervanovicaisa" className="text-indigo">
            {" "}
            GitHub <i className="bi bi-github"></i>
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
