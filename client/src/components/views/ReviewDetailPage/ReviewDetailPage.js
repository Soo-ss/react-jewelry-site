import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col } from "antd";
import ReviewImage from "./Sections/ReviewImage";
import ReviewInfo from "./Sections/ReviewInfo";
import { withRouter } from "react-router-dom";
import aboutFHD from "../../../images/aboutFHD.png";
// import { useSelector } from "react-redux";

function ReviewDetailPage(props) {
  // withRouter 안싸주면 params undefined
  const reviewID = props.match.params.reviewID;
  const [Review, setReview] = useState([]);
  // console.log(reviewID);
  // const [ReviewUserID, setReviewUserID] = useState("");

  useEffect(() => {
    Axios.get(`/api/review/reviews_by_id?id=${reviewID}&type=single`).then(
      (response) => {
        setReview(response.data[0]);
        // setReviewUserID(response.data[0].creator._id);
      }
    );
  }, []);

  // const user = useSelector((state) => state.user.userData);
  // console.log(user);

  return (
    <div id="main">
      <section
        className="banner"
        style={{ backgroundImage: `url(${aboutFHD})` }}
      >
        <span className="sale-percent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading heading">Detail</h1>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      <div className="holder">
        <div
          className="postPage"
          style={{ width: "100%", padding: "3rem 4rem" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>{Review.title}</h1>
          </div>
          <br />
          <Row gutter={[16, 16]}>
            <Col lg={12} xs={24}>
              <ReviewImage detail={Review} />
            </Col>
            <Col lg={12} xs={24}>
              <ReviewInfo detail={Review} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ReviewDetailPage);
