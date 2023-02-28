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

class Customer_Board_Confirm_reply extends React.Component {
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
                  data={this.props.location.state.admir_reply_Data}
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
              </div>
            </div>

            <div className="detail_btn_container">
              <button className="detaile_btn">
                {" "}
                <Link
                  to={{
                    pathname: `/Customer/Customer_Board_list`,
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
export default Customer_Board_Confirm_reply;
