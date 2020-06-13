import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/userAction";
import { withRouter } from "react-router-dom";
import aboutFHD from "../../images/aboutFHD.png";
import "./loginStyle.scss";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("email", Email);
    console.log("password", Password);

    // body에다가 이메일 패스워드 담아서 보낸다
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        alert("로그인에 성공하셨습니다.");
        props.history.push("/");
        window.location.reload(); // 페이지 로딩이 정상적으로 안돼서 그냥 리로드 시킨다.
      } else {
        alert("Login Error");
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
                <h1 className="main-heading heading-1">Login</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Collection</a>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      <section className="form-sec">
        <form className="contact-form" onSubmit={onSubmitHandler}>
          <fieldset>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                required={true}
                value={Email}
                onChange={onEmailHandler}
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required={true}
                value={Password}
                onChange={onPasswordHandler}
              ></input>
            </div>
            <div className="form-group">
              <a href="/">Forget Password?</a>
              <button className="btn-primary btn-login">Login</button>
              <button className="btn-naver">네이버로그인</button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default withRouter(LoginPage);
