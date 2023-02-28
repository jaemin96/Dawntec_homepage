import React from "react";
//https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/image-upload.html
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import CKEditor from "@ckeditor/ckeditor5-react";
import Axios from "axios";

import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import BOTTOM from "../H_Bottom";

//console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

class Customer_Confirm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      Customer_Name: "",
      Password: "",
      Question_title: "",
      Question_Data: "",
      reply: "x",

      admir_reply_Data: "",
      editor: ClassicEditor,
    };
  }

  nameChange = (e) => {
    //idChange 이벤트를 실행시킨다.
  };

  phone1Change = (e) => {
    //idChange 이벤트를 실행시킨다.
  };
  phone2Change = (e) => {
    //idChange 이벤트를 실행시킨다.
  };
  phone3Change = (e) => {
    //idChange 이벤트를 실행시킨다.
  };

  email1Change = (e) => {
    //idChange 이벤트를 실행시킨다.
  };
  email2Change = (e) => {
    //idChange 이벤트를 실행시킨다.
  };

  titleChange = (e) => {
    //idChange 이벤트를 실행시킨다.
  };

  Cancel_item = async () => {
    this.props.history.push("/Customer");
  };

  Deleteitem = async () => {
    let data = this.props.location.state.data;
    let data_length = data.length;

    let domain = "https://www.dawnth.co.kr:443/";
    let domain_length = domain.length;

    let pos = 0;
    let test_index = 0;
    let get_Data = "";
    let count = 0;
    let check_data = "";

    var img_name_array = [];

    while (true) {
      test_index = data.indexOf(domain, pos); // 데이터에서 domain 주소가 몇번째 index에 있는지 확인
      if (test_index !== -1) {
        //데이터에 도메인 주소 있는지 확인 없으면 -1이 나옴
        data = data.substring(test_index + domain_length, data_length); // 데이터에서 해당 주소를 잘라냄
        test_index = data.indexOf(">", pos); //파일의 이름을 알아낼 index 추출
        get_Data = data.substring(0, test_index - 1); // 데이터의 0번째 자리부터 그림파일 이름 끝자리 추출
        //console.log(get_Data);
        img_name_array[count] = get_Data;

        count = count + 1;
        check_data = "ok";
      } else {
        if (count == 0) check_data = "not";

        break;
      }
    }

    Axios.post("https://www.dawnth.co.kr:443/api/delete", {
      img_name: img_name_array,
      check: check_data,
      count: count,
      section: this.props.location.state.section,
      Customer_Name: this.props.location.state.Customer_Name,
      Password: this.props.location.state.Password,
    })
      .then(function (response) {
        //console.log(response.data);
        // alert('삭제 완료!');
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        //console.error(e);  // 에러표시
        alert("error!");
      });
  };

  componentDidMount() {
    this.setState({
      Customer_Name: this.props.location.state.Customer_Name,
      Password: this.props.location.state.Password,
    });
  }

  render() {
    const custom_config2 = {
      toolbar: {
        items: [],
      },
    };
    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="Grid4_Container">
          <div class="Grid4_aside">
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

          <div class="Grid4_Main">
            <div className="detail_title">상담문의</div>

            <div className="Consult_container">
              <div className="comfirm_titletext">제목 * </div>

              <div className="confirm_input_container">
                <div>{this.props.location.state.title}</div>
              </div>
            </div>

            <div className="Consult_container">
              <div className="comfirm_text">작성자 *</div>

              <div className="confirm_input_container">
                <div> {this.props.location.state.Customer_Name} </div>
              </div>

              <div className="comfirm_text">작성일자 *</div>

              <div className="confirm_input_container">
                <div>{this.props.location.state.date} </div>
              </div>

              <div className="comfirm_text">답변여부 *</div>

              <div className="confirm_input_container">
                <div>{this.props.location.state.reply} </div>
              </div>
            </div>

            <div className="Consult_container">
              <div className="detail_CKEditor_container">
                <CKEditor
                  editor={this.state.editor}
                  data={this.props.location.state.data}
                  config={custom_config2}
                  disabled={true}
                  onReady={(editor) => {}}
                  onInit={(editor) => {
                    // 데이터 최초 실행되면 트리거 된다.
                  }}
                  onChange={(event, editor) => {}}
                  onBlur={(event, editor) => {}}
                />

                <br />

                {/*
                <CKEditor 
                    editor={ this.state.editor }
                    data={this.props.location.state.admir_reply_Data}
                    config={custom_config2} 
                    disabled={true}
                 
                    onReady={(editor) => {
                      
                     }}
                     
                
                />
*/}
                {/** 
                <div className="Consult_container">
                    <div className="reply_input_container">
                        <div className="reply_Text"  dangerouslySetInnerHTML={ { __html: this.props.location.state.admir_reply_Data} }></div>
                       
                    </div>
                </div>
*/}
              </div>
            </div>

            <div className="detail_btn_container">
              <button className="detaile_btn">
                <Link
                  to={{
                    pathname: `/Customer/Customer_Modify/`,
                    state: {
                      title: this.props.location.state.title,
                      date: this.props.location.state.date,
                      reply: this.props.location.state.reply,

                      Customer_Name: this.props.location.state.Customer_Name,
                      Password: this.props.location.state.Password,
                      Question_Data: this.props.location.state.data,
                      section: this.props.location.state.section,
                      email_id: this.props.location.state.email_id,
                      email_adr: this.props.location.state.email_adr,
                      phone1: this.props.location.state.phone1,
                      phone2: this.props.location.state.phone2,
                      phone3: this.props.location.state.phone3,
                    },
                  }}
                  className="Link_Ctl"
                >
                  수정
                </Link>
              </button>

              <button onClick={this.Deleteitem} className="detaile_btn">
                {" "}
                <Link
                  to={{
                    pathname: `/Customer/Customer`,
                    state: {
                      Customer_Name: this.state.Customer_Name,
                      Password: this.state.Password,
                      Return_Check: 1,
                    },
                  }}
                  className="Link_Ctl"
                >
                  삭제
                </Link>
              </button>

              <button className="detaile_btn">
                {" "}
                <Link
                  to={{
                    pathname: `/Customer/Customer`,
                    state: {
                      Customer_Name: this.state.Customer_Name,
                      Password: this.state.Password,
                      Return_Check: 1,
                    },
                  }}
                  className="Link_Ctl"
                >
                  취소
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Customer_Confirm;

/*

 <div className="detail_btn_container">
                    <button  className="detaile_btn" > 
                        <Link to={{pathname : `/Customer/Customer_Modify/`,
                            state : {
                                title : this.props.location.state.title,
                                date : this.props.location.state.date,
                                reply : this.props.location.state.reply,
    
                                Customer_Name:this.props.location.state.Customer_Name,
                                Password:this.props.location.state.Password,
                                Question_Data:this.props.location.state.data,
                                section : this.props.location.state.section,
                                email_id:this.props.location.state.email_id,
                                email_adr:this.props.location.state.email_adr,
                                phone1:this.props.location.state.phone1,
                                phone2:this.props.location.state.phone2,
                                phone3:this.props.location.state.phone3
                                }
                        }} className="Link_Ctl">
                            수정
                        </Link>
                    </button>

                    <button onClick={this.Deleteitem} className="detaile_btn" > <Link to ="/Customer" className="Link_Ctl">삭제</Link> </button>
                    <button className="post_send__Btn"  > <Link to ="/Customer" className="Link_Ctl">취소</Link> </button>  
                </div>



*/
