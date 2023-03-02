import { PinpointEmail } from "aws-sdk";
import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import styled from "styled-components";
import BOTTOM from "../H_Bottom";

class Emain_refuse extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="User_Guide2_Container">
          <div className="UG2_aside">
            <div className="sidebar_title">이용안내</div>
            <div className="sidebar_container">
              <Link to="/User_Guide/Individual" className="sidebar_link">
                개인정보취급방침
              </Link>
            </div>
            <div className="sidebar_container">
              <Link to="/User_Guide/Email_refuse" className="sidebar_link">
                이메일무단수집거부
              </Link>
            </div>
            <div className="sidebar_container">
              <Link to="/User_Guide/Homepage_map" className="sidebar_link">
                사이트맵
              </Link>
            </div>
          </div>

          <div className="UG2_header">이메일무단수집거부</div>

          <div className="UG2_Main">
            <div className="UG2_BOX">
              본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
              밖의 기술적인 장치를 이용하여 무단으로 수집되는 것을 거부하며,
              이를 위반 시 정보통신망법에 의하여 형사 처벌됨을 유념하시기
              바랍니다.
              <br />
              <br />
              (게시일: 2021년 11월 16일)
            </div>

            <div className="UG3_BOX">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className="UG2_bottom"></div>
        </div>
      </div>
    );
  }
}

export default Emain_refuse;
