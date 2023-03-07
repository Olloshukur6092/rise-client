import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/Logo.png";

const Header = () => {

  const [active, setActive] = useState("home");

  const handleNavbarActive = (e) => {
    setActive(e.target.id);
  }

  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom container">
      <div className="container">
        <Link to="/" className="navbar-brand me-5">
          <img
            src={Logo}
            alt="Logo"
            width="120"
            height="34"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="pages me-3">
            <ul className="navbar-nav mb-2 rounded w-100">
              <li className={ active === "home" ? "nav-item activeNav" : "nav-item"} onClick={handleNavbarActive} >
                <Link id="home" className="nav-link" to="/">Бош сахифа</Link>
              </li>
              <li className={ active === "about" ? "nav-item activeNav" : "nav-item"} onClick={handleNavbarActive} >
                <Link id="about" className="nav-link" to="/about">Биз хакида</Link>
              </li>
              <li className={ active === "contact" ? "nav-item activeNav" : "nav-item"} onClick={handleNavbarActive} >
                <Link id="contact" className="nav-link" to="/contact">Богланиш</Link>
              </li>
              <li className={ active === "news" ? "nav-item activeNav" : "nav-item"} onClick={handleNavbarActive} >
                <Link id="news" className="nav-link" to="/news">Янгиликлар</Link>
              </li>
            </ul>
          </div>
          <div className="languages">
            <ul className="navbar-nav me-auto mb-2 rounded w-100">
              <li className="nav-item activ">
                <Link className="nav-link" to="/uzb">Узб</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rus">Рус</Link>
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
