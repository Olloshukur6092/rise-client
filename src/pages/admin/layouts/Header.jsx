import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../../../assets/images/Logo.png";
import { LOG_OUT } from "../../../redux/constants/authConstant";

const Header = () => {
  //   const { pathname } = useLocation();
  //   const splitPath = pathname.split("/");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("user");
    dispatch({ type: LOG_OUT });
    navigate("/admin/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to={"/admin/news"}>
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
              <Link className="nav-link" to={"/admin/news"}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin/create"}>
                Add News
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-dark" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header };
