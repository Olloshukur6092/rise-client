import React, { useRef } from "react";
import icon from "../../assets/news/icon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NewsSlider = ({ news }) => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="row position-relative">
      <Slider ref={sliderRef} {...settings}>
        {news.length > 0
          ? news.map((n) => (
              <div className="col-md-2" key={n.id}>
                <div className="card card-body p-0 border-0 me-3">
                  <Link to={`/news/${n.id}`}>
                    <div className="img-card position-relative">
                      <img
                        src={n.image}
                        alt={n.id}
                        className="img-fluid w-100 h-100"
                      />
                      <div className="text-card position-absolute bottom-0 w-100">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          : ""}
      </Slider>
      <div className="carousel-icon">
        <div className="icon">
          <img src={icon} alt="Icon" onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
