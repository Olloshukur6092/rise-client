import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import Vec from "../../assets/social-media/Vector.png";
import Vec1 from "../../assets/social-media/Vector1.png";
import Vec2 from "../../assets/social-media/Vector2.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className=" col-md-2 col-lg-2 col-xl-2">
              <div className="footer-img d-flex w-100 h-100 align-items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="img-fluid"
                  width={120}
                  height={34}
                />
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5">
              <ul className="nav">
                <li className="nav-item me-1">
                  <Link to={"/"} className="nav-link">
                    Бош сахифа
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <Link to={"/about"} className="nav-link">
                    Биз хакда
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <Link to={"/contact"} className="nav-link">
                    Богланиш
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <Link to={"/news"} className="nav-link">
                    Янгиликлар
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-5">
              <div className="d-flex align-items-center w-100 h-100 justify-content-end">
                <img className="me-3" src={Vec} alt="vec" />
                <img className="me-3" src={Vec1} alt="vec1" />
                <img className="me-3" src={Vec2} alt="vec2" />
                <p className="ft-header mt-0 mb-0">
                  Urganch shahar, Sanoatchilar ko‘chasi 9-B uy
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
