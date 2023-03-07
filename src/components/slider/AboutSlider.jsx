import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team2 from "../../assets/images/team2.png";
import Vec from "../../assets/images/vec.png";
import Next from "../../assets/images/next.png";
import Prev from "../../assets/images/prev.png";

const AboutSlider = () => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="team-carousel mt-3">
        <div className="row">
          <div className="col-12">
            <div className="carousel-icon float-end">
              <div className="icon-img my-2">
                <img
                  src={Prev}
                  onClick={prev}
                  className="pe-3 prev"
                  alt="Prev Icon"
                />
                <img
                  src={Next}
                  onClick={next}
                  className="next"
                  alt="Next Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider ref={sliderRef} {...settings}>
            <div className="col-md-4">
              <div className="card card-body border-0 d-flex p-4 me-2">
                <div className="d-flex justify-content-between">
                  <div className="team-img">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={Team2} alt="ss" />
                      </div>
                      <div className="col-md-9">
                        <p className="mb-0 text-capitalize text-white">
                          bahodir jalilov
                        </p>
                        <small>Menejer</small>
                      </div>
                    </div>
                  </div>
                  <div className="team-url pe-2 pt-2">
                    <img src={Vec} alt="Vector img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body border-0 d-flex p-4 me-2">
                <div className="d-flex justify-content-between">
                  <div className="team-img">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={Team2} alt="ss" />
                      </div>
                      <div className="col-md-9">
                        <p className="mb-0 text-capitalize text-white">
                          bahodir jalilov
                        </p>
                        <small>Menejer</small>
                      </div>
                    </div>
                  </div>
                  <div className="team-url pe-2 pt-2">
                    <img src={Vec} alt="Vector img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body border-0 d-flex p-4 me-2">
                <div className="d-flex justify-content-between">
                  <div className="team-img">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={Team2} alt="ss" />
                      </div>
                      <div className="col-md-9">
                        <p className="mb-0 text-capitalize text-white">
                          bahodir jalilov
                        </p>
                        <small>Menejer</small>
                      </div>
                    </div>
                  </div>
                  <div className="team-url pe-2 pt-2">
                    <img src={Vec} alt="Vector img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body border-0 d-flex p-4 me-2">
                <div className="d-flex justify-content-between">
                  <div className="team-img">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={Team2} alt="ss" />
                      </div>
                      <div className="col-md-9">
                        <p className="mb-0 text-capitalize text-white">
                          bahodir jalilov
                        </p>
                        <small>Menejer</small>
                      </div>
                    </div>
                  </div>
                  <div className="team-url pe-2 pt-2">
                    <img src={Vec} alt="Vector img" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutSlider;
