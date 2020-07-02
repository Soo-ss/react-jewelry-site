import React, { useState, useEffect } from "react";
import { Descriptions, Button } from "antd";

function ReviewInfo(props) {
  const [Review, setReview] = useState({});
  useEffect(() => {
    setReview(props.detail);
  }, [props.detail]);
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
        <Button size="large" shape="round" type="danger" onClick>
          Add to Test
        </Button>
      </div>
    </div>
  );
}

export default ReviewInfo;
