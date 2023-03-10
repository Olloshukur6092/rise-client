import React from "react";
import AboutSlider from "../components/slider/AboutSlider";
import "./css/about.css";
import Play from "../assets/images/play.png";

const AboutPage = () => {
  return (
    <>
      <section id="hero-section">
        <div className="hero-img">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-2">
                <div className="about-us">
                  <h1 className="text-white">Biz Haqimizda</h1>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="about-text">
                  <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Blanditiis, animi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card card-body border-0">
                  <div className="card-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, recusandae!
                  </div>
                  <div className="card-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nemo esse sapiente quas. Consectetur amet aut beatae
                    deleniti architecto neque?
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card card-body border-0">
                  <div className="card-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, recusandae!
                  </div>
                  <div className="card-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nemo esse sapiente quas. Consectetur amet aut beatae
                    deleniti architecto neque?
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card card-body border-0">
                  <div className="card-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, recusandae!
                  </div>
                  <div className="card-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nemo esse sapiente quas. Consectetur amet aut beatae
                    deleniti architecto neque?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video-banner mt-5">
        <div className="container">
          <div className="video">
            <div className="video-text d-flex justify-content-between text-white p-4">
              <div className="h1-text text-uppercase">
                Videoda Rise haqida batafsil ma’lumot berilgan
              </div>
              <div className="p-text">Video davomiyligi: 4 daqiqa</div>
            </div>
            <div className="video-icon">
              <img src={Play} alt="play video" />
            </div>
          </div>
          <p className="mt-2">“RISE” kompaniyasi haqida video:</p>
        </div>
      </section>

      <section id="teams" className="mt-4">
        <div className="container">
          <div className="row">
            <div className="team-text col-md-12">
              <p className="mb-0 d-flex">
                <span className="team-title text-uppercase me-5">Jamoamiz</span>
                <span className="team-span text-uppercase">
                  jamoamiz haqida yaqindan tanishingiz
                </span>
              </p>
              <p className="team-p text-uppercase">uchun biz tanishtiramiz</p>
            </div>
          </div>
          <AboutSlider />
          <div className="team">
            <div className="row">
              <div className="col-md-4">
                <div className="card border-0 img-center"></div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 img-top"></div>
              </div>
              <div className="col-md-4">
                <div className="card card-body border-0 card-center-text">
                  <div className="card-title">
                    <h3>O‘rnatish uchun qulay bo‘lgan mahsulotlar</h3>
                  </div>
                  <div className="card-subtitle">
                    <p>
                      Bizning jahonga mashhur brend kompaniyalari tomonidan
                      ishlab chiqarilgan gipsokarton mahsulotlari bilan bemalol
                      raqobatlasha oladigan sifatli gipsokartonlarimiz o‘rnatish
                      uchun juda ham qulay hisoblanadi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
