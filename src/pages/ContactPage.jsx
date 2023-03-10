import React, { useState } from "react";
import "./css/contact.css";
import Frame from "../assets/Frames/Frame.png"
import Frame1 from "../assets/Frames/Frame1.png"
import Frame2 from "../assets/Frames/Frame2.png"
import Rec from "../assets/images/Rectangle15.png";

const ContactPage = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");

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
                <div className="col-md-4">
                  <div className="card card-body p-4 border-0">
                    <div className="card-title border-bottom p-3">
                      <img
                        className="me-4"
                        src={Frame}
                        alt="fr"
                      />
                      Telefon raqam
                    </div>
                    <div className="card-subtitle pt-3 ps-3">
                      <p>+998(97)-221-3636</p>
                      <p>+998(97)-221-3636</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-body p-4 border-0">
                    <div className="card-title border-bottom p-3">
                      <img
                        className="me-4"
                        src={Frame1}
                        alt="ff"
                      />
                      Email pochta
                    </div>
                    <div className="card-subtitle pt-3 ps-3">
                      <p>+998(97)-221-3636</p>
                      <p>+998(97)-221-3636</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-body p-4 border-0">
                    <div className="card-title border-bottom p-3">
                      <img
                        className="me-4"
                        src={Frame2}
                        alt="ff"
                      />
                      Manzil
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
                <img
                  className="location img-fluid w-100"
                  src={Rec}
                  alt="Rec"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="form" className="mt-5">
          <div className="container">
            <div className="team">
              <div className="row">
                <div className="col-md-4 me-5">
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
                <div className="col-md-7 ms-5">
                  <form>
                    <div className="row mb-2">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ism"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Telefon raqam"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="txt-area">
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          cols={32}
                          rows={8}
                          placeholder="Savolingiz yoki murojaatingiz bo‘lsa yozing..."
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
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
