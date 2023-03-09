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
          <ul className="footer_company">
            {/* footer - 회사명 */}
            <li className="company_title">
              <h1>도운테크</h1>
            </li>
            <li className="company_main">
              {/* footer - 회사 메인 */}
              <div className="info CEO">
                <h1 className="info_title">대표</h1>
                <span className="info_value">김종운</span>
              </div>
              <div className="info CRN">
                <h1 className="info_title">사업자등록번호</h1>
                <span className="info_value">124-46-70585</span>
              </div>
            </li>

            <li className="company_contact">
              <div className="info company_contact-address">
                <h1 className="info_title">주소</h1>
                <span className="info_value">124-46-70585</span>
              </div>
              {/* footer - 전화 & 팩스 */}
              <div className="info company_contact-tel">
                <div className="info tel">
                  <h1 className="info_title">전화</h1>
                  <span className="info_value">
                    <a href="tel:070-8871-2866">{"070-8871-2866"}</a>
                  </span>
                </div>
                <div className="info fax">
                  <h1 className="info_title">팩스</h1>
                  <span className="info_value">124-46-70585</span>
                </div>
              </div>
              {/* footer - 이메일 */}
              <div className="info company_contact-email">
                <h1 className="info_title">이메일</h1>
                <span className="info_value">
                  <a href="mailto:dawntech@dawnth.co.kr">
                    {"dawntech@dawnth.co.kr"}
                  </a>
                </span>
              </div>
            </li>
          </ul>

          {/* 정책 이동 링크 */}
          <div className="footer_link">
            <div className="bottom_Policy2">
              <Link to="/User_Guide/Individual" className="User_Guide_Ctl">
                개인정보취급방침
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

          <div>
            {/* 구분선 */}
            <div className="divider"></div>

            {/* 저작권 */}
            <div className="footer_copyright">
              Copyright 2009. Dawntech. All righrs reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Bottom;
