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
import { useTranslation } from "react-i18next";

const HomePage = () => {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="container">
        <section id="home-section-1">
          <div className="row mb-2">
            <div className="col-lg-8 col-xl-7">
              <p className="header-1 mt-5">
                ДУНЕНИНГ ЕТАКЧИ МАХСУДОТЛАРИ БИЛАН РАКОБАТЛАША ОЛАДИГАН
                <span className="green">ГИПСАКАРТОНЛАР</span>
              </p>
            </div>
            <div className="col-xl-1 d-xl-block d-lg-none"></div>
            <div className="col-lg-4 col-xl-4 d-flex align-items-end">
              <p className="header-2">
                Sifatni qadirlaydiganlar uchun ishonchli gipsakartonlarni
                hammasi “RISE GROUP”da mujassamlashgan.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12 mb-5">
              <img src={Image1} alt="ss" className="img-fluid w-100 h-100" />
            </div>
          </div>
        </section>
        <section id="home-section-2">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-2">
                <span className="small">Afzalliklarimiz</span>
              </p>
              <p className="header-3 mt-0">
                Xorijiy mamlakatlar bilan raqobatlasha oladigan mahsulotimizning
                asosiy afzalliklari quyidagilardan iborat
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 col-sm-6">
              <div className="card mb-3">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 p-xxl-5 pb-xl-5 ps-xl-3 p-lg-2 pb-md-3 pb-sm-3 pe-sm-1 pb-3 ps-1">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-3">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector1} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 p-xxl-5 pb-xl-5 ps-xl-3 p-lg-2 pb-md-3 pb-sm-3 pe-sm-1 pb-3 ps-1">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-3">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector2} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 p-xxl-5 pb-xl-5 ps-xl-3 p-lg-2 pb-md-3 pb-sm-3 pe-sm-1 pb-3 ps-1">
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
            <div className="col-md-4 col-sm-6">
              <div className="card mb-3">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector3} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 p-xxl-5 pb-xl-5 ps-xl-3 p-lg-2 pb-md-3 pb-sm-3 pe-sm-1 pb-3 ps-1">
                    <p className="card-title">Mustahkam material</p>
                    <p className="card-subtitle">
                      Xalqaro talablarga bemalol javob beradigan gipsakartonlar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-md-block d-sm-none" />
            <div className="col-md-4 col-sm-6">
              <div className="card mb-3">
                <div className="card-header border-0">
                  <img className="px-3 py-3" src={Vector4} alt="ss" />
                </div>
                <div className="card-body text-white position-relative">
                  <div className="position-absolute bottom-0 p-xxl-5 pb-xl-5 ps-xl-3 p-lg-2 pb-md-3 pb-sm-3 pe-sm-1 pb-3 ps-1">
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
            <div className="col-md-12">
              <p className="mb-0">
                <span className="small">Afzalliklarimiz</span>
              </p>
              <p className="header-3 mt-0">
                Xorijiy mamlakatlar bilan raqobatlasha oladigan mahsulotimizning
                asosiy afzalliklari quyidagilardan iborat
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 col-6">
              <div className="card border-0 mb-2">
                <img src={Rectangle} alt="ss" />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="card border-0 mb-2">
                <img src={Rectangle} alt="ss" />
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="card border-0 mb-2">
                <img src={Rectangle} alt="ss" />
              </div>
            </div>
          </div>
        </section>
        <section id="home-section-4">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
                <span className="small">Afzalliklarimiz</span>
              </p>
              <p className="header-3 mt-0">
                Xorijiy mamlakatlar bilan raqobatlasha oladigan mahsulotimizning
                asosiy afzalliklari quyidagilardan iborat
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 mb-3">
                <div className="card-body p-0">
                  <img
                    className="img-fluid h-100 w-100"
                    src={Rectangle7}
                    alt="ss"
                  />
                  <div className="img-p pt-3 ps-3 p-md-2">
                    <p>lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-footer border-0">
                  <div className="row">
                    <div className="col-sm-6 col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector5} alt="ss" className="img-fluid" />{" "}
                          200sm
                        </div>
                        <span className="width-sm">eni</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="background"></div>
                        <span className="width-sm">rangi</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector7} alt="ss" className="img-fluid" />{" "}
                          12.5mm
                        </div>
                        <span className="width-sm">qalinligi</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector6} alt="ss" className="img-fluid" />{" "}
                          250sm
                        </div>
                        <span className="width-sm">bo'yi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 mb-3">
                <div className="card-body p-0">
                  <img
                    className="img-fluid h-100 w-100"
                    src={Rectangle7}
                    alt="ss"
                  />
                  <div className="img-p pt-3 ps-3">
                    <p>lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-footer border-0">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector5} alt="ss" className="img-fluid" />{" "}
                          200sm
                        </div>
                        <span className="width-sm">eni</span>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="background"></div>
                        <span className="width-sm">rangi</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector7} alt="ss" className="img-fluid" />{" "}
                          12.5mm
                        </div>
                        <span className="width-sm">qalinligi</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector6} alt="ss" className="img-fluid" />{" "}
                          250sm
                        </div>
                        <span className="width-sm">bo'yi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 mb-3">
                <div className="card-body p-0">
                  <img
                    className="img-fluid h-100 w-100"
                    src={Rectangle7}
                    alt="ss"
                  />
                  <div className="img-p pt-3 ps-3">
                    <p>lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-footer border-0">
                  <div className="row">
                    <div className="col-sm-6 col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector5} alt="ss" className="img-fluid" />{" "}
                          200sm
                        </div>
                        <span className="width-sm">eni</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="background"></div>
                        <span className="width-sm">rangi</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector7} alt="ss" className="img-fluid" />{" "}
                          12.5mm
                        </div>
                        <span className="width-sm">qalinligi</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector6} alt="ss" className="img-fluid" />{" "}
                          250sm
                        </div>
                        <span className="width-sm">bo'yi</span>
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
