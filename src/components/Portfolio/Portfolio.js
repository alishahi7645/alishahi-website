import React from 'react';
import img1 from '../../assets/img/portfolio/1.jpg'
import img2 from '../../assets/img/portfolio/2.jpg'
import img3 from '../../assets/img/portfolio/3.jpg'
import img4 from '../../assets/img/portfolio/4.jpg'
import img5 from '../../assets/img/portfolio/5.jpg'
import img6 from '../../assets/img/portfolio/6.jpg'

function Portfolio() {
  return (
    <div className='portfolio py-4' id='portfolio'>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold mb-5">آخرین نمونه کارها</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md6 col-lg-4">
                    <div className="portfolio-item">
                        <img src={img1} alt="" className='w-100 img-thumbnail' />
                        <h3 className='fs-5 fw-bold my-2'>نمونه اول</h3>
                        <p>
                            <a href="" className='text-danger text-decoration-none fs-6'>مشاهده آنلاین</a>
                        </p>
                    </div>
                </div>
                <div className="col-md6 col-lg-4">
                    <div className="portfolio-item">
                        <img src={img2} alt="" className='w-100 img-thumbnail' />
                        <h3 className='fs-5 fw-bold my-2'>نمونه دوم</h3>
                        <p>
                            <a href="" className='text-danger text-decoration-none fs-6'>مشاهده آنلاین</a>
                        </p>
                    </div>
                </div>
                <div className="col-md6 col-lg-4">
                    <div className="portfolio-item">
                        <img src={img3} alt="" className='w-100 img-thumbnail' />
                        <h3 className='fs-5 fw-bold my-2'>نمونه سوم</h3>
                        <p>
                            <a href="" className='text-danger text-decoration-none fs-6'>مشاهده آنلاین</a>
                        </p>
                    </div>
                </div>
                <div className="col-md6 col-lg-4">
                    <div className="portfolio-item">
                        <img src={img4} alt="" className='w-100 img-thumbnail' />
                        <h3 className='fs-5 fw-bold my-2'>نمونه چهارم</h3>
                        <p>
                            <a href="" className='text-danger text-decoration-none fs-6'>مشاهده آنلاین</a>
                        </p>
                    </div>
                </div>
                <div className="col-md6 col-lg-4">
                    <div className="portfolio-item">
                        <img src={img5} alt="" className='w-100 img-thumbnail' />
                        <h3 className='fs-5 fw-bold my-2'>نمونه پنجم</h3>
                        <p>
                            <a href="" className='text-danger text-decoration-none fs-6'>مشاهده آنلاین</a>
                        </p>
                    </div>
                </div>
                <div className="col-md6 col-lg-4">
                    <div className="portfolio-item">
                        <img src={img6} alt="" className='w-100 img-thumbnail' />
                        <h3 className='fs-5 fw-bold my-2'>نمونه ششم</h3>
                        <p>
                            <a href="" className='text-danger text-decoration-none fs-6'>مشاهده آنلاین</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio