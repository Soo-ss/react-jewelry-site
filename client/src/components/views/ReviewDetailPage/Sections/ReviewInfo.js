import React, { useState, useEffect } from "react";
import { Descriptions, Button } from "antd";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function ReviewInfo(props) {
  const reviewID = props.match.params.reviewID;
  const [Review, setReview] = useState({});
  const [CurID, setCurID] = useState("");
  const [ReviewUserID, setReviewUserID] = useState("");

  useEffect(() => {
    Axios.get("/api/users/auth").then((response) => {
      // console.log(response.data._id);
      setCurID(response.data._id);
    });
    Axios.get(`/api/review/reviews_by_id?id=${reviewID}&type=single`).then(
      (response) => {
        setReviewUserID(response.data[0].creator._id);
      }
    );

    setReview(props.detail);
  }, [props.detail]);
  const user = useSelector((state) => state.user);

  const onDelete = () => {
    Axios.post(
      `/api/review/delete_review_by_id?id=${reviewID}&type=single`,
      user
    ).then((response) => {
      if (response.data.success) {
        alert("리뷰가 삭제되었습니다.");
        props.history.push("/review");
      } else {
        alert("리뷰 삭제 실패!!");
      }
    });
  };

  if (ReviewUserID === CurID) {
    return (
      <div>
        <Descriptions title="Review Info">
          <Descriptions.Item label="View">{Review.views}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {Review.description}
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
        <div>
          <Button
            size="large"
            shape="round"
            type="danger"
            onClick={() => onDelete()}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Descriptions title="Review Info">
          <Descriptions.Item label="View">{Review.views}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {Review.description}
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(ReviewInfo);
