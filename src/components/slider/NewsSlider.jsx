import React, { useEffect, useRef } from "react";
import icon from "../../assets/news/icon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { http } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_NEWS } from "../../redux/constants/newsConstant";

const NewsSlider = () => {
  const news = useSelector((state) => state.news.news);
  console.log(news)
  const dispatch = useDispatch();
  const getNews = async () => {
    try {
      const res = await http.get("news");
      dispatch({ type: GET_NEWS, payload: res.data.news })
      // console.log(res.data.news);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="row position-relative">
      <Slider ref={sliderRef} {...settings}>
        {news.length > 0
          ? news.map((n, index) => (
              <div className="col-md-2" key={index}>
                <div className="card card-body p-0 border-0 me-3">
                  <Link to={`/news/${n.id}`}>
                    <div className="img-card position-relative">
                      <img
                        src={`http://localhost:8000${n.image}`}
                        alt={n.title}
                        className="img-fluid w-100 h-100"
                      />
                      <div className="text-card position-absolute bottom-0 w-100">
                        <p>{n.title}</p>
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
