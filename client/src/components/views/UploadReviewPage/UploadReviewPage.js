import React, { useState } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import UploadImage from "../../utils/UploadImage";
import Banner from "../_partials/Banner/Banner";

function UploadReviewPage(props) {
  const user = useSelector((state) => state.user);

  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Images, setImages] = useState([]);

  const onTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onDesc = (e) => {
    setDesc(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!Title || !Desc || !Images) {
      return alert("모든 값을 채워 주세요");
    }

    const info = {
      creator: user.userData._id,
      title: Title,
      desc: Desc,
      images: Images,
    };

    // console.log(info);

    Axios.post("/api/review/uploadReview", info).then((response) => {
      if (response.data.success) {
        alert("리뷰를 등록하셨습니다.");
        props.history.push("/review");
        window.location.reload();
      } else {
        alert("error!!!(UploadReviewPage)");
      }
    });
  };
  return (
    <main id="main">
      <Banner title="upload review" bg={aboutFHD} />
      <div className="holder">
        <h3 style={{ textAlign: "center" }}>LEAVE A MESSAGE</h3>
        <form
          className="contact-form"
          // encType="multipart/form-data"
          onSubmit={onSubmit}
        >
          <fieldset
            style={{
              maxWidth: "700px",
              margin: "2rem auto",
            }}
          >
            <div className="form-group">
              <div className="col">
                <UploadImage refreshFunction={updateImages} />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="제목"
                  required={true}
                  value={Title}
                  onChange={onTitle}
                ></input>
              </div>
              <div className="col">
                <textarea
                  style={{ resize: "none", height: "300px" }}
                  className="form-control"
                  type="text"
                  placeholder="설명"
                  required={true}
                  value={Desc}
                  onChange={onDesc}
                ></textarea>
              </div>
            </div>
            <button className="btn-primary btn-submit">Upload</button>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

export default withRouter(UploadReviewPage);
