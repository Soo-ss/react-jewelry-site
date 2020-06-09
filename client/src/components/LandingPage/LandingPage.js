import React from "react";

function LandingPage(props) {
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
                        <h1 className="slider-heading">Back to dream</h1>
                        <div className="img-holder">
                          <img
                            src="http://placehold.it/440x660"
                            alt="image description"
                          />
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
                        <h1 className="slider-heading">Back to dream</h1>
                        <div className="img-holder">
                          <img
                            src="http://placehold.it/440x660"
                            alt="image description"
                          />
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
                        <h1 className="slider-heading">Back to dream</h1>
                        <div className="img-holder">
                          <img
                            src="http://placehold.it/440x660"
                            alt="image description"
                          />
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
          style={{ backgroundImage: "url(http://placehold.it/1920x1000)" }}
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
                    <img
                      src="http://placehold.it/390x330"
                      alt="image description"
                    />
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
                src="http://placehold.it/480x620"
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
                src="http://placehold.it/480x620"
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
                src="http://placehold.it/960x1235"
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
                src="http://placehold.it/960x620"
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
                src="http://placehold.it/480x620"
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
                src="http://placehold.it/480x620"
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
                        <img
                          src="http://placehold.it/135x135"
                          alt="image description"
                        />
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
                        <img
                          src="http://placehold.it/135x135"
                          alt="image description"
                        />
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
                        <img
                          src="http://placehold.it/135x135"
                          alt="image description"
                        />
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
