import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { http } from "../../api/axios";
import { csrfSanctum } from "../../api/csrf";
import "./styles/Create.css";
import { ADD_NEWS, ERROR_NEWS } from "../../redux/constants/newsConstant";

const Create = () => {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);
  const [state, setState] = useState({
    title: "",
    description: "",
    title_ru: "",
    descru: "",
  });
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    await csrfSanctum();
    try {
      const res = await http.post(
        "news",
        {
          title: state.title,
          description: state.description,
          title_ru: state.title_ru,
          description_ru: state.descru,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearar ${user.token}`,
          },
        }
      );
      dispatch({ type: ADD_NEWS, payload: res.data.success });
      navigate("/admin/news");
      console.log(res);
    } catch ({ response: { data } }) {
      // dispatch({ type: ERROR_NEWS, payload: err })
      console.log(data);
    }
  };

  return (
    <div>
      <section id="gradient-custom" className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <form onSubmit={handleSumbit}>
                  <div className="card-body p-5">
                    <h3 className="mb-4 text-center">Add posts</h3>

                    <div>
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            Uzb
                          </button>
                          <button
                            className="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            Rus
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          tabIndex={0}
                        >
                          <div className="form-outline mb-4 mt-3">
                            <label className="form-label" htmlFor="title">
                              Yangilik sarlavhasi
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              className="form-control form-control-lg"
                              placeholder="Enter here Title"
                              value={state.title}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="description">
                              Qisqacha ma'lumot
                            </label>
                            <textarea
                              className="form-control"
                              id="description"
                              name="description"
                              rows={4}
                              placeholder="Enter here decription"
                              value={state.description}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabIndex={0}
                        >
                          <div className="form-outline mb-4 mt-3">
                            <label className="form-label" htmlFor="title_ru">
                              Сарлавха
                            </label>
                            <input
                              type="text"
                              id="title_ru"
                              name="title_ru"
                              className="form-control form-control-lg"
                              placeholder="Enter here Title"
                              value={state.title_ru}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="descru">
                              Кискача маълумот
                            </label>
                            <textarea
                              className="form-control"
                              id="descru"
                              name="descru"
                              rows={4}
                              placeholder="Enter here decription"
                              value={state.descru}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <div>
                        <label htmlFor="formFileLg" className="form-label">
                          Upload here image
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="formFileLg"
                          type="file"
                          name="file"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
