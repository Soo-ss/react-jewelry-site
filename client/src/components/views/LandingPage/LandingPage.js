import React, { useEffect } from "react";
import landingImage from "../../../images/main.png";
import main1 from "../../../images/main1.png";
import main3 from "../../../images/main3.png";
import areaHand2 from "../../../images/areaHand2.jpg";
import designer from "../../../images/designer.jpg";
import LandingSlide from "./LandingSlide";
import TeamBlock from "../AboutPage/TeamBlock";

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

  const s3URL = "https://desiacw.s3.ap-northeast-2.amazonaws.com";

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
              <a href="https://pf.kakao.com/_Awcxcj" className="fa fa-link" />
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/desia_changwon/"
                className="icon-instagram"
              />
            </li>
          </ul>
          {/* Main Slider of the page */}
          <div id="main-slider">
            <LandingSlide bg={main1} />
            <LandingSlide bg={landingImage} />
            <LandingSlide bg={main3} />
          </div>
        </section>
        <video
          style={{ width: "100%" }}
          className="videoTag"
          autoPlay
          loop
          muted>
          <source src={`${s3URL}/video/desiaSub.mp4`} type="video/mp4" />
        </video>
        {/* main-banner of the page */}
        <section
          className="banner banner-2 wow fadeInUp"
          data-wow-delay="0.4s"
          style={{ backgroundImage: `url(${areaHand2})` }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="caption-holder">
                  <div className="text-holder">
                    <h1 className="banner-heading">Best of best</h1>
                    <strong className="title">Haram</strong>
                    {/* <p>A nervous heart toward each other</p>
                    <p style={{ fontSize: "20px" }} className="noto">
                      "하늘이 내려준 소중한 사람"
                    </p> */}
                    <div className="noto">
                      <p style={{ fontSize: "20px" }}>
                        하람은 `하늘이 내려준 소중한 사람`이라는 의미를 가지고
                        있습니다.
                      </p>
                      밴드 라인의 각진 컷팅은 하늘 위의 구름 사이로 비치는 밝은
                      빚줄기를,
                      <br />
                      메인 다이아몬드는 영원한 사랑을 의미하며,
                      <br />
                      서브 다이아몬드는 사랑하는 사람에게 비치는 아름다운 후광을
                      표현하였습니다.
                      <br />
                      새롭게 시작될 신랑, 신부님의 앞날을 축복하는 마음을 담아
                      디자인되었습니다.
                    </div>
                    {/* <a href="/" className="btn-more">
                      Read more <i className="icon-right-arrow" />
                    </a> */}
                  </div>
                  <div className="img-holder">
                    <img
                      src={`${s3URL}/myimg/main/haramNew.png`}
                      alt="image description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* product-section of the page */}
        <section className="product-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="product-holder">
            {/* product-block of the page */}
            <div className="product-block coll-1">
              <div className="align-text">
                <span className="title">featured products</span>
                <h4 className="product-heading">D:Vivo</h4>
                <p style={{ fontSize: "16px" }} className="noto">
                  데시아 브랜드 근원인 심볼D를 기반으로 디자인된 웨딩 밴드,
                  중심이란 뜻의 Vivo와 결합해 밴드 라인 중앙에 알파벳 D를
                  형상화하여 디자인되었습니다.
                </p>
              </div>
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/dVivo/dVivo.jpg`}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/dVivo/dVivoCube.jpg`}
              />
            </div>
          </div>
          <div className="product-holder">
            {/* product-block of the page */}
            <div className="product-block block coll-1">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/dVivo/dVivoMain2.jpg`}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-1">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/dVivo/dVivoSimple.jpg`}
              />
            </div>
            {/* <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={momento1}
              />
            </div>
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={momento2}
              />
            </div> */}
          </div>
        </section>
        <section className="product-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="product-holder">
            {/* product-block of the page */}
            <div className="product-block coll-1">
              <div className="align-text">
                <span className="title">featured products</span>
                <h4 className="product-heading">Momento</h4>
                <p className="noto">
                  누구에게나 소중한 날이 있을 것입니다. 그 중 하나가 일생에 단
                  한번인 특별한 날, 바로 사랑하는 사람과 하나가 되는 날입니다.
                  기념일을 새겨 오랫동안 간직할 수 있도록 제작된 커플링,
                  모멘토(Momento)입니다.
                </p>
                <a href="/" className="btn-more">
                  Continue <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/momento/momento1.jpg`}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/momento/momento2.jpg`}
              />
            </div>
          </div>
          <div className="product-holder">
            {/* product-block of the page */}
            <div className="product-block block coll-1">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/momento/momentoGray.jpg`}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-1">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/momento/momentoReturn.jpg`}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/momento/momentoSquare.jpg`}
              />
            </div>
            {/* product-block of the page */}
            <div className="product-block block coll-2">
              <img
                className="img-responsive"
                alt="image description"
                src={`${s3URL}/myimg/main/momento/momentoTheSimple.jpg`}
              />
            </div>
          </div>
        </section>
        <section className="team-sec wow fadeInUp" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="header text-center">
                  <span className="title">Our Awesome Team</span>
                  <h3 className="about-heading">meet our team</h3>
                </div>
                <ul className="list-unstyled team-slider">
                  <TeamBlock people={designer} />
                  <TeamBlock people={designer} />
                  <TeamBlock people={designer} />
                  <TeamBlock people={designer} />
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
