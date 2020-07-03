import React, { useState, useEffect } from "react";
import logo from "../../../../images/logo.png";
import userImg from "../../../../images/user.png";
// import img02 from "../../../images/img02.jpg";
import { useSelector } from "react-redux";
import Axios from "axios";
import { USER_SERVER } from "../../../../Config";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// 앱 내에서 다른 라우트로 이동 할 때에는, 일반 <a href...>foo</a> 형식으로 하면 안됩니다.
// 왜냐하면, 이렇게하면 새로고침을 해버리기 때문이지요.
// 새로고침을 하기 위해선, 리액트 라우터에 있는 Link 컴포넌트를 사용해야합니다.
// 이 컴포넌트를 사용하면 페이지를 새로 불러오는걸 막고, 원하는 라우트로 화면 전환을 해줍니다.

// 페이지가 새로 로딩되지 않으면서 잘 전환이 되나요?
// 이 컴포넌트에 전달되는 props 들은 컴포넌트 내부의 DOM 에도 전달이 되므로,
// 일반 DOM 엘리먼트에 설정 하는 것 처럼 className, style 혹은 onClick 등의 이벤트를 전달 해 줄 수 있습니다.

function Header(props) {
  const user = useSelector((state) => state.user);
  const [CurID, setCurID] = useState("");

  useEffect(() => {
    Axios.get("/api/users/auth").then((response) => {
      setCurID(response.data._id);
    });
  }, []);

  const logoutHandler = () => {
    Axios.get(`${USER_SERVER}/logout`).then((response) => {
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
                <Link to="/">
                  <img src={logo} alt="DESIA" />
                </Link>
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
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/collection">Collection</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-drop">
                      <Link to="/event">Event</Link>
                    </li>
                    <li>
                      <Link to="/review">Review</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </nav>
                <div className="align-right">
                  {/* social-networks of the page */}
                  <ul className="list-unstyled icon-list">
                    <li>
                      <a className="btn-search" href="/">
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
                <Link to="/">
                  <img src={logo} alt="DESIA" />
                </Link>
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
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/collection">Collection</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-drop">
                      <Link to="/event">Event</Link>
                    </li>
                    <li>
                      <Link to="/review">Review</Link>
                    </li>
                    <li>
                      <Link to="/reservation">예약</Link>
                    </li>
                    <li>
                      <a href="/" onClick={logoutHandler}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="align-right">
                  {/* social-networks of the page */}
                  <ul className="list-unstyled icon-list">
                    <li>
                      <Link to={`/me/${CurID}`}>
                        <img src={userImg} alt="images description" />
                      </Link>
                    </li>
                    <li>
                      {/* <a className="btn-search" href="/">
                        <i className="icon-search" />
                      </a> */}
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
