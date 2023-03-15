import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
 const lang = 'uzb';
  const {pathname} = useLocation();
  const splitPath = pathname.split('/');

  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom container">
      <div className="container">
        <Link to="/" className="navbar-brand me-5">
          <img src={Logo} alt="Logo" width="120" height="34" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="pages me-3">
            <ul className="navbar-nav mb-2 rounded w-100">
              <li className="nav-item">
                <Link className={splitPath[1] === "" ? "nav-link activeNav" : "nav-link"} to="/">
                  Бош сахифа
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitPath[1] === "about" ? "nav-link activeNav" : "nav-link"} to="/about">
                  Биз хакида
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitPath[1] === "contact" ? "nav-link activeNav" : "nav-link"} to="/contact">
                  Богланиш
                </Link>
              </li>
              <li className="nav-item">
                <Link className={splitPath[1] === "news" ? "nav-link activeNav" : "nav-link"} to="/news">
                  Янгиликлар
                </Link>
              </li>
            </ul>
          </div>
          <div className="languages">
            <ul className="navbar-nav me-auto mb-2 rounded w-100">
              <li className="nav-item">
                <Link className={lang === "uzb" ? "nav-link activeLang" : "nav-link"} to="/uzb">
                  Узб
                </Link>
              </li>
              <li className="nav-item">
                <Link className={lang === "rus" ? "nav-link activeLang" : "nav-link"} to="/rus">
                  Рус
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <p>
            +998-(97)-221-3636 <br />
            <small className="smal">Murojat uchun</small>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
