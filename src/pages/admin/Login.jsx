import React, { useEffect, useState } from "react";
import { http } from "../../api/axios";
import { csrfSanctum } from "../../api/csrf";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER } from "../../redux/constants/authConstant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrfSanctum();
    try {
      const { data } = await http.post("api/login", {
        email: email,
        password: password,
      });
      localStorage.setItem('user', JSON.stringify(data.data));
      dispatch({ type: AUTH_USER, payload: data.data });
      navigate("/admin/news");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="login-section"
      className="vh-100"
      style={{ backgroundColor: "#508bfc" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <form onSubmit={handleSubmit}>
                <div className="card-body p-5">
                  <h3 className="mb-5 text-center">Sign in</h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="form1Example3"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="form1Example3"
                  >
                    {" "}
                    Remember password{" "}
                  </label>
                </div> */}
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
  );
};

export default Login;
