import React, { useEffect } from "react";
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
import Banner from "../_partials/Banner/Banner";
// import { withRouter } from "react-router-dom";

function CollectionPage() {
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
    <main id="main">
      <Banner title="collection" bg={collectionBG} />
      {/* product-section of the page*/}
      <section className="product-sec wow fadeInUp" data-wow-delay="0.4s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="list-unstyled filter-list">
                <li className="active">
                  <a>all</a>
                </li>
                <li>
                  <a data-filter=".dVivo">dVivo</a>
                </li>
                <li>
                  <a data-filter=".haram">haram</a>
                </li>
                <li>
                  <a data-filter=".momento">momento</a>
                </li>
                <li>
                  <a data-filter=".weddingBand">weddingBand</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="holder" id="masonry-container">
          {/* product-block of the page*/}
          <div className="product-block coll-2 dVivo">
            {/* 공통요소 */}
            {/* <div className="over">
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
            </div> */}
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/dVivo/dVivo.jpg`}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 dVivo">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/dVivo/dVivoCube.jpg`}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-1 dVivo">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/dVivo/dVivoMain2.jpg`}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-1 dVivo">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/dVivo/dVivoSimple.jpg`}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-1 haram">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/haram/haramDiamond.jpg`}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 haram">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/haram/haramNew.jpg`}
            />
          </div>
          {/* product-block of the page*/}
          <div className="product-block coll-2 haram">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/haram/haramSimple.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momento1.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momento2.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momento3.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momentoGray.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momentoReturn.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momentoRoma.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momentoSquare.jpg`}
            />
          </div>
          <div className="product-block coll-2 momento">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/momento/momentoTheSimple.jpg`}
            />
          </div>
          <div className="product-block coll-2 weddingBand">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/weddingBand/banus.jpg`}
            />
          </div>
          <div className="product-block coll-2 weddingBand">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/weddingBand/ido.jpg`}
            />
          </div>
          <div className="product-block coll-2 weddingBand">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/weddingBand/incontro.jpg`}
            />
          </div>
          <div className="product-block coll-2 weddingBand">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/weddingBand/noje.jpg`}
            />
          </div>
          <div className="product-block coll-2 weddingBand">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/weddingBand/nojeAngle.jpg`}
            />
          </div>
          <div className="product-block coll-2 weddingBand">
            <img
              className="img-responsive"
              alt="image description"
              src={`${s3URL}/myimg/collection/weddingBand/yeah.jpg`}
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
