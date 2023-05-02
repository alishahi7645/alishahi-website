import React from 'react'

function Services() {
  return (
    <div className='services py-5' id='services'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <section className="section-title text-center">
                        <h2 className="fw-bold fs-5">من چیکار میکنم</h2>
                    </section>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-6 col-lg-4 mb4">
                    <div className="service-item shadow-sm p-4 bg-white rounded">
                        <div className="icon text-danger my-3 fs-2">
                            <i className='fas fa-code'></i>
                        </div>
                        <h3 className="fs-2 py-3">توسعه وب</h3>
                        <p className="text-muted">من یک توسعه دهنده وب هستم و تجربه خوبی در این کار دارم</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb4">
                    <div className="service-item shadow-sm p-4 bg-white rounded">
                        <div className="icon text-danger my-3 fs-2">
                            <i className='fas fa-lightbulb'></i>
                        </div>
                        <h3 className="fs-2 py-3">طراحی خلاقانه</h3>
                        <p className="text-muted">من یک توسعه دهنده وب هستم و تجربه خوبی در این کار دارم</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb4">
                    <div className="service-item shadow-sm p-4 bg-white rounded">
                        <div className="icon text-danger my-3 fs-2">
                            <i className='fas fa-image'></i>
                        </div>
                        <h3 className="fs-2 py-3">فتوشاپ</h3>
                        <p className="text-muted">من یک توسعه دهنده وب هستم و تجربه خوبی در این کار دارم</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;