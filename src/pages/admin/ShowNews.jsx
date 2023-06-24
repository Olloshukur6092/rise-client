import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { http } from "../../api/axios";
import { csrfSanctum } from "../../api/csrf";
import { GET_NEWS } from "../../redux/constants/newsConstant";
import "./styles/ShowNews.css";

const ShowNews = () => {
  const user = useSelector((state) => state.auth.user);
  const news = useSelector((state) => state.news.news);
  console.log(news)
  console.log(news);
  const dispatch = useDispatch();

  const getAllNews = async () => {
    await csrfSanctum();
    try {
      const {
        data: { news },
      } = await http.get("news", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(news);
      dispatch({ type: GET_NEWS, payload: news });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div>
      <section id="showNews" className="mt-5 mb-5">
        <div className="container">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" style={{ width: "10%" }}>
                  Id
                </th>
                <th scope="col" style={{ width: "30%" }}>
                  Title
                </th>
                <th scope="col" style={{ width: "30%" }}>
                  Description
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Image
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {news.length > 0 ? (
                news.map((n, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{n.title}</td>
                    <td>{n.description}</td>
                    <td>
                      <img
                        src={`http://localhost:8000${n.image}`}
                        className="img-fluid"
                        alt="No image"
                      />
                    </td>
                    <td>
                      <i className="fa-solid fa-pen-to-square fa-2x me-4  "></i>
                      <i className="fa-solid fa-trash fa-2x "></i>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No data</p>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ShowNews;
