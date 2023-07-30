import React, { useState } from "react";
import "./css/contact.css";
import Frame from "../assets/Frames/Frame.png";
import Frame1 from "../assets/Frames/Frame1.png";
import Frame2 from "../assets/Frames/Frame2.png";
import Rec from "../assets/images/Rectangle15.png";
import { http } from "../api/axios";

const ContactPage = () => {
  const [state, setState] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post("send-message", {
        name: state.name,
        number: state.number,
        message: state.message,
      });
      setState({
        name: "",
        number: "",
        message: "",
      });
      console.log(response);
      setSuccess(response.data.message);
      setErrors(null);
    } catch (err) {
      console.log(err.response.data.errors.name);
      setErrors(err.response.data.errors);
      setSuccess(null);
    }
  };

  return (
    <>
      <div>
        <section id="contact-section" className="mb-5">
          <div className="contact-img">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="contact">
                    <h1 className="text-white mt-5">Bog‘lanish</h1>
                  </div>
                </div>
                <div className="col-md-4" />
                <div className="col-md-4">
                  <div className="contact-text">
                    <p className="text-white">
                      Biz bilan bog‘lanish mumkin bo‘lgan barcha ma’lumotlarni
                      shu bo‘limdan olishingiz mumkin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="card mb-4 card-body p-4 border-0">
                    <div className="card-title border-bottom p-3">
                      <img className="me-4" src={Frame} alt="fr" />
                      <p className="information-txt"> Telefon raqam</p>
                    </div>
                    <div className="card-subtitle pt-3 ps-3">
                      <p>+998(97)-221-3636</p>
                      <p>+998(97)-221-3636</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card mb-4 card-body p-4 border-0">
                    <div className="card-title border-bottom p-3">
                      <img className="me-4" src={Frame1} alt="ff" />
                      <p className="information-txt">Email pochta</p>
                    </div>
                    <div className="card-subtitle pt-3 ps-3">
                      <p>+998(97)-221-3636</p>
                      <p>+998(97)-221-3636</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card card-body p-4 border-0">
                    <div className="card-title border-bottom p-3">
                      <img className="me-4" src={Frame2} alt="ff" />
                      <p className="information-txt">Manzil</p>
                    </div>
                    <div className="card-subtitle pt-3 ps-3">
                      <p>+998(97)-221-3636</p>
                      <p>+998(97)-221-3636</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="location" className="mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.3015750260341!2d60.59972800233679!3d41.53533234105455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9284eafb523%3A0xffaf4382f65d7b61!2z0KPRgNCz0LXQvdGHLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1678548881512!5m2!1sru!2s"
                  width="100%"
                  height="697px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="form" className="mt-5">
          <div className="container">
            <div className="team">
              <div className="row">
                <div className="col-md-4 col-lg-4 me-5">
                  <div className="card card-body border-0">
                    <div className="card-title">
                      <h3>O‘zimiz siz bilan bog‘lanamiz</h3>
                    </div>
                    <div className="card-subtitle">
                      <p>
                        Berilgan hududlarni to‘ldiring, savol yoki taklifingiz
                        bo‘lsa ham yozavering, siz bilan o‘zimiz bog‘lanamiz.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form col-md-6 col-xxl-7 ms-5">
                  {success ? (
                    <div className="alert alert-success">{success}</div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={handleSubmitMessage}>
                    <div className="row mb-2">
                      <div className="col">
                        <input
                          type="text"
                          className={
                            errors
                              ? errors.name
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          placeholder="Ism"
                          name="name"
                          value={state.name}
                          onChange={handleInputChange}
                        />
                        <small className="text-danger">
                          {errors ? (errors.name ? errors.name[0] : "") : ""}
                        </small>
                      </div>
                      <div className="col">
                        <input
                          type="tel"
                          className={
                            errors
                              ? errors.number
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          placeholder="Telefon raqam"
                          name="number"
                          value={state.number}
                          onChange={handleInputChange}
                        />
                        <small className="text-danger">
                          {errors ? (errors.number ? errors.number : "") : ""}
                        </small>
                      </div>
                    </div>
                    <div className="txt-area">
                      <div className="col-md-12">
                        <textarea
                          className={
                            errors
                              ? errors.message
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          cols={32}
                          rows={8}
                          placeholder="Savolingiz yoki murojaatingiz bo‘lsa yozing..."
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small className="text-danger">
                          {errors
                            ? errors.message
                              ? errors.message[0]
                              : ""
                            : ""}
                        </small>
                      </div>
                      <div className="my-3 text-center">
                        <input
                          type="submit"
                          className="btn btn-success px-5 py-2"
                          value="Yuborish"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
