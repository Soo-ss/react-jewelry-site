import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import aboutFHD from "../../../images/aboutFHD.png";
import { useSelector } from "react-redux";
import Axios from "axios";
import Banner from "../_partials/Banner/Banner";

function ReservationPage(props) {
  const user = useSelector((state) => state.user);

  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [WeddingDate, setWeddingDate] = useState("");
  const [ReservationDate, setReservationDate] = useState("");

  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onWeddingDateHandler = (e) => {
    setWeddingDate(e.currentTarget.value);
  };

  const onReservationDateHandler = (e) => {
    setReservationDate(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(user.userData);
    const info = {
      creator: user.userData._id,
      phone: Phone,
      name: Name,
      weddingDate: WeddingDate,
      reservationDate: ReservationDate,
    };

    Axios.post("/api/reservation/postReservation", info).then((response) => {
      if (response.data.success) {
        alert("예약에 성공하셨습니다.");
        props.history.push("/");
        window.location.reload();
      } else {
        alert("error!!!");
      }
    });
  };

  return (
    <main id="main">
      <Banner title="reservation" bg={aboutFHD} />
      <section className="contact-sec">
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.280574870585!2d128.67509821552204!3d35.2243849624974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568cce63a6cb2e7%3A0xe1bb28f9bf7a8776!2z6rK97IOB64Ko64-EIOywveybkOyLnCDshLHsgrDqtawg7KSR7JWZ64-ZIDY3LTEy!5e0!3m2!1sko!2skr!4v1587348283496!5m2!1sko!2skr"
            width="100%"
            height="800px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="text-holder noto">
          <div className="txt-frame">
            <div className="holder">
              <div className="contact-detail">
                <h3>contact detail</h3>
                <ul className="list-unstyled contact-info">
                  <li>
                    <i className="icon icon-location"></i>
                    <address>창원시 성산구 중앙동 67-12</address>
                  </li>
                  <li>
                    <i className="icon icon-email"></i>
                    <a className="txt" href="/">
                      idonknow@youremail.com
                    </a>
                  </li>
                  <li>
                    <i className="icon icon-phone"></i>
                    <a className="txt" href="/">
                      055-282-3173
                    </a>
                  </li>
                  <li>
                    <i
                      style={{ fontSize: "23px" }}
                      className="icon fa fa-clock-o"
                    />
                    <a className="txt">평일 11시~19시</a>
                  </li>
                  <li>
                    <i
                      style={{ fontSize: "23px" }}
                      className="icon fa fa-clock-o"
                    />
                    <a className="txt">주말 11시~20시</a>
                  </li>
                </ul>
              </div>
              <div className="about-detail">
                <h3>warning</h3>
                <p>(❁´◡`❁) 주의사항 ༼ つ ◕_◕ ༽つ</p>
                <p>예약 원하시는 날짜, 시간과 연락처를 남겨주세요^^</p>
              </div>
            </div>
            <div className="holder">
              <h3>LEAVE A MESSAGE</h3>
              <form className="contact-form" onSubmit={onSubmitHandler}>
                <fieldset>
                  <div className="form-group">
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="전화번호"
                        required={true}
                        value={Phone}
                        onChange={onPhoneHandler}
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="성함"
                        required={true}
                        value={Name}
                        onChange={onNameHandler}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="date"
                      required={true}
                      value={WeddingDate}
                      onChange={onWeddingDateHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="datetime-local"
                      required={true}
                      value={ReservationDate}
                      onChange={onReservationDateHandler}
                    ></input>
                  </div>
                  <button className="btn-primary btn-submit">예약하기</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withRouter(ReservationPage);
