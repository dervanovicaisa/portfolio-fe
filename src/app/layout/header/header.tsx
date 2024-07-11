function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white p-lg-4 p-sm-2">
      <div className="container-fluid">
        <a className="navbar-brand ibm-plex-serif-bold fs-2" href="/">
          Portfolio
        </a>
        <div className="justify-content-end" id="navbarText">
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
