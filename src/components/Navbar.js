import React from "react"; 
import "./Navbar.css";
import propTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="\#" style={{fontWeight:"bolder"}}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="\#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Coloured Background
              </a>
              <ul className="dropdown-menu">
                <li>
                  <option
                    className="dropdown-item"
                    onClick={props.changeg}
                    href="\#"
                  >
                    Green
                  </option>
                </li>
                <li>
                  <option
                    className="dropdown-item"
                    onClick={props.changer}
                    href="\#"
                  >
                    Red
                  </option>
                </li>
                <li>
                  <option
                    className="dropdown-item"
                    onClick={props.changey}
                    href="\#"
                  >
                    Yellow
                  </option>
                </li>
                <li>
                  <option
                    className="dropdown-item"
                    onClick={props.changep}
                    href="\#"
                  >
                    Purple
                  </option>
                </li>
              </ul>
            </li>
          </ul>
          <label for="theme" class="theme">
            <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Light
            </span>
            <span class="theme__toggle-wrap">
              <input
                id="theme"
                class="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                onClick={props.toggle}
              />
              <span class="theme__fill"></span>
              <span class="theme__icon">
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
              </span>
            </span>
            <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Dark
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};
