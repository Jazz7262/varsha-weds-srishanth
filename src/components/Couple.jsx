import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Married</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <div
                        id="carouselIndicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="1"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom1.jpeg"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom2.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                        <img
                            className="flower groom-flower"
                            src="../assets/images/golden-rose.png"
                            alt="flower"
                        />
                    </div>
                    <div className="info groom-info">
                        <h3>
                            Kapse Srishanth <sub>B.Tech.,</sub>
                        </h3>
                        {/* <p className="mt-2">
                            Prop.: <strong>SSV Fashions,</strong> #19/96, M.M.
                            Road, Adoni.
                        </p> */}
                        <p className="mt-2">
                            Grand S/O{" "}
                            <strong>Smt. Pise Subadhra Bai(Late) </strong> and
                            <br /> <strong>Sri Pise Venkoba Rao(Late),</strong>
                        </p>
                        <p className="mt-2">
                            S/O <strong>Smt. Kapse Sujatha(Late)</strong> and
                            <br /> <strong>Sri Kapse Govindraj</strong>.
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div
                        id="bride-carousel-indicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#bride-carousel-indicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#bride-carousel-indicators"
                                data-slide-to="1"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/bride1.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/bride2.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#bride-carousel-indicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#bride-carousel-indicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                        <img
                            className="flower bride-flower"
                            src="../assets/images/golden-rose.png"
                            alt="flower"
                        />
                    </div>
                    <div className="info bride-info">
                        <h3>
                            Varsha (Roja) <sub>MBA.,</sub>
                        </h3>
                        <p className="mt-2">
                            Grand D/O{" "}
                            <strong>Smt. Sakaray Saroja Bai(Late) </strong> and
                            <br />
                            <strong>Sri Sakaray Ramachandra Rao(Late),</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
