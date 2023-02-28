import React from "react";
import Axios from "axios";
//npm i react-bootstrap-table --save
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import BOTTOM from "../H_Bottom";

import { Route, Link, Router } from "react-router-dom";

class Company_Year extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

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

          <div className="Come_header"></div>
          <div className="Come_Main"> </div>
          <div className="Come_Main2"></div>
          <div className="Come_bottom"> </div>
        </div>
      </div>
    );
  }
}
export default Company_Year;
