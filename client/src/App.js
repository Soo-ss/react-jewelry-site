// 라우팅 관련 일을 처리한다.
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./scss/bootstrap.scss";
import "./scss/fonts.scss";
import "./scss/animate.scss";
import "./scss/slick.scss";
import "./style.scss";
import "./scss/color.scss";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Loader from "./components/views/_partials/Loader/Loader";
import Header from "./components/views/_partials/Header/Header";
import Footer from "./components/views/_partials/Footer/Footer";
import Search from "./components/views/_partials/Search/Search";
import BackTop from "./components/views/_partials/BackTop/BackTop";
import AboutPage from "./components/views/AboutPage/AboutPage";
import CollectionPage from "./components/views/CollectionPage/CollectionPage";
import EventPage from "./components/views/EventPage/EventPage";
import ReservationPage from "./components/views/ReservationPage/ReservationPage";
import ReviewPage from "./components/views/ReviewPage/ReviewPage";
import UploadReviewPage from "./components/views/UploadReviewPage/UploadReviewPage";
import ReviewDetailPage from "./components/views/ReviewDetailPage/ReviewDetailPage";

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
            <Route
              exact
              path="/uploadReview"
              component={Auth(UploadReviewPage, true)}
            />
            <Route exact path="/review" component={Auth(ReviewPage, null)} />
            <Route
              exact
              path="/review/:reviewID"
              component={Auth(ReviewDetailPage, null)}
            />
          </Switch>
        </Router>
        <BackTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
