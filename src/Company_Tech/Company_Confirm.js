import React from "react";
//https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/image-upload.html
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import CKEditor from "@ckeditor/ckeditor5-react";
import Axios from "axios";

import { Route, Link } from "react-router-dom";
import BOTTOM from "../H_Bottom";

//console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

class Company_Confirm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      _NO: 0,
      Customer_Name: "",
      Password: "",
      Question_title: "",
      Question_Data: "",
      reply: "x",

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

  componentDidMount() {}

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

          <div class="Grid4_Main">
            <div className="detail_title">기술자료</div>

            <div className="detail_container">
              <div className="comfirm_titletext">제목 * </div>

              <div className="confirm_input_container">
                <div>{this.props.location.state.title}</div>
              </div>

              <div className="comfirm_text">작성일자 *</div>
              <div className="confirm_input_container">
                <div>{this.props.location.state.date} </div>
              </div>
            </div>

            {/* 
                <div className="data_text">
                    <div dangerouslySetInnerHTML={ {__html: the_Data}}></div>
                </div>
*/}

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

              <div className="detail_btn_container">
                <button className="detaile_btn">
                  {" "}
                  <Link to="/Company_Tech" className="Link_Ctl">
                    확인
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Company_Confirm;
