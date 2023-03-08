import React from "react";
import n1 from "../assets/news/n1.png";
import n2 from "../assets/news/n2.png";
import n3 from "../assets/news/n3.png";
import n4 from "../assets/news/n4.png";
import n5 from "../assets/news/n5.png";
import n6 from "../assets/news/n6.png";
import n7 from "../assets/news/n7.png";
import n8 from "../assets/news/n8.png";
import n9 from "../assets/news/n9.png";
import n10 from "../assets/news/n10.png";
import n11 from "../assets/news/n11.png";
import date from "../assets/news/date.png";

import "./css/news.css";
import NewsSlider from "../components/slider/NewsSlider";

const NewsPage = () => {
  const news = [
    {
      id: 1,
      image: n1,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      image: n2,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      image: n3,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      image: n4,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 5,
      image: n5,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 6,
      image: n6,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 7,
      image: n6,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <>
      {/* Section 1 carousel news */}
      <section id="news-carousel" className="my-4">
        <div className="container">
          <NewsSlider news={news} />
        </div>
      </section>
      <section id="news-about" className="my-4">
        <div className="container">
          {/* row 1 */}
          <div className="row">
            {/* col-8 */}
            <div className="col-md-8">
              <div className="card card-body p-0 border-0">
                <div className="news-image position-relative">
                  <img src={n7} className="img-fluid w-100 h-100" alt="N8" />
                  <div className="news-back position-absolute">
                    <div className="news-text position-absolute bottom-0 p-4">
                      <div className="news-date d-flex align-items-center mb-2">
                        <div className="news-date-img me-2">
                          <img src={date} alt="date" />
                        </div>
                        <small>27-fevral, 2023</small>
                      </div>
                      <div className="news-title text-white mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti officiis culpa fugiat aliquid sed consequatur!
                        Molestias magni explicabo quisquam vitae!
                      </div>
                      <div className="news-description text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Suscipit, consequatur dolor. Magni suscipit ipsum
                        perferendis corporis, blanditiis fugiat cumque, est
                        voluptatibus sequi laborum libero iste accusantium enim
                        aperiam accusamus voluptatem omnis perspiciatis!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col-4 */}
            <div className="col-md-4">
              <div className="card card-body p-0 border-0">
                <div className="news-image position-relative">
                  <img src={n8} className="img-fluid w-100 h-100" alt="N8" />
                  <div className="news-back position-absolute">
                    <div className="news-text position-absolute bottom-0 p-4">
                      <div className="news-date d-flex align-items-center mb-2">
                        <div className="news-date-img me-2">
                          <img src={date} alt="date" />
                        </div>
                        <small>27-fevral, 2023</small>
                      </div>
                      <div className="news-title text-white mb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </div>
                      <div className="news-description text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Harum omnis, odio asperiores quas consequatur quos
                        perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card card-body p-0 border-0">
                <div className="news-image position-relative">
                  <img src={n9} className="img-fluid w-100 h-100" alt="N8" />
                  <div className="news-back position-absolute">
                    <div className="news-text position-absolute bottom-0 p-3">
                      <div className="news-date d-flex align-items-center mb-2">
                        <div className="news-date-img me-2">
                          <img src={date} alt="date" />
                        </div>
                        <small>27-fevral, 2023</small>
                      </div>
                      <div className="news-title text-white mb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body p-0 border-0">
                <div className="news-image position-relative">
                  <img src={n10} className="img-fluid w-100 h-100" alt="N8" />
                  <div className="news-back position-absolute">
                    <div className="news-text position-absolute bottom-0 p-3">
                      <div className="news-date d-flex align-items-center mb-2">
                        <div className="news-date-img me-2">
                          <img src={date} alt="date" />
                        </div>
                        <small>27-fevral, 2023</small>
                      </div>
                      <div className="news-title text-white mb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body p-0 border-0">
                <div className="news-image position-relative">
                  <img src={n11} className="img-fluid w-100 h-100" alt="N8" />
                  <div className="news-back position-absolute">
                    <div className="news-text position-absolute bottom-0 p-3">
                      <div className="news-date d-flex align-items-center mb-2">
                        <div className="news-date-img me-2">
                          <img src={date} alt="date" />
                        </div>
                        <small>27-fevral, 2023</small>
                      </div>
                      <div className="news-title text-white mb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </div>
                    </div>
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

export default NewsPage;
