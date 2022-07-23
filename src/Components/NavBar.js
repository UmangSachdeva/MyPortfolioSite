import React, { Component } from "react";
import logo from "../Resources/icons8-u-100.png";
import "./NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import pdf from "../Resources/UMANG SACHDEVA.pdf";

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top bg-white navbar-expand-lg">
        <div className="container navbar-wrapper">
          <Link activeClass="active-custom" to="home" spy={true} offset={-210}>
            <a className="navbar-brand " href="/">
              <img src={logo} alt="" width="50" />
            </a>
          </Link>
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
          <div className="nav-menu-two">
            <div
              className="navlinks collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    activeClass="active-custom"
                    to="home"
                    spy={true}
                    offset={-210}
                  >
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active-custom"
                    to="AboutMe"
                    spy={true}
                    smooth={true}
                    duration={-500}
                  >
                    <a className="nav-link" href="#">
                      About Me
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link spy={true} to="MyProject" smooth={true} duration={-500}>
                    <a className="nav-link" href="#">
                      My Projects
                    </a>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact Me
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="mailto: umang965454@gmail.com"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://github.com/KINGCODDER"
                        target="_blank"
                      >
                        Git Hub
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.linkedin.com/in/umang-sachdeva-66aa82220/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    class="btn btn-primary download-resume rounded-0"
                    href={pdf}
                    download={"umang sachdeva"}
                    role="button"
                  >
                    MY RESUME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
