import React from "react";

function Footer() {
  return (
    <footer id="footer" className="wow fadeInUp" data-wow-delay="0.4s">
      {/* <span className="free-ship">FREE SHIPPING</span> */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-lg-4 txt-holder">
            <div className="footer-logo">
              <a href="index.html">DESIA</a>
            </div>
            <p>
              Pharetra, erat sed fermentum
              <br />
              feugiat, velit mauris egestas
              <br />
              quam.
            </p>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-3">
            <h3>contact us</h3>
            {/* Contact of the page */}
            <ul className="list-unstyled contact-info">
              <li>
                <i className="icon icon-location" />
                <address>창원시 성산구 중앙동 67-12</address>
              </li>
              <li>
                <i className="icon icon-email" />
                <a className="txt" href="#">
                  idontknow@youremail.com
                </a>
              </li>
              <li>
                <i className="icon icon-phone" />
                <a className="txt" href="#">
                  055-282-3173
                </a>
              </li>
              <li>
                <i className="icon icon-printer" />
                <a className="txt" href="#">
                  (00)-213 1879017 fax
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-lg-5">
            <h3>instagram feed</h3>
            {/* Instagram of the page */}
            <ul className="list-unstyled instagram-list">
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://placehold.it/95x70"
                    alt="image description"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="support">24H SUPPORT</span>
    </footer>
  );
}

export default Footer;
