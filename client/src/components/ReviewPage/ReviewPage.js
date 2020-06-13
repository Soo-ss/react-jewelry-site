import React from "react";
import aboutFHD from "../../images/aboutFHD.png";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

function ReviewPage() {
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
        style={{ backgroundImage: `url(${aboutFHD})` }}>
        <span className="sale-percent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading heading">Reservation</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">shop</a>
                  </li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>

      <div className="holder">
        <h3>LEAVE A MESSAGE</h3>
        <form className="contact-form" onSubmit={onSubmit}>
          <fieldset>
            <div className="form-group">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="제목"
                  required="true"
                  value={Title}
                  onChange={onTitle}></input>
              </div>
              <div className="col">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="설명"
                  required="true"
                  value={Desc}
                  onChange={onDesc}></textarea>
              </div>
            </div>
            <button className="btn-primary btn-submit">예약하기</button>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

export default withRouter(ReviewPage);
