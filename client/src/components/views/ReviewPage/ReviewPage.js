import React, { useState } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";

function ReviewPage(props) {
  const user = useSelector((state) => state.user);

  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const onTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onDesc = (e) => {
    setDesc(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const info = {
      creator: user.userData._id,
      title: Title,
      desc: Desc,
    };

    Axios.post("/api/review/uploadReview", info).then((response) => {
      if (response.data.success) {
        alert("리뷰를 등록하셨습니다.");
        props.history.push("/");
        window.location.reload();
      } else {
        alert("error!!!");
      }
    });
  };

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
        <h3>LEAVE A MESSAGE</h3>
      </div>
    </main>
  );
}

export default withRouter(ReviewPage);
