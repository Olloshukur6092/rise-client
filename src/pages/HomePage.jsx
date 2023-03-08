import React from "react";
import Image1 from "../assets/images/image1.png";
import Vector from "../assets/vectors-1/Vector.png";
import Vector1 from "../assets/vectors-1/Vector1.png";
import Vector2 from "../assets/vectors-1/Vector2.png";
import Vector3 from "../assets/vectors-1/Vector3.png";
import Vector4 from "../assets/vectors-1/Vector4.png";
import Vector5 from "../assets/vectors-2/Vector5.png";
import Vector6 from "../assets/vectors-2/Vector6.png";
import Vector7 from "../assets/vectors-2/Vector7.png";
import Rectangle from "../assets/images/Rectangle1.png";
import Rectangle7 from "../assets/images/Rectangle7.png";
import "./css/home.css";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <section id="home-section-1">
          <div className="row mt-2 mb-3">
            <div className="col-md-5">
              <p className="header-1 mt-5">
                ДУНЙОНИНГ ЕТАКЧИ МАХСУЛОТЛАРИ БИЛАН РАКОБАЛАША ОЛАДИГАН
                <span className="green">ГИПСАКАРТОНЛАР</span>
              </p>
            </div>
            <div className="col-md-2" />
            <div className="col-md-4">
              <p className="header-2 ms-5">
                Sifatni qadirlaydiganlar uchun ishonchli gipsakartonlarni
                hammasi “RISE GROUP”da mujassamlashgan.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12 mb-5">
              <img src={Image1} alt="ss" />
            </div>
          </div>
        </section>
        <section id="home-section-2">
          <div className="row">
            <div className="col-md-10">
              <p className="header-3 mb-0">
                <span className="small">Afzalliklarimiz</span>
                Xorijiy mamlakatlar bilan raqobatlasha
              </p>
              <p className="header-3 mt-0">
                oladigan mahsulotimizning asosiy afzalliklari quyidagilardan
                iborat
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 pb-5 ps-5">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector1} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 pb-5 ps-5">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector2} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 pb-5 ps-5">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector3} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 pb-5 ps-5">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
            <div className="col-md-4">
              <div className="card">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector4} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 pb-5 ps-5">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-section-3">
          <div className="row">
            <div className="col-md-10">
              <p className="header-3 mb-0">
                <span className="small">Afzalliklarimiz</span>
                Xorijiy mamlakatlar bilan raqobatlasha
              </p>
              <p className="header-3 mt-0">
                oladigan mahsulotimizning asosiy afzalliklari quyidagilardan
                iborat
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card v-card">
                <img src={Rectangle} alt="ss" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card v-card">
                <img src={Rectangle} alt="ss" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card v-card">
                <img src={Rectangle} alt="ss" />
              </div>
            </div>
          </div>
        </section>
        <section id="home-section-4">
          <div className="row">
            <div className="col-md-10">
              <p className="header-3 mb-0">
                <span className="small">Afzalliklarimiz</span>
                Xorijiy mamlakatlar bilan raqobatlasha
              </p>
              <p className="header-3 mt-0">
                oladigan mahsulotimizning asosiy afzalliklari quyidagilardan
                iborat
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card crd-2">
                <div className="card-body">
                  <img className="img-fluid img" src={Rectangle7} alt="ss" />
                  lorem ipsum dolor sit amet consectetur
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="sm px-2">
                        <img src={Vector5} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector6} alt="ss" />4 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector7} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        4 sm <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card crd-2">
                <div className="card-body">
                  <img className="img-fluid img" src={Rectangle7} alt="ss" />
                  lorem ipsum dolor sit amet consectetur
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="sm px-2">
                        <img src={Vector5} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector6} alt="ss" />4 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector7} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        4 sm <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card crd-2">
                <div className="card-body">
                  <img className="img-fluid img" src={Rectangle7} alt="ss" />
                  lorem ipsum dolor sit amet consectetur
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="sm px-2">
                        <img src={Vector5} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector6} alt="ss" />4 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector7} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        4 sm <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card crd-2">
                <div className="card-body">
                  <img className="img-fluid img" src={Rectangle7} alt="ss" />
                  lorem ipsum dolor sit amet consectetur
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="sm px-2">
                        <img src={Vector5} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector6} alt="ss" />4 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector7} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        4 sm <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card crd-2">
                <div className="card-body">
                  <img className="img-fluid img" src={Rectangle7} alt="ss" />
                  lorem ipsum dolor sit amet consectetur
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="sm px-2">
                        <img src={Vector5} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector6} alt="ss" />4 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector7} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        4 sm <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card crd-2">
                <div className="card-body">
                  <img className="img-fluid img" src={Rectangle7} alt="ss" />
                  lorem ipsum dolor sit amet consectetur
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="sm px-2">
                        <img src={Vector5} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector6} alt="ss" />4 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="sm px-2">
                        <img src={Vector7} alt="ss" />2 sm{" "}
                        <span className="small float-end">eni</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="sm px-2">
                        4 sm <span className="small float-end">eni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
