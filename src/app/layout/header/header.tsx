function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white p-4">
      <div className="container-fluid">
        <a className="navbar-brand ibm-plex-serif-bold fs-2" href="/">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label text-muted"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Chaos
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
