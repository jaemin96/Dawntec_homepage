import React from "react";
import Axios from "axios";

//npm i react-bootstrap-table --save
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import BOTTOM from "../H_Bottom";

import { Route, Link, Router } from "react-router-dom";

class Customer extends React.Component {
  constructor(props) {
    super();

    let order = props.order;
    let i = 1;

    this.state = {
      Customer_Name: "",
      Password: "",

      size_x: "0",
      size_y: "0",

      total_pages: 0,
      page_remainder: 0,
      current_page: 0,

      boards: [],
      pages: [],
      numbers: [],

      Return_Check: 0,
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
  }

  idChange = (e) => {
    //idChange 이벤트를 실행시킨다.
    this.setState({
      Customer_Name: e.target.value,
    });
    // //console.log(this.state.Customer_Name);
  };
  pwChange = (e) => {
    //pwChange 이벤트를 실행시킨다.
    this.setState({
      Password: e.target.value,
    });
    // //console.log(this.state.Password);
  };

  GetItem = async () => {
    Axios.post("https://www.dawnth.co.kr:443/api/get", {
      Customer_Name: this.state.Customer_Name,
      Password: this.state.Password,
    })
      .then((response) => {
        // //console.log(response.data);
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

        ////console.log(this.state.pages);
        ////console.log(this.state.numbers);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        //console.error(e);  // 에러표시
      });
  };

  test = async () => {
    /*
            window.Kakao.init("d1a6ed8619c5a91ae5c4efe04d58b103");
            window.Kakao.Auth.login({
               
                success: function (response) {
                    console.log(response);
                },
                fail: function (error) {
                    console.log(error);
                },
                });
                
                window.Kakao.API.request({
                    url: "https://kauth.kakao.com/oauth/token",
                    grant_type: "authorization_code",
                    client_id: "b8661d97f9af70b46fa5c381f78a3e30",
                    redirect_uri: "https://www.dawnth.co.kr",
                    code: "Ueq-V3HvNISeC-cJGo9OsY5V5aIaBRIWWj7NSUdjK_mKSgPIiuO3OhDt7fCutrEKN8-Q-QopyNoAAAF9VY_-wA",
                    client_secret:"JM2wMzWhoMixv3SBQZVnfqXiR3oVevws",  
                    success: function (response) {
                      console.log(response);
                    },
                    fail: function (error) {
                      console.log(error);
                    },
                  });

                  */
    /*
                  window.Kakao.init("d1a6ed8619c5a91ae5c4efe04d58b103");
                window.Kakao.Auth.login({
               
                success: function (response) {
                    console.log(response);
                },
                fail: function (error) {
                    console.log(error);
                },
                });

                  const Access_token = "Bearer tsHDBHxctmrnJOVOQLt-VXrpSBbvDMN-JCUaFQorDNIAAAF9VbYRXw";

                  Axios.post('https://kapi.kakao.com/v2/api/talk/memo/default/send',
                  {
                    "Authorization":Access_token,
                    "Content-Type":'application/x-www-form-urlencoded'
                  })
                  .then(function(response) {
                      console.log(response);  
                  })
                  .catch(e => { 
                      console.error(e);  // 에러표시
                  });
                    */
  };
  /*
      GetItem = async () => {
        let data;

            Axios.post('https://localhost:443/api/get',
            {
                Customer_Name:this.state.Customer_Name,
                Password:this.state.Password
            })
            .then(function(response) {
                //console.log(response.data);
                data=response.data;

                this.setState({
                    test:data
                });
                
            })
            .catch(e => {  // API 호출이 실패한 경우
                //console.error(e);  // 에러표시
            });
      };
*/

  /*
     Postitem = async () => {
        Axios.post('https://localhost:443/api/insert',
        {
            _id:this.state._id,
            Customer_Name:this.state.Customer_Name,
            Password:this.state.Password,
            Question_title:this.state.Question_title,
            Question_Data:this.state.Question_Data,
            reply:this.state.reply
        })
        .then(function(response) {
            //console.log(response.data);
            alert('등록 완료!');  
        })
        .catch(e => {  // API 호출이 실패한 경우
            //console.error(e);  // 에러표시
          });
      };

    */

  /*
    Deleteitem = async () => {
        Axios.post('https://localhost:443/api/delete',
          {
            _id:this.state._id,
            Customer_Name:this.state.Customer_Name,
            Password:this.state.Password,
            
          })
          .then(function(response) {
              //console.log(response.data);
          })
          .catch(e => {  // API 호출이 실패한 경우
              //console.error(e);  // 에러표시
            });
        };
*/
  /*
     Updateitem = async () => {
        Axios.post('https://localhost:443/api/update',
          {
            _id:this.state._id,
            Customer_Name:this.state.Customer_Name,
            Password:this.state.Password,
            Question_title:this.state.Question_title,
            Question_Data:this.state.Question_Data,
          })
          .then(function(response) {
              //console.log(response.data);
          })
          .catch(e => {  // API 호출이 실패한 경우
              //console.error(e);  // 에러표시
            });
        };
*/

  componentDidMount() {
    ////console.log('componentDidMount');

    if (this.props.location.state) {
      // //console.log(this.props.location.state.Customer_Name);
      // //console.log(this.props.location.state.Password);

      let Return_Get = async () => {
        Axios.post("https://www.dawnth.co.kr:443/api/get", {
          Customer_Name: this.props.location.state.Customer_Name,
          Password: this.props.location.state.Password,
        })
          .then((response) => {
            // //console.log(response.data);

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

            // //console.log(this.state.pages);
            ////console.log(this.state.numbers);
          })
          .catch((e) => {
            // API 호출이 실패한 경우
            //console.error(e);  // 에러표시
          });
      };

      Return_Get();
    }
  }

  componentWillReceiveProps(nextProps) {
    // //console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // //console.log('shouldComponentUpdate');

    return true / false;
  }

  componentWillUpdate(nextProps, nextState) {
    // //console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    //  //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    //  //console.log('componentWillUnmount');
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
    // const list = boards.map(function(row){
    //        return row._id+row.Question_title;
    //    });

    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="Grid1_Container">
          <div class="Grid1_aside">
            <div className="sidebar_title">고객센터</div>
            {/** <div className = "sidebar_container"><Link to ="/Customer/Customer_Guide" className="sidebar_link">안 내</Link></div>*/}
            <div className="sidebar_container">
              <Link to="/Customer/Customer_Detail" className="sidebar_link">
                문의하기
              </Link>
            </div>
            <div className="sidebar_container">
              {" "}
              <Link to="/Customer" className="sidebar_link">
                답변확인
              </Link>
            </div>
            <div className="sidebar_container">
              {" "}
              <Link to="/Customer/Customer_Board_list" className="sidebar_link">
                게시판
              </Link>
            </div>
          </div>

          <div class="Grid1_header"></div>

          <div class="Grid1_Main">
            {/* 
                    <BootstrapTable data={this.state.test}>
                        <TableHeaderColumn dataField='_id' isKey>No</TableHeaderColumn>
                        <TableHeaderColumn dataField='Question_title'>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField='Date'>Date</TableHeaderColumn>
                        <TableHeaderColumn dataField='reply'>Reply</TableHeaderColumn>
                    </BootstrapTable>
                */}

            <div className="notice_board">
              <table>
                <thead className="Database_thead">
                  <tr align="center">
                    <td className="customer_Database_No">No.</td>
                    <td className="customer_Database_Title">Title</td>
                    <td className="customer_Database_Date">Date</td>
                    <td className="customer_Database_Reply">Reply</td>
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

              <div className="search_Box">
                <input
                  className="notice_confrimbox"
                  type="ID"
                  placeholder="이름"
                  id="userid"
                  onChange={this.idChange}
                ></input>

                <input
                  className="notice_confrimbox"
                  type="Paassword"
                  placeholder="Password"
                  id="userpw"
                  onChange={this.pwChange}
                ></input>

                <button onClick={this.GetItem} className="search__Btn">
                  {" "}
                  search{" "}
                </button>
                {/*<button onClick={this.test} className="search__Btn" > kakao test </button>*/}
              </div>
            </div>

            {/* 
                        <ul className="test_link">
                            <li><Link to ="/Customer/Customer_Detail/1/kr39399/632632">test3</Link></li>
                            <li><Link to ="/Customer/Customer_Confirm/1">test2</Link></li>
                        </ul>
                        */}

            {/* */}

            <div className="pages_list"> {pagesList} &nbsp; </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Customer;

class BoardItem extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    var tmp = this.props.row.Customer_Name;
    var name_ = tmp.replace(tmp.charAt(1), "*");
    var title_ = "";
    var else1 = "";
    var else2 = "";
    var else3 = "";
    var else4 = "";
    var else5 = "";

    title_ = (
      <Link
        to={{
          pathname: `/Customer/Customer_Confirm/`,
          state: {
            title: this.props.row.Question_title,
            date: this.props.row.date,
            reply: this.props.row.reply,
            _No: this.props.row._No,
            Customer_Name: this.props.row.Customer_Name,
            Password: this.props.row.Password,
            data: this.props.row.Question_Data,
            section: this.props.row.section,
            email_id: this.props.row.email_id,
            email_adr: this.props.row.email_adr,
            phone1: this.props.row.phone1,
            phone2: this.props.row.phone2,
            phone3: this.props.row.phone3,
            admir_reply_Data: this.props.row.admir_reply_Data,
          },
        }}
        className="Link_Ctl"
      >
        {this.props.row.Question_title}
      </Link>
    );

    if (this.props.row.reply === "x") {
      else1 = "";
      else2 = "";
      else3 = "";
      else4 = "";
      else5 = "";
    } else {
      else1 = (
        <tr>
          <td className="Database_else1">&nbsp;</td>
        </tr>
      );

      else2 = (
        <tr>
          <td className="Database_else2">
            <Link
              to={{
                pathname: `/Customer/Customer_Confirm_reply/`,
                state: {
                  title: this.props.row.Question_title,
                  date: this.props.row.date,
                  id: this.props.row.id,
                  Customer_Name: this.props.row.Customer_Name,
                  Password: this.props.row.Password,
                  data: this.props.row.Question_Data,
                  section: this.props.row.section,
                  reply: this.props.row.reply,
                  admir_reply_Data: this.props.row.admir_reply_Data,
                },
              }}
              className="Link_Ctl"
            >
              ↳ 답변완료
            </Link>
          </td>
        </tr>
      );

      else3 = (
        <tr>
          <td className="Database_else3">&nbsp;</td>
        </tr>
      );
      else4 = (
        <tr>
          <td className="Database_else4">&nbsp;</td>
        </tr>
      );
      else5 = (
        <tr>
          <td className="Database_else5">&nbsp;</td>
        </tr>
      );
    }

    return (
      <tr>
        <td className="Database_no">
          {this.props.index}
          {else1}
        </td>

        <td className="Database_title">
          {title_}
          {else2}
        </td>

        <td className="Database_name">
          {name_}
          {else3}
        </td>

        <td className="Database_date">
          {this.props.row.date}
          {else4}
        </td>

        <td className="Database_reply">
          {this.props.row.reply}
          {else5}
        </td>
      </tr>
    );
  }
}
