import React, { useState, useEffect } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Icon, Row, Col, Card } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import "./reviewPage.scss";

const { Meta } = Card;

function ReviewPage(props) {
  const [Reviews, setReviews] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();

  useEffect(() => {
    const info = {
      skip: Skip,
      limit: Limit,
    };

    getReviews(info);
  }, []); // 빈 배열을 주면 한번만 실행되는듯?

  const getReviews = () => {
    Axios.post("/api/review/getReviews").then((response) => {
      if (response.data.success) {
        setReviews([...Reviews, ...response.data.reviews]);
        setPostSize(response.data.postSize);
        // console.log(response.data.reviews);
      } else {
        alert("error!! (ReviewPage)");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const info = {
      skip: skip,
      limit: Limit,
    };

    getReviews(info);
    setSkip(skip);
  };

  // responsive
  const renderCards = Reviews.map((review, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={
            <Link to={`/review/${review._id}`}>
              <ImageSlider images={review.fileUrl} />
            </Link>
          }
        >
          <Meta title={review.title} description={review.description} />
        </Card>
      </Col>
    );
  });

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
                <h1 className="main-heading heading">Review</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <Link to="/uploadReview">리뷰 쓰기</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>

      <div className="holder">
        <div style={{ width: "75%", margin: "3rem auto" }}>
          <div style={{ textAlign: "center" }}>
            <h2>
              All Lists <Icon type="rocket" />
            </h2>
          </div>

          {Reviews.length === 0 ? (
            <div
              style={{
                display: "flex",
                height: "300px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>No post yet...</h2>
            </div>
          ) : (
            <div>
              <Row gutter={[16, 16]}>{renderCards}</Row>
            </div>
          )}
          <br />
          <br />

          {PostSize >= Limit && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={onLoadMore}>Load More</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default withRouter(ReviewPage);
