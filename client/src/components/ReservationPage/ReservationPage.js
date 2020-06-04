import React from "react";
import { withRouter } from "react-router-dom";
import aboutFHD from "../../images/aboutFHD.png";

function ReservationPage() {
  return (
    <main id="main">
      <section
        className="banner"
        style={{ backgroundImage: `url(${aboutFHD})` }}
      >
        <span className="sale-percent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading heading">Reservation</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                  </li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      <section className="contact-sec">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.280574870585!2d128.67509821552204!3d35.2243849624974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568cce63a6cb2e7%3A0xe1bb28f9bf7a8776!2z6rK97IOB64Ko64-EIOywveybkOyLnCDshLHsgrDqtawg7KSR7JWZ64-ZIDY3LTEy!5e0!3m2!1sko!2skr!4v1587348283496!5m2!1sko!2skr"
            width="100%"
            height="800px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="text-holder">
          <div className="txt-frame">
            <div className="holder">
              <div className="contact-detail">
                <h3>contact detail</h3>
                <ul className="list-unstyled contact-info">
                  <li>
                    <i className="icon icon-location"></i>
                    <address>창원시 성산구 중앙동 67-12</address>
                  </li>
                  <li>
                    <i className="icon icon-email"></i>
                    <a className="txt" href="#">
                      idonknow@youremail.com
                    </a>
                  </li>
                  <li>
                    <i className="icon icon-phone"></i>
                    <a className="txt" href="#">
                      055-282-3173
                    </a>
                  </li>
                  <li>
                    <i className="icon icon-printer"></i>
                    <a className="txt" href="#">
                      (00)-213 1879017 fax
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about-detail">
                <h3>about us</h3>
                <p>
                  Pharetra, erat sed fermentum
                  <br />
                  feugiat, velit mauris egestas
                  <br />
                  quam mauris egestas quam.
                </p>
              </div>
            </div>
            <div className="holder">
              <h3>LEAVE A MESSAGE</h3>
              <form className="contact-form">
                <fieldset>
                  <div className="form-group">
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="전화번호"
                        required="true"
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="성함"
                        required="true"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="date"
                      required="true"
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="datetime-local"
                      required="true"
                    ></input>
                  </div>
                  <button className="btn-primary btn-submit">예약하기</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withRouter(ReservationPage);
