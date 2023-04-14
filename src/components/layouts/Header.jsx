import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/Logo.png";
import { useTranslation } from "react-i18next";
import ham from "../../assets/images/hamburger.png";
import ModalNavbar from "./ModalNavbar";

const Header = () => {
  //  const language = 'uzb';
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  }

  return (
    <>
      {modal ? <ModalNavbar close={closeModal} /> : ""}

      <nav className="navbar navbar-expand-lg bg-white border-bottom container">
        <div className="container">
          <Link to="/" className="navbar-brand me-5">
            <img src={Logo} alt="Logo" width="120" height="34" />
          </Link>
          <div id="hamburger" className="d-lg-none">
            <img src={ham} alt="Ham" onClick={showModal} />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="pages me-3">
              <ul className="navbar-nav mb-2 rounded w-100">
                <li className="nav-item">
                  <Link
                    className={
                      splitPath[1] === "" ? "nav-link activeNav" : "nav-link"
                    }
                    to="/"
                  >
                    Бош сахифа
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      splitPath[1] === "about"
                        ? "nav-link activeNav"
                        : "nav-link"
                    }
                    to="/about"
                  >
                    Биз хакида
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      splitPath[1] === "contact"
                        ? "nav-link activeNav"
                        : "nav-link"
                    }
                    to="/contact"
                  >
                    Богланиш
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      splitPath[1] === "news"
                        ? "nav-link activeNav"
                        : "nav-link"
                    }
                    to="/news"
                  >
                    Янгиликлар
                  </Link>
                </li>
              </ul>
            </div>
            <div className="languages">
              <ul className="navbar-nav me-auto mb-2 rounded w-100">
                <li className="nav-item">
                  <button className="btn " onClick={() => handleClick("uzb")}>Uzb</button>
                </li>
                <li className="nav-item">
                  <button className="btn " onClick={() => handleClick("ru")}>Ru</button>
                </li>
              </ul>
            </div>
            <div className="contact ms-auto">
              <p>
                +998-(97)-221-3636 <br />
                <small className="smal">Murojat uchun</small>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
