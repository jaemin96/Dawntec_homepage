import React from "react";
import Axios from "axios";
//npm i react-bootstrap-table --save
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨

//import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Route, Link, Router } from "react-router-dom";
import styled from "styled-components";
import BOTTOM from "../H_Bottom";
import * as ReactBootStrap from "react-bootstrap";

class Company_Tech extends React.Component {
  constructor(props) {
    super();
    let order = props.order;
    let i = 1;
    this.state = {
      id: "",
      Password: "",
      size_x: "0",
      size_y: "0",

      total_pages: 0,
      page_remainder: 0,
      current_page: 0,

      boards: [],
      pages: [],
      numbers: [],
    };
  }
  //GET : axios.get(url[, config]) 단순 데이터(페이지 요청, 지정된 요청) 요청을 수행할 경우 , 파라미터 데이터를 포함시키는 경우 (사용자 번호에 따른 조회)
  //POST : axios.post(url, data[, config]) post 메서드에는 일반적으로 데이터를 Message Body에 포함시켜 보낸다.
  //PUT : axios.put(url, data[, config])
  //DELETE : axios.delete(url[, config])

  pointClick(msg) {
    this.setState({
      current_page: msg,
    });
    //console.log(this.state.current_page);
  }

  componentWillMount() {
    //console.log('componentWillMount');
  }

  componentDidMount() {
    //console.log('componentDidMount');

    let GetItem = async () => {
      Axios.post("https://www.dawnth.co.kr:443/api/Tech_get", {
        id: "dawntec",
        Password: "dw1357",
      })
        .then((response) => {
          //console.log(response.data);

          this.setState({
            boards: [],
            total_pages: [],
            page_remainder: [],
            pages: [],
          });
          this.setState({
            boards: response.data.reverse(),

            total_pages: response.data.length / 20,
            page_remainder: response.data.length % 20,
          });

          //alert('조회 완료!');
          for (let index = 1; index < response.data.length + 1; index++) {
            this.setState({
              numbers: this.state.numbers.concat(index),
            });
          }

          for (let index = 0; index <= this.state.total_pages; index++) {
            this.setState({
              pages: this.state.pages.concat(index),
            });
          }

          //console.log(this.state.pages);
          //console.log(this.state.numbers);
        })
        .catch((e) => {
          // API 호출이 실패한 경우
          //console.error(e);  // 에러표시
        });
    };

    GetItem();
  }

  componentWillReceiveProps(nextProps) {
    //console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('shouldComponentUpdate');
    return true / false;
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount');
  }

  render() {
    const boards = this.state.boards.slice(
      this.state.current_page * 20,
      this.state.current_page * 20 + 20
    );
    const pages = this.state.pages;

    const pagesList = pages.map((page, index) => (
      <li key={index}>
        <button
          onClick={this.pointClick.bind(this, index)}
          className="pages_btn"
        >
          {" "}
          {page + 1}{" "}
        </button>
      </li>
    ));

    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="Grid1_Container">
          <div class="Grid1_Outer1"></div>
          <div className="Grid1_aside">
            <div className="sidebar_title">자료실</div>

            <div className="sidebar_container">
              <Link to="/Company_Tech" className="sidebar_link">
                자료실
              </Link>
            </div>
            <div className="sidebar_container">
              <Link
                to="/Company_Tech/Company_Variety_Tech"
                className="sidebar_link"
              >
                TECH
              </Link>
            </div>
          </div>

          <div className="Grid1_header"></div>

          <div className="Grid1_Main">
            <div className="Database_Board">
              <table>
                <thead className="Database_thead">
                  <tr align="center">
                    <td className="customer_tableno">no</td>
                    <td className="customer_tabletitle">Title</td>
                    <td className="customer_tabledate">Date</td>
                  </tr>
                </thead>

                <tbody className="Database_tbody">
                  {boards.map((row, index) => (
                    <BoardItem
                      key={row._id}
                      row={row}
                      index={
                        this.state.numbers[this.state.current_page * 20 + index]
                      }
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pages_list"> {pagesList} &nbsp; </div>
          </div>

          <div class="Grid1_Outer2"></div>
        </div>
      </div>
    );
  }
}
export default Company_Tech;

class BoardItem extends React.Component {
  render() {
    return (
      <tr>
        <td className="Database_no">{this.props.index}</td>
        <td className="Database_title">
          <Link
            to={{
              pathname: `/Company_Tech/Company_Confirm/`,
              state: {
                title: this.props.row.Question_title,
                date: this.props.row.date,
                id: this.props.row.id,
                Password: this.props.row.Password,
                data: this.props.row.Question_Data,
                section: this.props.row.section,
              },
            }}
            className="Link_Ctl"
          >
            {this.props.row.Question_title}
          </Link>
        </td>

        <td className="Database_date">{this.props.row.date}</td>
      </tr>
    );
  }
}
