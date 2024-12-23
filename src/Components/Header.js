import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm px-3">
      <div className="container-fluid">
        {/* Hamburger Menu */}
        <button className="btn btn-light me-2">
          <i className="bi bi-list"></i>
        </button>

        {/* Search Bar */}
        <div className="flex-grow-1">
          <div className="input-group">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="d-flex align-items-center">
          {/* Notifications */}
          <button className="btn btn-light position-relative me-3">
            <i className="bi bi-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              6
            </span>
          </button>

          {/* Language Selector */}
          <div className="dropdown me-3">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                className="me-2"
                style={{ width: "24px" }}
              />
              English
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button className="dropdown-item">
                  <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Spanish"
                    className="me-2"
                    style={{ width: "24px" }}
                  />
                  Spanish
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  <img
                    src="https://flagcdn.com/w40/fr.png"
                    alt="French"
                    className="me-2"
                    style={{ width: "24px" }}
                  />
                  French
                </button>
              </li>
            </ul>
          </div>

          {/* User Profile */}
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center"
              type="button"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://via.placeholder.com/32"
                alt="User Avatar"
                className="rounded-circle me-2"
              />
              <div className="text-start">
                <strong>Moni Roy</strong>
                <div className="text-muted small">Admin</div>
              </div>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <button className="dropdown-item">Profile</button>
              </li>
              <li>
                <button className="dropdown-item">Settings</button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
