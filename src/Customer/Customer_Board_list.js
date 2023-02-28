import * as React from "react";
import Axios from "axios";
import { Route, Link, Router } from "react-router-dom";
//import {useHistory} from 'react-router-dom';
//npm i react-bootstrap-table --save
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨
import BOTTOM from "../H_Bottom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import BoardItem from "../../src/Customer/BoardItem";

//모달 관리자 로그인 창 구현하기 위한 라이브러리
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Customer_Board_list extends React.Component {
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
  }

  componentWillMount() {
    //console.log('componentWillMount');
  }

  componentDidMount() {
    //console.log('componentDidMount');
    //let server_local_host='http://localhost:8000/api/Customer_Board_list_get';
    let server_local_host =
      "https://www.dawnth.co.kr:443/api/Customer_Board_list_get";

    let GetItem = async () => {
      Axios.post(server_local_host, {
        id: "dawntec",
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
    const test = "답변완료";
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
          <div class="Grid1_aside">
            <div className="sidebar_title">고객센터</div>
            {/** <div className = "sidebar_container"><Link to ="/Customer/Customer_Guide" className="sidebar_link">안 내</Link></div>*/}
            <div className="sidebar_container">
              <Link to="/Customer/Customer_Detail" className="sidebar_link">
                1:1 문의
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
            <div className="Database_Board">
              <table>
                <thead className="Database_thead">
                  <tr align="center">
                    <td className="customer_tableno">no</td>
                    <td className="customer_tabletitle">Title</td>
                    <td className="customer_tablename">Name</td>
                    <td className="customer_tabledate">Date</td>
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
            </div>

            <div className="search_Box">
              <button className="search__Btn">
                <Link
                  to={{ pathname: `/Customer/Customer_Board_detail/` }}
                  className="Link_Ctl"
                >
                  글쓰기
                </Link>
              </button>
            </div>

            <div className="pages_list"> {pagesList} &nbsp; </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Customer_Board_list;

{
  /**
class BoardItem extends React.Component{
    constructor(props) {
        super();

        this.state={
            open:false,
            Admir_Password:"",
            check:"",
            path:"",
        };


        this.handleClose = this.handleClose.bind(this)
        this.handlePasswrod = this.handlePasswrod.bind(this);
        this.password_check = this.password_check.bind(this);
    }

    

    handleClickOpen1(msg) {
        this.setState({
            open: true,
            Admir_Password:"",
            check:msg,
            path:'/Customer/Customer_Board_Confirm'
        });
    }

    handleClickOpen2(msg) {
        this.setState({
            open: true,
            Admir_Password:"",
            check:msg,
            path:'/Customer/Customer_Board_Confirm_reply'
        });
    }

    handleClose() {this.setState({open: false, check:""});}
    handlePasswrod(e) 
    {
        this.setState(
        {Admir_Password: e.target.value}
    );}

    password_check(e) 
    {
        if(this.props.row.Password===this.state.Admir_Password)
        {
            console.log(this.state.path);
            //this.props.history.push(this.state.path);
            
            this.props.history.push({
                pathname : this.state.path,
                state : {
                        title : this.props.row.Question_title,
                        date : this.props.row.date,
                        id:this.props.row.id,
                        Customer_Name:this.props.row.Customer_Name,
                        Password:this.props.row.Password,
                        data:this.props.row.Question_Data,
                        section : this.props.row.section,
                        reply:this.props.row.reply,
                        admir_reply_Data:this.props.row.admir_reply_Data
                    }})     
        }
        else
        {
            alert("Password를 다시 작성해 주십시오.");
        }
        
    }

    
    

    render(){
        var tmp = this.props.row.Customer_Name;
        var name_=tmp.replace(tmp.charAt(1),"*")
        var title_ ="";
        var else1="";
        var else2="";
        var else3="";
        var else4="";
        var else5="";

       
          title_ =   <div>
                        <Link onClick={this.handleClickOpen1.bind(this,1)} className="Link_Ctl">
                        {this.props.row.Question_title}
                        </Link>

                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <DialogTitle>Password</DialogTitle>

                            <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="userPassword"
                                label="Password"
                                type="Password"
                                fullWidth
                                variant="standard"
                                
                                value={this.state.Admir_Password} 
                                onChange={this.handlePasswrod}
                            />
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={this.password_check}>Enter</Button>
                                <Button onClick={this.handleClose}>Cancel</Button>
                            </DialogActions>

                        </Dialog>
                    </div>
                 
        

        if(this.props.row.reply === "x")
        {
            else1="";
            else2="";
            else3="";
            else4="";
            else5="";
        }
        else
        {
            else1=<tr><td className='Database_else1'>&nbsp;</td></tr>

            else2=<tr><td className='Database_else2'>
                    <Link onClick={this.handleClickOpen2.bind(this,2)} className="Link_Ctl">
                        ↳ 답변완료
                        </Link>

                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <DialogTitle>Password</DialogTitle>

                            <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="userPassword"
                                label="Password"
                                type="Password"
                                fullWidth
                                variant="standard"
                                
                                value={this.state.Admir_Password} 
                                onChange={this.handlePasswrod}
                            />
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={this.password_check}>Enter</Button>
                                <Button onClick={this.handleClose}>Cancel</Button>
                            </DialogActions>

                        </Dialog>
                    
                    </td></tr>

            else3=<tr><td className='Database_else3'>&nbsp;</td></tr>
            else4=<tr><td className='Database_else4'>&nbsp;</td></tr>
            else5=<tr><td className='Database_else5'>&nbsp;</td></tr>
        }
        
        

        return(
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
 */
}
{
  /** 
        title_ = <Link to={{pathname : `/Customer/Customer_Board_Confirm/`,
        state : {
                title : this.props.row.Question_title,
                date : this.props.row.date,
                id:this.props.row.id,
                Customer_Name:this.props.row.Customer_Name,
                Password:this.props.row.Password,
                data:this.props.row.Question_Data,
                section : this.props.row.section,
                reply:this.props.row.reply
                }
        }} className="Link_Ctl">
          {this.props.row.Question_title}
            
    </Link>
*/
}
