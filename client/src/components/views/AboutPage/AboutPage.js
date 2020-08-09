import React, { useEffect } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import designer from "../../../images/designer.jpg";
import momento9 from "../../../images/momento9.jpeg";
import img02 from "../../../images/img02.jpg";
import Banner from "../_partials/Banner/Banner";
import TeamBlock from "./TeamBlock";
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
      <Banner title="about us" bg={aboutFHD} />
      <section className="about-dscrp wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="img-holder">
                <img src={momento9} alt="image description" />
              </div>
              <div className="text-wrap">
                <h1 className="about-heading">ABOUT US</h1>
                <strong className="title">Design Lab</strong>
                <div className="noto">
                  <p style={{ fontSize: "20px" }}>
                    디자인실, 캐드출력실, 자체 공방과 검품 시스템을 갖춘
                    연구소입니다.
                    <br />
                    단, 1% 소수를 위한 서비스
                  </p>
                  <ul>
                    <li>수석 디자이너와 상담</li>
                    <li>디자인 스케치</li>
                    <li>라이노 작업</li>
                    <li>핸드메이드 제작</li>
                    <li>디자인 의장 등록</li>
                    <li>제품 출고</li>
                  </ul>
                </div>

                <a className="btn-more" href="/">
                  Read more <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Rating of the page*/}
      <section
        style={{ backgroundColor: "#000" }}
        className="social-rating wow fadeInUp"
        data-wow-delay="0.4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 text-center">
              <h3>SINCE</h3>
              <span className="rating">
                <span className="counter">2008</span> year
              </span>
            </div>
            <div className="col-xs-12 col-sm-4 text-center">
              <h3>INSTAGRAM FOLLOWERS</h3>
              <span className="rating">
                <span className="counter">54.0</span> k
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
