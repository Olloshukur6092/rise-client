import React from "react";
import "./modal.css";
import cl from "../../assets/images/close.png";
import { Link, useLocation } from "react-router-dom";

const ModalNavbar = ({ close }) => {
  const { pathname } = useLocation  ();
  const splitPath = pathname.split("/");

  return (
    <div id="modal">
      <div className="modal-close bg-danger px-4">
        <img src={cl} alt="Close" onClick={close} />
      </div>
      <div className="modal-links">
        <ul className="navbar-nav">
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
                splitPath[1] === "about" ? "nav-link activeNav" : "nav-link"
              }
              to="/about"
            >
              Биз хакида
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitPath[1] === "contact" ? "nav-link activeNav" : "nav-link"
              }
              to="/contact"
            >
              Богланиш
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                splitPath[1] === "news" ? "nav-link activeNav" : "nav-link"
              }
              to="/news"
            >
              Янгиликлар
            </Link>
          </li>
        </ul>
      </div>
      <div className="modal-langs">
        <button id="lang-uzb">Uzb</button>
        <button id="lang-ru">Rus</button>
      </div>
      <div className="modal-contact">
        <p className="text-center">
          +998-(97)-221-3636 <br />
          <small className="">Murojat uchun</small>
        </p>
      </div>
    </div>
  );
};

export default ModalNavbar;
