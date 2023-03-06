import React from "react";
import Axios from "axios";
//npm i react-bootstrap-table --save
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨
import SignIn from ".//Signln";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { Route, Link, Router } from "react-router-dom";
class Bottom extends React.Component {
  constructor(props) {
    super();

    this.handleResize = this.handleResize.bind(this);
    this.state = {
      size_x: "0",
      size_y: "0",

      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleResize(event) {
    //—- 새로운 창 크기에 따라 라디오 버튼의 크기를 조절하는 함수를 구현한다.
    this.setState({
      size_x: window.innerWidth,
      size_y: window.innerHeight,
    });
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize); // —- 미지원 window 이벤트 리스너를 제거한다.
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize); // —- 미지원 window 이벤트 리스너를 등록한다.

    this.setState({
      size_x: window.innerWidth,
      size_y: window.innerHeight,
    });
  }
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer_link">
            <div className="bottom_Policy2">
              <Link to="/User_Guide/Individual" className="User_Guide_Ctl">
                개인정보 취급방침
              </Link>
            </div>
            <div className="bottom_Policy2">
              <Link to="/User_Guide/Email_refuse" className="User_Guide_Ctl">
                이메일무단수집거부
              </Link>
            </div>
            <div className="bottom_Policy2">
              <Link to="/User_Guide/Homepage_map" className="User_Guide_Ctl">
                사이트맵
              </Link>
            </div>
          </div>
          <ul className="footer_contact">
            <li>{"도운테크 대표 : 김종운"}</li>
            <li>{"사업자등록번호 : 124-46-70585"}</li>
            <li>
              {"주소 : (445-300) 경기도 화성시 기산동 217-8번지 (도운테크)"}
            </li>
            <li>
              {"TEL : "}
              <a href="tel:070-8871-2866">{"070-8871-2866"}</a>
            </li>
            <li>{"FAX : 0505-810-1871"}</li>
            <li>
              {"E-mail : "}
              <a href="mailto:dawntech@dawnth.co.kr">
                {"dawntech@dawnth.co.kr"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Bottom;
