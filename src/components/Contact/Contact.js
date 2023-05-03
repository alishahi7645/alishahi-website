import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="contact py-5" id="contact">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center" data-aos="fade-up">
              <h3 className="fw-bold mb-5">تماس با من</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" data-aos="zoom-in-left">
            <div className="contact-item d-flex">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text me-3">
                <h3 className="fs-5">ایمیل</h3>
                <p className="text-muted">example@gmail.com</p>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-phone"></i>
              </div>
              <div className="text me-3">
                <h3 className="fs-5">تلفن</h3>
                <p className="text-muted">1-4354356456+</p>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="text me-3">
                <h3 className="fs-5">آدرس</h3>
                <p className="text-muted">تبریز سمت راست طبقه دهم واحد سوم</p>
              </div>
            </div>
          </div>
          <div className="col-md-7" data-aos="zoom-in-right">
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-lg-6 mb4">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm border-0 fs-6"
                      placeholder="نام ونام خانوادگی شما"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm border-0 fs-6"
                      placeholder="ایمیل شما"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm border-0 fs-6"
                      placeholder="موضوع"
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <textarea
                      rows="5"
                      className="form-control form-control-lg shadow-sm border-0 fs-6"
                      placeholder="پیام شما"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button className="btn btn-danger px-4">ارسال</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
