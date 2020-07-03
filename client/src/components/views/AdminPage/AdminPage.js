import React, { useEffect, useState } from "react";
import aboutFHD from "../../../images/aboutFHD.png";
import Axios from "axios";
import Moment from "react-moment";
import { Button } from "antd";
import "./adminStyle.scss";

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
  console.log(Users);

  const renderLists = Users.map((user) => {
    return (
      <tr key={user._id}>
        <td>{user.myName}</td>
        <td>{user.phone}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm">{user.reservationDate}</Moment>
        </td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm">{user.weddingDate}</Moment>
        </td>
        <td>
          <Button>Send 1</Button>
        </td>
        <td>
          <Button>Send 2</Button>
        </td>
        <td>
          <Button>Send 3</Button>
        </td>
      </tr>
    );
  });

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
                <h1 className="main-heading heading">Admin</h1>
              </div>
            </div>
          </div>
        </div>
        <span className="year">TRENDS FOR 2020</span>
      </section>
      <div className="holder">
        <div>
          <h1>현재는 예약한 회원만 표시됩니다.</h1>
          <table>
            <thead>
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
      </div>
    </main>
  );
}

export default AdminPage;
