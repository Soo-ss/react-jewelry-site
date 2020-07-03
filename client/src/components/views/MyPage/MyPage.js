import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import aboutFHD from "../../../images/aboutFHD.png";
import Axios from "axios";
import { Button } from "antd";

function MyPage() {
  const [MyID, setMyID] = useState("");
  const [Name, setName] = useState("");
  const [IsAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    Axios.get("/api/users/auth").then((response) => {
      console.log(response.data);
      setMyID(response.data._id);
      setName(response.data.name);
      setIsAdmin(response.data.isAdmin);
    });
  }, []);

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
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
