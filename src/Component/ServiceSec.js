import React from 'react';
import Header from './Header';

export default function ServiceSec({ showHeader = true, showHero = true }) {
    return (
        <>

            {showHeader && <Header />}
            {showHero && (
                <div className="comm_hero_area">
                    <div className="hero_bg_box">
                        <div className="img-box">
                            <img src="images/hero-bg.jpg" alt="" />
                        </div>
                    </div>
                </div>
            )}
            <section className="service_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Our Services</h2>
                    </div>
                    <div className="row">
                        {/* Home Security */}
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/s1.png" alt="" height={80} width={72} />
                                </div>
                                <div className="detail-box">
                                    <h6>Home Security</h6>
                                    <p>
                                        Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* Office Security */}
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/s2.png" alt="" height={80} width={72} />
                                </div>
                                <div className="detail-box">
                                    <h6>Office Security</h6>
                                    <p>
                                        Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* Third Service */}
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/s3.png" alt="" height={80} width={72} />
                                </div>
                                <div className="detail-box">
                                    <h6>Third Service</h6>
                                    <p>
                                        Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
