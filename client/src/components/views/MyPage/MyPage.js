import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import aboutFHD from "../../../images/aboutFHD.png";
import Axios from "axios";
import { Button } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import "../MyPage/myPageStyle.scss";
import Banner from "../_partials/Banner/Banner";

function MyPage(props) {
  const userID = props.match.params.userID;
  const [MyID, setMyID] = useState("");
  const [Name, setName] = useState("");
  const [IsAdmin, setIsAdmin] = useState(false);
  const [UserInfo, setUserInfo] = useState({});

  const user = useSelector((state) => state.user);

  useEffect(() => {
    Axios.get("/api/users/auth").then((response) => {
      console.log(response.data);
      setMyID(response.data._id);
      setName(response.data.name);
      setIsAdmin(response.data.isAdmin);
    });

    Axios.get(`/api/users/get_user_by_id?id=${userID}&type=single`).then(
      (response) => {
        if (response.data.success) {
          setUserInfo({ ...UserInfo, ...response.data.user });
        } else {
          alert("내 정보 가져오기 실패!");
        }
      }
    );
  }, []);

  console.log(UserInfo);

  const withdraw = () => {
    Axios.post(
      `/api/users/delete_user_by_id?id=${MyID}&type=single`,
      user
    ).then((response) => {
      if (response.data.success) {
        alert("회원탈퇴가 완료되었습니다.");
        props.history.push("/");
      } else {
        alert("Error!!");
      }
    });
  };

  if (IsAdmin) {
    return (
      <div id="main">
        <Banner title="myPage" bg={aboutFHD} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "1080px" }} className="myPage noto">
            <h3>
              <strong>안녕하세요,</strong>
            </h3>
            <h1>
              <strong>{Name}님!</strong>
            </h1>
            <p style={{ fontSize: "20px" }}>DESIA에 오신것을 환영합니다~</p>
            <br />
            <div
              style={{ borderBottom: "1px solid #666", marginBottom: "30px" }}
            >
              <p>
                <i
                  style={{ fontSize: "30px", paddingRight: "10px" }}
                  className="fa fa-clock-o"
                  aria-hidden="true"
                ></i>
                예약 날짜:{" "}
                {moment(UserInfo.reservationDate).format("YYYY-MM-DD HH:mm")}
              </p>
              <p>
                <i
                  style={{ fontSize: "30px", paddingRight: "10px" }}
                  className="fa fa-clock-o"
                  aria-hidden="true"
                ></i>
                예식일:{" "}
                {moment(UserInfo.weddingDate).format("YYYY-MM-DD HH:mm")}
              </p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <button style={{ marginLeft: "auto" }} className="completeBtn">
                <Link to="/admin">관리자 페이지</Link>
              </button>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <button
                style={{ marginLeft: "auto" }}
                className="completeBtn"
                onClick={() => withdraw()}
              >
                <a>회원 탈퇴</a>
              </button>
            </div>

            <div style={{ padding: "70px 0", fontSize: "20px" }}>
              천천히 구경하고 가세요😀 (?)
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="main">
        <Banner title="myPage" bg={aboutFHD} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "1080px" }} className="myPage noto">
            <h3>
              <strong>안녕하세요,</strong>
            </h3>
            <h1>
              <strong>{Name}님!</strong>
            </h1>
            <p style={{ fontSize: "20px" }}>DESIA에 오신것을 환영합니다~</p>
            <br />
            <div
              style={{ borderBottom: "1px solid #666", marginBottom: "30px" }}
            >
              <p>
                <i
                  style={{ fontSize: "30px", paddingRight: "10px" }}
                  className="fa fa-clock-o"
                  aria-hidden="true"
                ></i>
                예약 날짜:{" "}
                {moment(UserInfo.reservationDate).format("YYYY-MM-DD HH:mm")}
              </p>
              <p>
                <i
                  style={{ fontSize: "30px", paddingRight: "10px" }}
                  className="fa fa-clock-o"
                  aria-hidden="true"
                ></i>
                예식일:{" "}
                {moment(UserInfo.weddingDate).format("YYYY-MM-DD HH:mm")}
              </p>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <button
                style={{ marginLeft: "auto" }}
                className="completeBtn"
                onClick={() => withdraw()}
              >
                회원 탈퇴
              </button>
            </div>

            <div style={{ padding: "70px 0", fontSize: "20px" }}>
              천천히 구경하고 가세요😀
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
