import React from "react";
import eventBG from "../../images/eventBG.jpg";
import newYear from "../../images/2020.jpg";
import review from "../../images/review.jpg";
import plusFriend from "../../images/plusFriend.jpg";
import reviewBG from "../../images/reviewBG.jpg";

function EventPage() {
  return (
    <main id="main">
      {/* main-banner of the page*/}
      <section
        className="banner wow fadeInUp"
        data-wow-delay="0.4s"
        style={{ backgroundImage: `url(${eventBG})` }}
      >
        <span className="sale-percent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading">Event</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="home.html">Home</a>
                  </li>
                  <li>Event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      {/* Blog Slider of the page*/}
      <section className="blog-slider">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/* Post Blog of the page*/}
              <div className="post-blog wow fadeInUp" data-wow-delay="0.4s">
                <div className="holder">
                  <div className="img-holder">
                    <a href="blog-detail.html">
                      <img src={newYear} alt="image description" />
                    </a>
                  </div>
                  <div className="text-wrap">
                    <h2 className="blog-heading">
                      <a href="blog-detail.html">2020 Happy New Year</a>
                    </h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
                      fermentum feugiat, velit mauris egestas quam, ut aliquam
                      massa nisl quis neque...
                    </p>
                    <a className="btn-more" href="blog-detail.html">
                      Continue <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
                <time className="time" dateTime="2016-02-03 20:00">
                  FEBRUARY 3, 2016
                </time>
              </div>
              {/* Post Blog of the page*/}
              <div
                className="post-blog align-right wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="holder">
                  <time className="time" dateTime="2016-02-03 20:00">
                    FEBRUARY 3, 2016
                  </time>
                  <div className="text-wrap">
                    <h2 className="blog-heading">
                      <a href="blog-detail.html">Review Event</a>
                    </h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
                      fermentum feugiat, velit mauris egestas quam, ut aliquam
                      massa nisl quis neque...
                    </p>
                    <a className="btn-more" href="blog-detail.html">
                      Continue <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="img-holder">
                    <a href="blog-detail.html">
                      <img src={review} alt="image description" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Post Blog of the page*/}
              <div className="post-blog wow fadeInUp" data-wow-delay="0.4s">
                <div className="holder">
                  <div className="img-holder">
                    <a href="blog-detail.html">
                      <img src={plusFriend} alt="image description" />
                    </a>
                  </div>
                  <div className="text-wrap">
                    <h2 className="blog-heading">
                      <a href="blog-detail.html">Kakao Plus Friend</a>
                    </h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
                      fermentum feugiat, velit mauris egestas quam, ut aliquam
                      massa nisl quis neque...
                    </p>
                    <a className="btn-more" href="blog-detail.html">
                      Continue <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
                <time className="time" dateTime="2016-02-03 20:00">
                  FEBRUARY 3, 2016
                </time>
              </div>
              {/* Post Blog of the page*/}
              <div
                className="post-blog align-right wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="holder">
                  <time className="time" dateTime="2016-02-03 20:00">
                    FEBRUARY 3, 2016
                  </time>
                  <div className="text-wrap">
                    <h2 className="blog-heading">
                      <a href="blog-detail.html">Another event</a>
                    </h2>
                    <p>
                      Pharetra, erat sed fermentum feugiat, velit mauris egestas
                      quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
                      fermentum feugiat, velit mauris egestas quam, ut aliquam
                      massa nisl quis neque...
                    </p>
                    <a className="btn-more" href="blog-detail.html">
                      Continue <i className="icon-right-arrow" />
                    </a>
                  </div>
                  <div className="img-holder">
                    <a href="blog-detail.html">
                      <img src={reviewBG} alt="image description" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled slick-dots">
          <li className="prev">
            <a className="icon-left-arrow" href="#" />
          </li>
          <li>
            <a href="#">01</a>
          </li>
          <li>
            <a href="#">02</a>
          </li>
          <li className="active">
            <a href="#">03</a>
          </li>
          <li className="next">
            <a className="icon-right-arrow" href="#" />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default EventPage;
