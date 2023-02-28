import React from "react";
import Axios from "axios";
import { Image } from "react-bootstrap";
//npm i react-bootstrap-table --save
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import BOTTOM from "../H_Bottom";

import { Route, Link, Router } from "react-router-dom";

class Company_Introduce extends React.Component {
  constructor(props) {
    super();

    this.handleResize = this.handleResize.bind(this);
    this.state = {
      size_x: "0",
      size_y: "0",
    };
  }

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

  /*
    <div className="container_Test" >
            <div class="Test_header">Header</div>
            <div class="Test_Menu">Menu</div>
            <div class="Test_Main">Main</div>
            <div class="Test_top">Top</div>
            <div class="Test_aside">Aside</div>
            <div class="Test_bottom">Bottom</div>
            <div class="Test_footer">Footer</div>
            </div>  
    */
  render() {
    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="Company_Come_Container">
          <div className="come_aside">
            <div className="sidebar_title">회사소개</div>
            {/*<div className = "sidebar_container"><Link to ="/Company_Guide/Company_Year" className="sidebar_link">회사연혁</Link></div>*/}
            <div className="sidebar_container">
              <Link
                to="/Company_Guide/Company_Introduce"
                className="sidebar_link"
              >
                인사말
              </Link>
            </div>
            <div className="sidebar_container">
              <Link to="/Company_Guide/Company_Come" className="sidebar_link">
                오시는 길
              </Link>
            </div>
          </div>

          <div className="Come_header">
            <Image
              src="../img/2020.png"
              alt="img"
              className="img_size3"
              fluid
            ></Image>
          </div>

          <div className="Come_Main">
            <div className="introduce_header">
              {" "}
              최고의 전문성과 신뢰를 바탕으로 <br />
              함께 성장해 나가겠습니다.
            </div>

            <div className="introduce_explain">
              안녕하십니까? 도운테크 홈페이지를 찾아주셔서 감사합니다.
              <br />
              <br />
              당사는 국내에서 회로설계 ,PCB제작 및 전자제어를 하는 연구 개발
              회사로서
              <br />
              다년간 풍부한 경험과 기술을 바탕으로 전국 각처의 기업 및<br />
              고객 한분 한분께 최고의 품질과 서비스를 제공하기 위해 노력하고
              있습니다.
              <br />
              <br />
              도운테크는 축적된 노하우와 철저한 애프터서비스를 바탕으로 <br />
              최고의 서비스 및 제품제작을 신속하게 공급하고자 노력하고 있습니다.
              <br />
              앞으로도 보다 경쟁력있고 신속한 서비스 , 다양한 기술 습득에 최선을
              다할 것이며
              <br />
              끊임없는 관심과 성원을 부탁드립니다.
            </div>
            <div className="introduce_advantage">
              <div className="introduce_picture_container">
                <Image
                  src="../img/introduce1.png"
                  alt="img"
                  className="introduce_picture"
                  fluid
                ></Image>
                <br />
                <br />
              </div>

              <div className="introduce_picture_container">
                <Image
                  src="../img/introduce2.png"
                  alt="img"
                  className="introduce_picture"
                  fluid
                ></Image>{" "}
                <br /> <br />
              </div>

              <div className="introduce_picture_container">
                <Image
                  src="../img/introduce3.png"
                  alt="img"
                  className="introduce_picture"
                  fluid
                ></Image>{" "}
                <br /> <br />
              </div>
            </div>
          </div>

          <div className="Come_Main2"></div>
        </div>
      </div>
    );
  }
}
export default Company_Introduce;
