import React, { useEffect } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import designer from "../../../images/designer.jpg";
import momento9 from "../../../images/momento9.jpeg";
import img02 from "../../../images/img02.jpg";
// import { withRouter } from "react-router-dom";

function AboutPage() {
  // 뒤로가기 버튼 누르면 이펙트 활성화가 안돼서 이렇게 해준다
  // init third party JS files
  useEffect(() => {
    let one = document.createElement("script");
    let two = document.createElement("script");
    let three = document.createElement("script");

    // hook sources
    one.src = `${process.env.PUBLIC_URL}/js/jq.js`;
    two.src = `${process.env.PUBLIC_URL}/js/plugins.js`;
    three.src = `${process.env.PUBLIC_URL}/js/init.js`;

    // persist order of loading
    one.async = false;
    two.async = false;
    three.async = false;

    // append to index.html
    document.body.appendChild(one);
    document.body.appendChild(two);
    document.body.appendChild(three);

    // do clean ups
    return () => {
      document.body.removeChild(one);
      document.body.removeChild(two);
      document.body.removeChild(three);
    };
  }, []);
  return (
    <main id="main">
      {/* main-banner of the page*/}
      <section
        className="banner"
        style={{ backgroundImage: `url(${aboutFHD})` }}
      >
        <span className="sale-percent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading about">ABOUT US</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>ABOUT US</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      {/* About Description of the page*/}
      <section className="about-dscrp wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="img-holder">
                <img src={momento9} alt="image description" />
              </div>
              <div className="text-wrap">
                <h1 className="about-heading">ABOUT US</h1>
                <strong className="title">love jewelry</strong>
                <p>
                  Pharetra, erat sed fermentum feugiat, velit mauris egestas
                  quam, ut aliquam massa nisl quis neque. Suspendisse in orci
                  enim pharetra, erat sed fermentum feugiat.
                </p>
                <ul>
                  <li>Pharetra, erat sed fermentum feugiat.</li>
                  <li>Spendisse in orci enim pharetra, erat sed fermentum.</li>
                  <li>Pharetra, erat sed fermentum feugiat.</li>
                </ul>
                <a className="btn-more" href="/">
                  Read more <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Rating of the page*/}
      <section className="social-rating wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 text-center">
              <h3>RING POSTS</h3>
              <span className="rating">
                <span className="counter">326.0</span> k
              </span>
            </div>
            <div className="col-xs-12 col-sm-4 text-center">
              <h3>INSTAGRAM FOLLOWERS</h3>
              <span className="rating">
                <span className="counter">203.0</span> k
              </span>
            </div>
            <div className="col-xs-12 col-sm-4 text-center">
              <h3>PIECES SOLD</h3>
              <span className="rating">
                <span className="counter">23.741</span> k
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* team-section of the page*/}
      <section className="team-sec wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header text-center">
                <span className="title">Our Awesome Team</span>
                <h3 className="about-heading">MEET OUR TEAM</h3>
              </div>
              <ul className="list-unstyled team-slider">
                <li>
                  <div className="img-holder">
                    <img src={designer} alt="image description" />
                  </div>
                  <h4>
                    <a href="/">Namhee Kim</a>
                  </h4>
                  <span className="sub-title">Jewelry designer</span>
                </li>
                <li>
                  <div className="img-holder">
                    <img src={designer} alt="image description" />
                  </div>
                  <h4>
                    <a href="/">Namhee Kim</a>
                  </h4>
                  <span className="sub-title">Jewelry designer</span>
                </li>
                <li>
                  <div className="img-holder">
                    <img src={designer} alt="image description" />
                  </div>
                  <h4>
                    <a href="/">Namhee Kim</a>
                  </h4>
                  <span className="sub-title">Jewelry designer</span>
                </li>
                <li>
                  <div className="img-holder">
                    <img src={designer} alt="image description" />
                  </div>
                  <h4>
                    <a href="/">Namhee Kim</a>
                  </h4>
                  <span className="sub-title">Jewelry designer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* blockquote-section of the page*/}
      {/* 135*135*/}
      <section className="blockquote-sec wow fadeInUp" data-wow-delay="0.4s">
        <ul className="list-unstyled blockquote-slider">
          <li>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  {/* Blockquote Holder of the page*/}
                  <div className="blockquote-holder">
                    <div className="author-img">
                      <img src={img02} alt="image description" />
                    </div>
                    <h2 className="author-name">Press Spaceba</h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliqua m massa nisl quis neque. Suspendisse in
                      orci enim pharetra, erat sed fermentum feugiat, velit
                      mauris egestas quam ut aliquam massa uspendisse .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  {/* Blockquote Holder of the page*/}
                  <div className="blockquote-holder">
                    <div className="author-img">
                      <img src={img02} alt="image description" />
                    </div>
                    <h2 className="author-name">Press Spaceba</h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliqua m massa nisl quis neque. Suspendisse in
                      orci enim pharetra, erat sed fermentum feugiat, velit
                      mauris egestas quam ut aliquam massa uspendisse .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  {/* Blockquote Holder of the page*/}
                  <div className="blockquote-holder">
                    <div className="author-img">
                      <img src={img02} alt="image description" />
                    </div>
                    <h2 className="author-name">Press Spaceba</h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliqua m massa nisl quis neque. Suspendisse in
                      orci enim pharetra, erat sed fermentum feugiat, velit
                      mauris egestas quam ut aliquam massa uspendisse .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default AboutPage;
