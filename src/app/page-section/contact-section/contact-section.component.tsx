function ContactSection() {
  return (
    <section className="p-lg-5 p-md-5 p-sm-3 m-auto bg-black text-light fs-5">
      <div className="row p-lg-5 p-md-5 p-sm-3">
        <div className="col col-lg-6 col-md-12 col-sm-12">
          <div className="p-lg-5 p-md-5 p-sm-3 bg-secondary">
            <b className="ibm-plex-serif-regular d-block fs-2">
              In my free time I am also:
            </b>
            <ul className="ibm-plex-serif-light pt-lg-4 pt-md-4 pt-sm-2 px-lg-5 px-md-5 px-sm-4">
              <li>Amateur photographer</li>
              <li>Amateur potter</li>
              <li>
                Filmophile; I{" "}
                <a
                  href="https://ehereal-echoes.blogspot.com/"
                  className="text-primary-subtle text-decoration-underline"
                >
                  write
                </a>{" "}
                about movies and tv shows that have made impression on me
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-lg-6 col-md-12 col-sm-12">
          <div className="p-lg-4 p-md-4 p-sm-2">
            <b className="ibm-plex-serif-regular d-block fs-2 pb-2">
              Want to talk?
            </b>
            <p className="ibm-plex-serif-light px-2 mb-sm-0">
              Feel free to send me{" "}
              <a
                href="mailto:dervanovicaisa@gmail.com"
                className="text-primary-subtle text-decoration-underline"
              >
                an email:
              </a>
            </p>
            <ul className="pt-lg-3 pt-sm-1 fs-5 pt-lg-4 pt-md-4 pt-sm-2 px-lg-5 px-md-5 px-sm-4">
              <li>If you want me to be a part of your project; freelancing,</li>
              <li>If you are interested to hire me, or</li>
              <li>Just wanna say hi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
