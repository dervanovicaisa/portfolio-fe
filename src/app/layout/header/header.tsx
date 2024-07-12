"use client";
import { useState } from "react";

interface HeaderProps {
  showBlackHole: boolean;
  setShowBlackHole: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ showBlackHole, setShowBlackHole }) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setShowBlackHole(!showBlackHole);
    setChecked(!checked);
  };
  return (
    <div>
      <nav
        className={
          showBlackHole
            ? "navbar navbar-expand-lg bg-black p-lg-4 p-sm-2"
            : "navbar navbar-expand-lg bg-white p-lg-4 p-sm-2"
        }
      >
        <div className="container-fluid align-items-center">
          <a className="navbar-brand ibm-plex-serif-bold fs-2" href="/">
            Portfolio
          </a>
          <div
            className="justify-content-end position-relative z-3"
            id="navbarText"
          >
            <div className="form-check d-flex align-items-center justify-content-center form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={checked}
                id="flexSwitchCheckDefault"
                onChange={() => handleCheckboxChange()}
              />
              <label
                className={
                  showBlackHole
                    ? "form-check-label text-light mx-1"
                    : "form-check-label text-muted mx-1"
                }
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Chaos
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
