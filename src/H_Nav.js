import React from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import HOME from "./HOME_file/Page_HOME";
import pruduct from "./Pruduct_Guide/Page_Pruduct";
//특정 주소에 특정 컴포넌트를 보여주겠다.
import { Route, Link } from "react-router-dom";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

//$ npm install --save react-navbar-dropdown
//npm install react-bootstrap bootstrap
class J_Nav extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     show: false,
  //   };
  //   this.showDropdown = this.showDropdown.bind(this);
  //   this.hideDropdown = this.hideDropdown.bind(this);
  // }
  // showDropdown() {
  //   this.setState({ show: true });
  // }
  // hideDropdown() {
  //   this.setState({ show: false });
  // }
  render() {
    return (
      <div className="nav_Background">
        {/**   <!-- Navbar   --> */}
        <ReactBootStrap.Navbar bg="light" variant="light" expand="lg">
          Dawntech
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav ">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/" className="nav_home">
                <Link to="/" className="nav_home_btn">
                  홈
                </Link>
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.NavDropdown
                title="회사소개"
                id="basic-nav-dropdown"
                className="navheader_title "
              >
                <ReactBootStrap.NavDropdown.Item
                  href={`/Company_Guide/Company_Introduce`}
                  className="Link_btn "
                >
                  인사말
                </ReactBootStrap.NavDropdown.Item>

                <ReactBootStrap.NavDropdown.Item
                  href={`/Company_Guide/Company_Come`}
                  className="Link_btn "
                >
                  오시는 길
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>

              {/** 
               <ReactBootStrap.NavDropdown title="제품안내" id="basic-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item >
                         <Link to="/pruduct" className ="Link_btn" style ={{ color: 'inherit', textDecoration: 'inherit'}}>제품안내</Link>
                    </ReactBootStrap.NavDropdown.Item>
               </ReactBootStrap.NavDropdown>
*/}

              <ReactBootStrap.NavDropdown
                title="기술 자료실"
                id="basic-nav-dropdown"
                className="navheader_title"
              >
                <ReactBootStrap.NavDropdown.Item
                  href={`/Company_Tech`}
                  className="Link_btn "
                >
                  기술 자료실
                </ReactBootStrap.NavDropdown.Item>

                <ReactBootStrap.NavDropdown.Item
                  href={`/Company_Tech/Company_Variety_Tech`}
                  className="Link_btn "
                >
                  TECH
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>

              <ReactBootStrap.NavDropdown
                title="공지사항"
                id="basic-nav-dropdown"
                className="navheader_title"
              >
                <ReactBootStrap.NavDropdown.Item
                  href={`/Notice`}
                  className="Link_btn "
                >
                  공지사항
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>

              <ReactBootStrap.NavDropdown
                title="고객센터"
                id="basic-nav-dropdown"
                className="navheader_title"
              >
                {/**   
                    <ReactBootStrap.NavDropdown.Item >
                         <Link to="/Customer/Customer_Guide" className ="Link_btn " >고객센터 안내</Link>
                    </ReactBootStrap.NavDropdown.Item>
                    */}
                <ReactBootStrap.NavDropdown.Item
                  href={`/Customer/Customer_Detail`}
                  className="Link_btn "
                >
                  문의하기
                </ReactBootStrap.NavDropdown.Item>

                <ReactBootStrap.NavDropdown.Item
                  href={`/Customer`}
                  className="Link_btn "
                >
                  답변확인
                </ReactBootStrap.NavDropdown.Item>

                <ReactBootStrap.NavDropdown.Item
                  vhref={`/Customer/Customer_Board_list`}
                  className="Link_btn "
                >
                  고객 게시판
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default J_Nav;
