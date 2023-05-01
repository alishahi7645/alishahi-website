import React from "react";
import homeimg from "../../assets/img/profile.png";

function Home() {
  return (
    <div id="home">
      <div className="container">
        <div className="row min-vh-100 align-items-center align-content-center">
          <div className="col-md-6 mt-2 mt-md-0">
            <img src={homeimg} alt="" />
          </div>
          <div className="col-md-6 mt-2 mt-md-0">
            <div class="home-text">
              <p class="text-muted mb-1">سلام من</p>
              <h1 class="text-danger fs-1 fw-bold">
                طراح و برنامه نویس وب هستم
              </h1>
              <h2 class="fs-4">علی شاهی</h2>
              <p class="text-muted mt-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <a href="#portfolio" class="btn btn-danger px-3 mt-3">
                کارهای من
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
