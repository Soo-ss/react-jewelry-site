import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import aboutFHD from "../../../images/aboutFHD.png";
import Axios from "axios";
import { Button } from "antd";
import { useSelector } from "react-redux";

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
        <section
          className="banner"
          style={{ backgroundImage: `url(${aboutFHD})` }}
        >
          <span className="sale-percent">Best of best</span>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="caption">
                  <h1 className="main-heading heading">My Page</h1>
                </div>
              </div>
            </div>
          </div>
          <span className="year">TRENDS FOR 2020</span>
        </section>
        <div className="holder">
          <h1>안녕하세요, {Name}님!</h1>
          <p>DESIA에 오신것을 환영합니다~</p>
          <Button>
            <Link to="/admin">관리자 페이지</Link>
          </Button>
          <Button onClick={() => withdraw()}>회원 탈퇴</Button>
          <div>
            <p>예약 날짜: {UserInfo.reservationDate}</p>
            <p>예식일: {UserInfo.weddingDate}</p>
          </div>
        </div>
      </div>
    );
  } else {
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
                  <h1 className="main-heading heading">My Page</h1>
                </div>
              </div>
            </div>
          </div>
          <span className="year">TRENDS FOR 2020</span>
        </section>
        <div className="holder">
          <h1>안녕하세요, {Name}님!</h1>
          <p>DESIA에 오신것을 환영합니다~</p>
          <Button onClick={() => withdraw()}>회원 탈퇴</Button>
          <div>
            <p>예약 날짜: {UserInfo.reservationDate}</p>
            <p>예식일: {UserInfo.weddingDate}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
