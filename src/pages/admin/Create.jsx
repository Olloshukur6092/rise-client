import React, { useState } from "react";
import { useSelector } from "react-redux";
import { http } from "../../api/axios";
import { csrfSanctum } from "../../api/csrf";
import "./styles/Create.css";

const Create = () => {
  const user = useSelector((state) => state.auth.user);
  //   console.log(user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    await csrfSanctum();
    try {
      const res = await http.post(
        "api/news",
        { title: title, description: description, image: image.name },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
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
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              className="form-control form-control-lg"
                              placeholder="Enter here Title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form4Example3"
                            >
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="form4Example3"
                              rows={4}
                              placeholder="Enter here decription"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <div>
                              <label
                                htmlFor="formFileLg"
                                className="form-label"
                              >
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
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabIndex={0}
                        >
                          <div className="form-outline mb-4 mt-3">
                            <label className="form-label" htmlFor="title">
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              className="form-control form-control-lg"
                              placeholder="Enter here Title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form4Example3"
                            >
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="form4Example3"
                              rows={4}
                              placeholder="Enter here decription"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <div>
                              <label
                                htmlFor="formFileLg"
                                className="form-label"
                              >
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
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
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
