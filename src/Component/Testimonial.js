import React from 'react'

export default function Testimonial() {
  return (
    <>
          {/*  client section */}

          <section className="client_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              What is says our clients
            </h2>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Minim Veniam
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Minim Veniam
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Minim Veniam
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* end client section */}
    </>
  )
}
