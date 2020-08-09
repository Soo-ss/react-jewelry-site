import React, { useEffect, useState } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import Axios from "axios";
import moment from "moment";
import { Button } from "antd";
import "./adminStyle.scss";
import Banner from "../_partials/Banner/Banner";

function AdminPage() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("/api/admin/getAllUsers").then((response) => {
      if (response.data.success) {
        // console.log(response.data.users);
        setUsers([...Users, ...response.data.users]);
      } else {
        alert("모든 유저의 데이터를 가져오는데 실패했습니다.");
      }
    });
  }, []);

  // myName, phone, reservationDate, weddingDate
  // using _id => send message
  //   console.log(Users);

  const sendSMS = (order, phone, name, reservationDate) => {
    const date = moment(reservationDate).format("YYYY-MM-DD HH:mm");
    // console.log(date);

    let contents = "";
    const choice = [
      `안녕하세요. \n
        ${name} 신랑님 \n예물전문브랜드 창원데시아입니다.\n${date}시 예약 확인되셨습니다. \n평생에 한번인 예물 꼼꼼한\n상담도와드리겠습니다.\n만약 시간 변경 시 전화 부탁드리겠습니다. \n오늘도 \n행복한 하루 보내세요^^\n\nTEL: 055-282-3173\n경남 창원시 성산구 용지로 95 2층 데시아 (청산한의원 2층)\n \n[Wedding Jewelry DESIA]`,
      `안녕하세요.${name}신랑님 \n웨딩주얼리 데시아입니다.\n\n금일 13시 예약 잡아주셔서 확인차 \n연락드립니다.\n\n혹시 목걸이도 보는 경우 목선이 \n보이는 의상으로 착용하고 오시면 \n좀 더 편하게 착용 가능 하다고 신부님께 전달부탁드립니다^^\n\n본 건물에는 주차장이 없는 관계로 \n맞은편 상가주차장이나 건물 뒤 \n주택가 쪽에 주차하시면 됩니다. \n\n혹시 시간 변경시에는 꼭 연락 부탁드립니다\n\n편안한 상담 도와드리겠습니다^^ \n\n문의\n주소 :경남창원시성산구용지로 95 청산한의원2층\n전화번호:055-282-3173\n\n[Wedding Jewelry DESIA]`,
      "세번째 문자",
    ];

    switch (order) {
      case 1:
        contents = choice[0];
        break;
      case 2:
        contents = choice[1];
        break;
      case 3:
        contents = choice[2];
        break;

      default:
        break;
    }

    console.log(contents);

    const info = {
      contents: contents,
      phone: phone,
    };

    Axios.post("/api/admin/sendSMS", info).then((response) => {
      //   console.log(response.data);
      if (response.data.success) {
        alert("문자 보내기 성공!");
      } else {
        alert("문자 보내기 실패!");
      }
    });
  };

  const renderLists = Users.map((user) => {
    return (
      <tr key={user._id}>
        <td>{user.myName}</td>
        <td>{user.phone}</td>
        <td>{moment(user.reservationDate).format("YYYY-MM-DD HH:mm")}</td>
        <td>{moment(user.weddingDate).format("YYYY-MM-DD HH:mm")}</td>
        <td>
          <Button
            style={{ borderRadius: "50px" }}
            onClick={() =>
              sendSMS(1, user.phone, user.myName, user.reservationDate)
            }
          >
            Send 1
          </Button>
        </td>
        <td>
          <Button
            style={{ borderRadius: "50px" }}
            onClick={() =>
              sendSMS(2, user.phone, user.myName, user.reservationDate)
            }
          >
            Send 2
          </Button>
        </td>
        <td>
          <Button
            style={{ borderRadius: "50px" }}
            onClick={() =>
              sendSMS(3, user.phone, user.myName, user.reservationDate)
            }
          >
            Send 3
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <main id="main">
      <Banner title="admin" bg={aboutFHD} />
      <h2 className="noto" style={{ textAlign: "center", padding: "20px 0" }}>
        회원 리스트입니다.
      </h2>
      <div
        className="adminPage"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table>
          <thead className="noto">
            <tr>
              <th>성함</th>
              <th>연락처</th>
              <th>예약 날짜</th>
              <th>예식일</th>
              <th>전송 1</th>
              <th>전송 2</th>
              <th>전송 3</th>
            </tr>
          </thead>
          <tbody>{renderLists}</tbody>
        </table>
      </div>
      <h1 style={{ padding: "20px" }}>Soo's MEMO</h1>
      <div style={{ padding: "20px" }} className="noto">
        <p>- 이벤트 추가하기</p>
        <p>- 줄바꿈이 안돼서 썸머노트 추가하기</p>
        <p>- 동영상 소리 여부, 플레이어?</p>
        <p>- Date Picker == 하루에 손님 몇명? 몇시간 단위로 예약?</p>
        <p>
          - 하트비트, 디비보, 모멘토 이렇게 하고 각 대표반지 몇개? (6개하면
          딱맞음)
        </p>
        <p>- 랜딩페이지엔 하트비트, 디비보, 모멘토 3개 하면 될듯?</p>
        <p>- Featured Products에는 480*620 *4, 960*1235, 960*620</p>
        <p>- 리터칭 인력 구하기? 단가 모름</p>
      </div>
    </main>
  );
}

export default AdminPage;
