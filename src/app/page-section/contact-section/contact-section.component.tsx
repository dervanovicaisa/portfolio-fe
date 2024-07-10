function ContactSection() {
  return (
    <section className="p-5 m-auto bg-black text-light fs-5">
      <div className="row p-5">
        <div className="col">
          <div className="p-5 bg-secondary">
            <b className="ibm-plex-serif-regular d-block fs-2">
              In my free time I am also:
            </b>
            <ul className="ibm-plex-serif-light pt-4">
              <li>Amateur photographer</li>
              <li>Amateur potter</li>
              <li>
                Filmophile; I write about movies and tv shows that have made
                impession on me
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="p-4">
            <b className="ibm-plex-serif-regular d-block fs-2 pb-2">
              Want to talk?
            </b>
            <p className="ibm-plex-serif-light px-2">
              Feel free to send me{" "}
              <a
                href="mailto:dervanovicaisa@gmail.com"
                className="text-primary-subtle text-decoration-underline"
              >
                an email:
              </a>
            </p>
            <ul className="pt-3">
              <li>If you want a future bussines with me</li>
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
