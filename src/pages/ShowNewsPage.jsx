import React from "react";
import n7 from "../assets/news/n7.png";
import n12 from "../assets/news/n12.png";
import Play from "../assets/images/play.png";
import "./css/show-news.css";

const ShowNewsPage = () => {
  return (
    <section id="show-news" className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 mx-auto">
            {/* image */}
            <div className="show-image mb-4">
              <img src={n7} alt="N 7" className="img-fluid w-100 h-100" />
              <div className="image-gradient"></div>
            </div>
            {/* text */}
            <div className="show-news-text">
              <div className="text-size-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam nunc blandit
                  vitae quisque ultricies. Ultrices lectus vitae imperdiet
                  porttitor lorem.
                </p>
              </div>
              <div className="text-size-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consectetur aenean
                  egestas malesuada eu. Amet non sit auctor fermentum id.
                  Tristique tellus augue viverra mi elit libero. Pellentesque
                  vestibulum arcu pretium nam sed tempus. Adipiscing consequat
                  quis pellentesque facilisis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consectetur aenean
                  egestas malesuada eu. Amet non sit auctor fermentum id.
                  Tristique tellus augue viverra mi elit libero. Pellentesque
                  vestibulum arcu pretium nam sed tempus. Adipiscing consequat
                  quis pellentesque facilisis.
                </p>
                <div className="text-title mb-3">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consectetur aenean
                  egestas malesuada eu. Amet non sit auctor fermentum id.
                  Tristique tellus augue viverra mi elit libero. Pellentesque
                  vestibulum arcu pretium nam sed tempus. Adipiscing consequat
                  quis pellentesque facilisis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consectetur aenean
                  egestas malesuada eu. Amet non sit auctor fermentum id.
                  Tristique tellus augue viverra mi elit libero. Pellentesque
                  vestibulum arcu pretium nam sed tempus. Adipiscing consequat
                  quis pellentesque facilisis.
                </p>
              </div>
            </div>
            {/* image */}
            <div className="img-block">
              <img src={n12} alt="N11" className="img-fluid w-100 h-100" />
              <div className="img-text mt-2">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="show-news-text mt-5">
              <div className="text-size-sm">
                <div className="text-title mb-3">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consectetur aenean
                  egestas malesuada eu. Amet non sit auctor fermentum id.
                  Tristique tellus augue viverra mi elit libero. Pellentesque
                  vestibulum arcu pretium nam sed tempus. Adipiscing consequat
                  quis pellentesque facilisis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consectetur aenean
                  egestas malesuada eu. Amet non sit auctor fermentum id.
                  Tristique tellus augue viverra mi elit libero. Pellentesque
                  vestibulum arcu pretium nam sed tempus. Adipiscing consequat
                  quis pellentesque facilisis.
                </p>
              </div>
            </div>
            <div className="news-video">
              <div className="news-v">
                <div className="news-video-text d-flex justify-content-between text-white p-4">
                  <div className="h1-text text-uppercase">
                    Videoda Rise haqida batafsil ma’lumot berilgan
                  </div>
                  <div className="p-text">Video davomiyligi: 4 daqiqa</div>
                </div>
                <div className="news-video-icon">
                  <img src={Play} alt="play video" />
                </div>
              </div>
              <p className="mt-2 rise-text">“RISE” kompaniyasi haqida video:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowNewsPage;
