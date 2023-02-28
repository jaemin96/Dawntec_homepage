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

class Notice_Delete extends React.Component {
  constructor(props) {
    super();

    this.state = {
      id: "",
      Password: "",
      Question_title: "",
      Question_Data: "",

      editor: ClassicEditor,
    };
  }

  Deleteitem = async () => {
    // 등록 안하고 취소
    // 업로드 된 그림파일 삭제

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

    Axios.post("https://www.dawnth.co.kr:443/api/Notice_delete", {
      section: this.props.location.state.section,
      id: "dawntec",
      Password: "dw1357",

      img_name: img_name_array,
      check: check_data,
      count: count,
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
          <div className="Grid4_aside">
            <div className="sidebar_title">관리자</div>
            <div className="sidebar_container">
              <Link to="/Notice/Notice_Delete_list" className="sidebar_link">
                공지사항
              </Link>
            </div>
            <div className="sidebar_container">
              <Link to="/Notice_Admir" className="sidebar_link">
                작성하기
              </Link>
            </div>

            <div className="sidebar_title"></div>
            <div className="sidebar_container">
              <Link
                to="/Company_Tech/Company_Delete_list"
                className="sidebar_link"
              >
                자료실
              </Link>
            </div>
            <div className="sidebar_container">
              <Link to="/Company_Tech_Admir" className="sidebar_link">
                작성하기
              </Link>
            </div>

            <div className="sidebar_title"></div>
            <div className="sidebar_container">
              <Link
                to="/Customer_Admir/Customer_Admir"
                className="sidebar_link"
              >
                1:1 고객답변
              </Link>
            </div>
            <div className="sidebar_container">
              <Link
                to="/Customer_Admir/Customer_reply_complete"
                className="sidebar_link"
              >
                1:1 답변완료
              </Link>
            </div>
            <div className="sidebar_container">
              <Link
                to="/Customer_Admir/Customer_Board_Admir"
                className="sidebar_link"
              >
                게시판 고객답변
              </Link>
            </div>
            <div className="sidebar_container">
              <Link
                to="/Customer_Admir/Customer_Board_reply_complete"
                className="sidebar_link"
              >
                게시판 답변완료
              </Link>
            </div>
          </div>

          <div class="Grid4_Main">
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
                onReady={(editor) => {}}
                onInit={(editor) => {
                  // 데이터 최초 실행되면 트리거 된다.
                }}
                onChange={(event, editor) => {}}
                onBlur={(event, editor) => {}}
              />

              <div className="detail_btn_container">
                <button onClick={this.Deleteitem} className="detaile_btn">
                  {" "}
                  <Link to="/Notice/Notice_Delete_list" className="Link_Ctl">
                    삭제
                  </Link>{" "}
                </button>
                <button className="detaile_btn">
                  {" "}
                  <Link to="/Notice/Notice_Delete_list" className="Link_Ctl">
                    목록
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
export default Notice_Delete;
