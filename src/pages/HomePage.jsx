import React from "react";
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
import HomeSlider from "../components/slider/HomeSlider";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <section id="home-section-1">
        <div className="container">
          <div className="row mb-2">
            <div className="col-lg-8 col-xl-7">
              <p className="header-1 mt-5">
                ДУНЕНИНГ ЕТАКЧИ МАХСУДОТЛАРИ БИЛАН РАКОБАТЛАША ОЛАДИГАН
                {/* {t('test')} */}
                <span className="green ms-2">ГИПСАКАРТОНЛАР</span>
              </p>
            </div>
            <div className="col-xl-1 d-xl-block d-lg-none"></div>
            <div className="col-lg-4 col-xl-4 d-flex align-items-end">
              <p className="header-2">
                Сифатни қадирлайдиганлар учун ишончли гипсакартонларни ҳаммаси
                “RISE GROUP”да мужассамлашган.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="home-section-img img-fluid"></div>
        </div>
        {/* <div className="container">
          <div className="home-card-class ">
            <div className="row mb-4 p-3 pb-0">
              <div className="col-md-4">
              <div className="card card-body sub-card-1">
                <div className="card-title">
                  12564+
                </div>
                <div className="card-subtitle">
                  хил махсулот
                </div>
              </div>
              </div>
              <div className="col-md-4">
              <div className="card card-body sub-card-1">
                <div className="card-title">
                  12564+
                </div>
                <div className="card-subtitle">
                  хил махсулот
                </div>
              </div>
              </div>
              <div className="col-md-4">
              <div className="card card-body sub-card-1">
                <div className="card-title">
                  12564+
                </div>
                <div className="card-subtitle">
                  хил махсулот
                </div>
              </div>
              </div>
            </div>
            <div className="row mb-5 p-3 pt-0">
              <div className="col-md-6">
                <div className="card sub-card-2">
                  <div className="card-header">
                    лорем ипсум долор сит амет cонсeт
                  </div>
                  <div className="card-body">
                    Лорем ипсум долор сит амет cонсеcтетур. Амет нунc алиқуам феугиат арcу лорем эст. Ин а проин темпус эрат. Фаcилис.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card sub-card-2">
                  <div className="card-header">
                    лорем ипсум долор сит амет cонсeт
                  </div>
                  <div className="card-body">
                    Лорем ипсум долор сит амет cонсеcтетур. Амет нунc алиқуам феугиат арcу лорем эст. Ин а проин темпус эрат. Фаcилис.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section id="home-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-2">
                <span className="small">Сизда куйидаги муоммолар бўлган</span>
              </p>
              <p className="header-3 mt-0">
                Хорижий мамлакатлар билан рақобатлаша оладиган маҳсулотимизнинг
                асосий афзалликлари қуйидагилардан иборат
              </p>
            </div>
          </div>
          <div className="row mb-4 green-cards">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <img src="" alt="corusel rasm 1" />
                </div>
                <div className="card-body">3</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-green">
                <div className="card-header">
                  <img src="" alt="corusel rasm 1" />
                </div>
                <div className="card-body">2</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <img src="" alt="corusel rasm 1" />
                </div>
                <div className="card-body">3</div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card card-green">
                <div className="card-header">
                  <img src="" alt="corusel rasm 1" />
                </div>
                <div className="card-body">3</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <img src="" alt="corusel rasm 1" />
                </div>
                <div className="card-body">2</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-green">
                <div className="card-header">
                  <img src="" alt="corusel rasm 1" />
                </div>
                <div className="card-body">3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section id="carousel-section" className="py-5">
        <div className="container">
          <div className="carousel-section-text">
            <h2 className="text-uppercase">
              қуйидаги кўрсатилган муоммоларга берилган йечимларни кўриб
              чиқишингиз мумкин
            </h2>
          </div>
        </div>
        <div className="container">
            <HomeSlider />
        </div>
      </section>

      {/* Afzalliklar */}
      <section id="home-section-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-2">
                <span className="small">Афзалликларимиз</span>
              </p>
              <p className="header-3 mt-0">
                Хорижий мамлакатлар билан рақобатлаша оладиган маҳсулотимизнинг
                асосий афзалликлари қуйидагилардан иборат
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
                    <p className="card-title">Мустаҳкам материал</p>
                    <p className="card-subtitle">
                      Халқаро талабларга бемалол жавоб берадиган гипсакартонлар
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
                    <p className="card-title">Намга чидамлилик</p>
                    <p className="card-subtitle">
                      Гипсокартонларимиз намга ўта чидамли қилиб яратилган
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
                    <p className="card-title">Овоз изолятсия</p>
                    <p className="card-subtitle">
                      Бизнинг маҳсулотларимиз овоз изолятсиясига эга
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
                    <p className="card-title">Экологик тоза</p>
                    <p className="card-subtitle">
                      Гипсокартонларимиз экологик тоза маҳсулот ҳисобланади
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
                    <p className="card-title"> Ўтда ёнмаслиги</p>
                    <p className="card-subtitle">
                      Ўтда ёнмайдиган гипсокартон “RISE”дан қарши олинг
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gipsakartonlar haqida */}

      <section id="home-section-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
                <span className="small">Гипсакартон ҳақида</span>
              </p>
              <p className="header-3 mt-0">
                Гипсакартонлар ҳақида қуйидаги видеоларимиз Орқали батафсил
                ма’лумот олишингиз мумкин
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
        </div>
      </section>

      {/* Gipsakartonlar */}
      <section id="home-section-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
                <span className="small">Гипсакартонлар</span>
              </p>
              <p className="header-3 mt-0">
                Гипсакартонларимиз қуйидагилардан иборат Бўлиб сиз мақулини
                танлашингиз мумкин
              </p>
            </div>
          </div>
          <div className="row mb-5">
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
                        <span className="width-sm">Эни</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="background"></div>
                        <span className="width-sm">Ранги</span>
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
                        <span className="width-sm">Қалинлиги</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector6} alt="ss" className="img-fluid" />{" "}
                          250sm
                        </div>
                        <span className="width-sm">Бўйи</span>
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
                        <span className="width-sm">Эни</span>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="background"></div>
                        <span className="width-sm">Ранги</span>
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
                        <span className="width-sm">Қалинлиги</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector6} alt="ss" className="img-fluid" />{" "}
                          250sm
                        </div>
                        <span className="width-sm">Бўйи</span>
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
                        <span className="width-sm">Эни</span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="background"></div>
                        <span className="width-sm">Ранги</span>
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
                        <span className="width-sm">Қалинлиги</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 mb-3">
                      <div className="sm px-2 d-flex align-items-center justify-content-between">
                        <div className="sm-img">
                          <img src={Vector6} alt="ss" className="img-fluid" />{" "}
                          250sm
                        </div>
                        <span className="width-sm">Бўйи</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <p className="mb-2">
                <span className="small">Янгиликлар</span>
              </p>
              <p className="header-3 mt-0">
                RISE Group ҳақида энг сўнгги янгиликларни айнан бизнинг
                платформаси орқали билиб олинг
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card card-body p-0 border-0 mb-2">
                <div className="news-image position-relative">
                  <img src="" className="img-fluid w-100 h-100" alt="N8" />
                  <div className="news-back position-absolute">
                    <div className="news-text position-absolute bottom-0 p-3">
                      <div className="news-date d-flex align-items-center">
                        <div className="news-date-img me-2">
                          <img src="" alt="date" />
                        </div>
                        <small>27-fevral, 2023</small>
                      </div>
                      <div className="news-title text-white">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container"></div> */}
    </div>
  );
};

export default HomePage;
