import React from "react";

function Aboute() {
  return (
    <div className="aboute py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="section-title text-center">
              <h2 className="fw-bold mb-5">درباره من</h2>
            </section>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="aboute-text">
              <h2 className="fs-4 fw-bold mb-3">
                این متن درباره من است و امیدوارم خوب باشد
              </h2>
              <p className="fs-6 text-muted">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
            <div className="row text-center my-4">
              <div className="col-sm-4">
                <div className="text-fact">
                  <h4 className="fw-bold fs-4">30</h4>
                  <p className="text-muted">پروژه های تکمیل شده</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-fact">
                  <h4 className="fw-bold fs-4">28</h4>
                  <p className="text-muted">مشتریان رازی</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-fact">
                  <h4 className="fw-bold fs-4">98</h4>
                  <p className="text-muted">عملکرد مثبت</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex align-content-center align-items-center">
                <a href="#" className="btn btn-danger ms-3 px-3">
                  دانلود رزومه
                </a>
                <div className="social-links">
                  <a href="#" className="text-dark ms-3">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-dark ms-3">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-dark ms-3">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-dark ms-3">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-5 mt-md-0">
            <div className="skill-item mb-4">
              <h3 className="fs-6">Html</h3>
              <div className="progress" style={{ height: " 5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Css</h3>
              <div className="progress" style={{ height: " 5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Javascript</h3>
              <div className="progress" style={{ height: " 5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">React js</h3>
              <div className="progress" style={{ height: " 5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Laravel</h3>
              <div className="progress" style={{ height: " 5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboute;
