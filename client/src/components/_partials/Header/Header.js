import React from "react";
import logo from "../../../images/logo.png";
import userImg from "../../../images/user.png";
import img02 from "../../../images/img02.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";

function Header(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        alert("로그아웃 하셨습니다");
        props.history.push("/");
        window.location.reload();
      } else {
        alert("로그아웃 실패!!");
      }
    });
  };

  // logout state
  if (user.userData && !user.userData.isAuth) {
    return (
      <header id="header" className="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/* logo of the page */}
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="DESIA" />
                </a>
              </div>
              <div className="nav-holder">
                {/* opener */}
                <a href="#" className="nav-opener">
                  <span>menu</span>
                </a>
                {/* nav of the page */}
                <nav id="nav">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a href="#">Intro</a>
                      <ul className="list-unstyled drop">
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/collection">Collection</a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-drop">
                      <a href="/event">Event</a>
                    </li>
                    <li>
                      <a href="/review">Review</a>
                    </li>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/register">Register</a>
                    </li>
                  </ul>
                </nav>
                <div className="align-right">
                  {/* social-networks of the page */}
                  <ul className="list-unstyled icon-list">
                    <li>
                      <a className="btn-search" href="#">
                        <i className="icon-search" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );

    // login state
  } else {
    return (
      <header id="header" className="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/* logo of the page */}
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="DESIA" />
                </a>
              </div>
              <div className="nav-holder">
                {/* opener */}
                <a href="#" className="nav-opener">
                  <span>menu</span>
                </a>
                {/* nav of the page */}
                <nav id="nav">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a href="#">Intro</a>
                      <ul className="list-unstyled drop">
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/collection">Collection</a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-drop">
                      <a href="/event">Event</a>
                    </li>
                    <li>
                      <a href="/review">Review</a>
                    </li>
                    <li>
                      <a href="/reservation">예약</a>
                    </li>
                    <li>
                      <a href="#" onClick={logoutHandler}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="align-right">
                  {/* social-networks of the page */}
                  <ul className="list-unstyled icon-list">
                    <li>
                      <a href="#">
                        <img src={userImg} alt="images description" />
                      </a>
                    </li>
                    <li>
                      <a className="btn-search" href="#">
                        <i className="icon-search" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
