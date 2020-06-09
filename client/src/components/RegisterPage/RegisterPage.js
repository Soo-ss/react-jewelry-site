import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/userAction";
import aboutFHD from "../../images/aboutFHD.png";
// import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        alert("회원가입이 완료되었습니다.");
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <main id="main">
      <section
        className="banner"
        style={{ backgroundImage: `url(${aboutFHD})` }}
      >
        <span className="sale-persent">Best of best</span>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="caption">
                <h1 className="main-heading heading-1">Register</h1>
                <ul className="list-unstyled breadcrumbs">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                  </li>
                  <li>회원가입</li>
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
                required="true"
                value={Email}
                onChange={onEmailHandler}
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                required="true"
                value={Name}
                onChange={onNameHandler}
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required="true"
                value={Password}
                onChange={onPasswordHandler}
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="ConfirmPassword"
                required="true"
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              ></input>
            </div>
            <div className="form-group">
              <button className="btn-primary btn-login">Join</button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}

export default RegisterPage;
