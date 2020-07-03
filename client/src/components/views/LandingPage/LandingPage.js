import React, { useEffect } from "react";
import landingImage from "../../../images/main.png";
import areaHand2 from "../../../images/areaHand2.jpg";
import dVivo from "../../../images/dVivo.jpeg";
import dVivoMain from "../../../images/dVivoMain.jpeg";
import dVivoCube from "../../../images/dVivoCube.jpeg";
import dVivoSimple from "../../../images/dVivoSimple.jpeg";
import momento1 from "../../../images/momento1.jpeg";
import momento2 from "../../../images/momento2.jpeg";
import kakao from "../../../images/kakao2.png";

function LandingPage(props) {
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
    <>
      {/* contain main informative part of the site */}
      <main id="main">
        {/* main-gallery of the Page */}
        <section className="main-slider">
          {/* social-networks of the page */}
          <ul className="list-unstyled social-network">
            <li className="facebook">
              <a href="/" className="icon-facebook" />
            </li>
            <li>
              <a href="/" className="icon-twitter" />
            </li>
            <li className="instagram">
              <a href="/" className="icon-instagram" />
            </li>
          </ul>
          {/* Main Slider of the page */}
          <div id="main-slider">
            {/* Slide of the page */}
            <div className="slide">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="beans-slider">
                      <div className="border">
                        <h1 className="slider-heading">Design Beyond Time</h1>
                        <div className="img-holder">
                          <img src={landingImage} alt="image description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide of the page */}
            <div className="slide">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="beans-slider">
                      <div className="border">
                        <h1 className="slider-heading">Design Beyond Time</h1>
                        <div className="img-holder">
                          <img src={landingImage} alt="image description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide of the page */}
            <div className="slide">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="beans-slider">
                      <div className="border">
                        <h1 className="slider-heading">Design Beyond Time</h1>
                        <div className="img-holder">
                          <img src={landingImage} alt="image description" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* main-banner of the page */}
        <section
          className="banner banner-2 wow fadeInUp"
          data-wow-delay="0.4s"
          style={{ backgroundImage: `url(${areaHand2})` }}
        >
          <span className="sale-percent">Tel: (02)123 4567</span>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="caption-holder">
                  <div className="text-holder">
                    <h1 className="banner-heading">ABOUT US</h1>
                    <strong className="title">A Dreamers Dream</strong>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliquam <br />
                      massa nisl quis neque. Suspendisse in orci enim pharetra,
                      erat sed fermentum <br />
                      feugiat, velit mauris egestas quam ut aliquam massa
                      Suspendisse in orci <br />
                      enim.pharetra, erat sed fermentum feugiat.
                    </p>
                    <a href="about-us.html" className="btn-more">
                      Read more <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="img-holder">
                    <img src={dVivo} alt="image description" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="year">TRENDS FOR 2016</span>
        </section>
        {/* product-section of the page */}
        <section className="product-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="product-holder">
            {/* product-block of the page */}
            <div className="product-block coll-1">
              <div className="align-text">
                <span className="title">featured roducts</span>
                <h4 className="product-heading">romantic</h4>
                <p>
                  Pharetra, erat sed fermentum feugiat, velit mauris egestas
                  <br />
                  quam, ut aliquam massa nisl quis neque.
                </p>
                <a href="product-page.html" className="btn-more">
                  Continue <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <div className="box">
                <a href="product-page.html" className="btn-default">
                  shop now{" "}
                </a>
                <div className="over">
                  <div className="holder">
                    <div className="align-left">
                      <strong className="title-name">Goldtone Bib</strong>
                      <strong className="price">
                        <del>150$</del> 120$
                      </strong>
                    </div>
                    <a href="/" className="like">
                      <i className="icon-favorite" />
                      23
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="img-responsive"
                alt="image description"
                src={dVivoMain}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <div className="box">
                <a href="product-page.html" className="btn-default">
                  shop now{" "}
                </a>
                <div className="over">
                  <div className="holder">
                    <div className="align-left">
                      <strong className="title-name">Goldtone Bib</strong>
                      <strong className="price">
                        <del>150$</del> 120$
                      </strong>
                    </div>
                    <a href="/" className="like">
                      <i className="icon-favorite" />
                      23
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="img-responsive"
                alt="image description"
                src={dVivoCube}
              />
            </div>
          </div>
          <div className="product-holder">
            {/* product-block of the page */}
            <div className="product-block block coll-1">
              <div className="box">
                <a href="product-page.html" className="btn-default">
                  shop now{" "}
                </a>
                <div className="over">
                  <div className="holder">
                    <div className="align-left">
                      <strong className="title-name">Goldtone Bib</strong>
                      <strong className="price">
                        <del>150$</del> 120$
                      </strong>
                    </div>
                    <a href="/" className="like">
                      <i className="icon-favorite" />
                      23
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="img-responsive"
                alt="image description"
                src={dVivo}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-1">
              <div className="box">
                <a href="product-page.html" className="btn-default">
                  shop now{" "}
                </a>
                <div className="over">
                  <div className="holder">
                    <div className="align-left">
                      <strong className="title-name">Goldtone Bib</strong>
                      <strong className="price">
                        <del>150$</del> 120$
                      </strong>
                    </div>
                    <a href="/" className="like">
                      <i className="icon-favorite" />
                      23
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="img-responsive"
                alt="image description"
                src={dVivoSimple}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <div className="box">
                <a href="product-page.html" className="btn-default">
                  shop now{" "}
                </a>
                <div className="over">
                  <div className="holder">
                    <div className="align-left">
                      <strong className="title-name">Goldtone Bib</strong>
                      <strong className="price">
                        <del>150$</del> 120$
                      </strong>
                    </div>
                    <a href="/" className="like">
                      <i className="icon-favorite" />
                      23
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="img-responsive"
                alt="image description"
                src={momento1}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <div className="box">
                <a href="product-page.html" className="btn-default">
                  shop now{" "}
                </a>
                <div className="over">
                  <div className="holder">
                    <div className="align-left">
                      <strong className="title-name">Goldtone Bib</strong>
                      <strong className="price">
                        <del>150$</del> 120$
                      </strong>
                    </div>
                    <a href="/" className="like">
                      <i className="icon-favorite" />
                      23
                    </a>
                  </div>
                </div>
              </div>
              <img
                className="img-responsive"
                alt="image description"
                src={momento2}
              />
            </div>
          </div>
        </section>
        {/* blockquote-section of the page */}
        <section className="blockquote-sec wow fadeInUp" data-wow-delay="0.4s">
          <ul className="list-unstyled blockquote-slider">
            <li>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 text-center">
                    {/* Blockquote Holder of the page */}
                    <div className="blockquote-holder">
                      <div className="author-img">
                        <img src={kakao} alt="image description" />
                      </div>
                      <h2 className="author-name">Press Spaceba</h2>
                      <p>
                        Pharetra, erat sed fermentum feugiat, velit mauris
                        egestas quam, ut aliqua m massa nisl quis neque.
                        Suspendisse in orci enim pharetra, erat sed fermentum
                        feugiat, velit mauris egestas quam ut aliquam massa
                        uspendisse .
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
                    {/* Blockquote Holder of the page */}
                    <div className="blockquote-holder">
                      <div className="author-img">
                        <img src={kakao} alt="image description" />
                      </div>
                      <h2 className="author-name">Press Spaceba</h2>
                      <p>
                        Pharetra, erat sed fermentum feugiat, velit mauris
                        egestas quam, ut aliqua m massa nisl quis neque.
                        Suspendisse in orci enim pharetra, erat sed fermentum
                        feugiat, velit mauris egestas quam ut aliquam massa
                        uspendisse .
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
                    {/* Blockquote Holder of the page */}
                    <div className="blockquote-holder">
                      <div className="author-img">
                        <img src={kakao} alt="image description" />
                      </div>
                      <h2 className="author-name">Press Spaceba</h2>
                      <p>
                        Pharetra, erat sed fermentum feugiat, velit mauris
                        egestas quam, ut aliqua m massa nisl quis neque.
                        Suspendisse in orci enim pharetra, erat sed fermentum
                        feugiat, velit mauris egestas quam ut aliquam massa
                        uspendisse .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
