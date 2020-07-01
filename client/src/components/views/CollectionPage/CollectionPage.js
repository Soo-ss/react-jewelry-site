import React from "react";
import collectionBG from "../../../images/collectionBG.jpg";
import img46 from "../../../images/img46.jpg";
import momento1 from "../../../images/momento1.jpeg";
import momento2 from "../../../images/momento2.jpeg";
import momento3 from "../../../images/momento3.jpeg";
import momento4 from "../../../images/momento4.jpeg";
import momento5 from "../../../images/momento5.jpeg";
import momento6 from "../../../images/momento6.jpeg";
import momento7 from "../../../images/momento7.jpeg";
import graceful from "../../../images/graceful.jpg";
import dprincess from "../../../images/dPrincess.jpg";
// import { withRouter } from "react-router-dom";

function CollectionPage() {
  return (
    <main id="main">
      {/* main-banner of the page*/}
      <section
        className="banner wow fadeInUp"
        data-wow-delay="0.4s"
        style={{ backgroundImage: `url(${collectionBG})` }}
      >
        <span className="sale-percent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading">Collection</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      {/* product-section of the page*/}
      <section className="product-sec wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="list-unstyled filter-list">
                <li className="active">
                  <a href="#">all</a>
                </li>
                <li>
                  <a href="#" data-filter=".momento">
                    momento
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".dvivo">
                    dvivo
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".heartbeat">
                    heartbeat
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".set">
                    set
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="holder" id="masonry-container">
          {/* product-block of the page*/}
          <div className="product-block coll-2 momento set">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento1}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 dvivo brooches">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento2}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-1 heartbeat dvivo">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento3}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-1 set">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={graceful}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-1 brooches momento">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="product-page.html">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={dprincess}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 men">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento3}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 dvivo men">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento4}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 heartbeat dvivo">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento5}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 set">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento6}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 brooches set">
            <div className="over">
              <div className="align-left">
                <strong className="title-name">
                  <a href="product-page.html">Goldtone Bib</a>
                </strong>
                <strong className="price">
                  <del>150$</del> 120$
                </strong>
              </div>
              <a className="like" href="/">
                <i className="icon-favorite" /> 23
              </a>
            </div>
            <img
              className="img-responsive"
              alt="image description"
              src={momento7}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2">
            <div className="pagination-holder">
              <ul className="list-unstyled pagination text-center">
                <li className="slick-prev slick-arrow">
                  <a className="icon-left-arrow" href="/" />
                </li>
                <li>
                  <a href="/">01</a>
                </li>
                <li>
                  <a href="/">02</a>
                </li>
                <li className="slick-active">
                  <a href="/">03</a>
                </li>
                <li className="slick-prev slick-arrow">
                  <a className="icon-right-arrow" href="/" />
                </li>
              </ul>
            </div>
            <img
              className="img-responsive"
              src={img46}
              alt="image description"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CollectionPage;
