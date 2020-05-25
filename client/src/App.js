// 라우팅 관련 일을 처리한다.
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import "./css/bootstrap.css";
import "./css/fonts.css";
import "./css/animate.css";
import "./css/slick.css";
import "./style.css";
import "./css/color/color.css";
import Loader from "./components/_partials/Loader/Loader";
import Header from "./components/_partials/Header/Header";
import Footer from "./components/_partials/Footer/Footer";
import Search from "./components/_partials/Search/Search";
import BackTop from "./components/_partials/BackTop/BackTop";
import AboutPage from "./components/AboutPage/AboutPage";
import CollectionPage from "./components/CollectionPage/CollectionPage";
import EventPage from "./components/EventPage/EventPage";
import ReservationPage from "./components/ReservationPage/ReservationPage";
import ReviewPage from "./components/ReviewPage/ReviewPage";

function App() {
  // init third party JS files
  useEffect(() => {
    let one = document.createElement("script");
    let two = document.createElement("script");
    let three = document.createElement("script");

    // hook sources
    one.src = `${process.env.PUBLIC_URL}/js/jq.js`;
    two.src = `${process.env.PUBLIC_URL}/js/plugins.js`;
    three.src = `${process.env.PUBLIC_URL}/js/init.js`;

    // persist order of loading
    one.async = false;
    two.async = false;
    three.async = false;

    // append to index.html
    document.body.appendChild(one);
    document.body.appendChild(two);
    document.body.appendChild(three);

    // do clean ups
    return () => {
      document.body.removeChild(one);
      document.body.removeChild(two);
      document.body.removeChild(three);
    };
  }, []);
  return (
    <>
      <Loader />
      <div id="wrapper">
        <Search />
        {/* // null     => 아무나 출입이 가능한 페이지
            // true     => 로그인한 유저만 출입이 가능한 페이지
            // false    => 로그인한 유저는 출입 불가능한 페이지
            // admin은 true주면됨 */}
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/about" component={Auth(AboutPage, null)} />
            <Route
              exact
              path="/collection"
              component={Auth(CollectionPage, null)}
            />
            <Route exact path="/event" component={Auth(EventPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/reservation"
              component={Auth(ReservationPage, true)}
            />
            <Route exact path="/review" component={Auth(ReviewPage, null)} />
          </Switch>
        </Router>
        <BackTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
