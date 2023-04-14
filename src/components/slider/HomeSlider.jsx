import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gips0 from "../../assets/images/gips0.jpeg";
import gips1 from "../../assets/images/gips1.jpeg";
import gips2 from "../../assets/images/gips2.jpeg";
import gips3 from "../../assets/images/gips3.jpg";
import Next from "../../assets/images/next.png";
import Prev from "../../assets/images/prev.png";

const HomeSlider = () => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    infinite: true,
    centerMode: true,
    arrows: false,
    centerPadding: "-80px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    <div className="row">
      <div className="col-12 text-end">
        <div className="slider-icons mb-1">
          <img src={Prev} alt="Prev" className="me-3" onClick={prev} style={{ cursor: 'pointer' }} />
          <img src={Next} alt="Next" onClick={next} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="col-md-6">
          <div className="card card-body border-0 p-0 me-2">
            <img
              src={gips0}
              alt="Not Found"
              className="img-fluid w-100 h-100 rounded-2"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body border-0 p-0 me-2">
            <img
              src={gips1}
              alt="Not Found"
              className="img-fluid w-100 h-100 rounded-2"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body border-0 p-0 me-2">
            <img
              src={gips2}
              alt="Not Found"
              className="img-fluid w-100 h-100 rounded-2"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body border-0 p-0 me-2">
            <img
              src={gips3}
              alt="Not Found"
              className="img-fluid w-100 h-100 rounded-2"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
