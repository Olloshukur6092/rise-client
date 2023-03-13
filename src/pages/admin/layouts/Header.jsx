import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";

const Header = () => {
  //   const { pathname } = useLocation();
  //   const splitPath = pathname.split("/");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to={'/admin/news'}>
          <img src={Logo} alt="Logo" />
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/admin/news'}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/admin/create'}>
                Add News
              </Link>
            </li>
            
          </ul>
          <ul className="navbar-nav">
          <li className="nav-item">
              <button className="btn btn-dark">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export {Header};
