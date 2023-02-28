import React, { Component } from "react";
import Axios from "axios";

import { Route, Link } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//import ReactHtmlParser from 'react-html-parser'; //npm install html-react-parser --save
import BOTTOM from "../H_Bottom";

class Customer_Board_Modify extends React.Component {
  constructor(props) {
    super();

    this.state = {
      test: "<p>hi<p>",
      _No: 1,
      Customer_Name: "",
      Password: "",
      Question_title: "",
      Question_Data: "",
      phone1: "",
      phone2: "",
      phone3: "",
      email_id: "",
      email_adr: "",
      reply: "x",
      date: new Date(),

      editor: ClassicEditor,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange(evt) {
    this.setState({
      Question_Data: evt.editor.getData(),
    });
  }

  handleChange(changeEvent) {
    this.setState({
      Question_Data: changeEvent.target.value,
    });
  }

  Cancel_item = async () => {
    // 등록 안하고 취소
    // 업로드 된 그림파일 삭제

    let data = this.state.Question_Data;
    let data_length = data.length;

    let domain = "https://www.dawnth.co.kr:443/"; //"http://localhost:8000/";
    let domain_length = domain.length;

    let pos = 0;
    let test_index = 0;
    let get_Data = "";

    let Modify_count = 0;
    let check_data = "";

    var Modify_array = [];
    var fix_array = [];
    var img_name_array = [];

    while (true) {
      test_index = data.indexOf(domain, pos); // 데이터에서 domain 주소가 몇번째 index에 있는지 확인
      if (test_index !== -1) {
        //데이터에 도메인 주소 있는지 확인 없으면 -1이 나옴
        data = data.substring(test_index + domain_length, data_length); // 데이터에서 해당 주소를 잘라냄
        test_index = data.indexOf(">", pos); //파일의 이름을 알아낼 index 추출
        get_Data = data.substring(0, test_index - 1); // 데이터의 0번째 자리부터 그림파일 이름 끝자리 추출
        // console.log(get_Data);
        Modify_array[Modify_count] = get_Data;

        Modify_count = Modify_count + 1;
        check_data = "ok";
      } else {
        if (Modify_count == 0) check_data = "not";

        break;
      }
    }

    data = this.props.location.state.Question_Data; // 원래의 데이터
    data_length = data.length;

    pos = 0;
    test_index = 0;
    get_Data = "";
    let Fix_count = 0;
    check_data = "";

    while (true) {
      test_index = data.indexOf(domain, pos); // 데이터에서 domain 주소가 몇번째 index에 있는지 확인
      if (test_index !== -1) {
        //데이터에 도메인 주소 있는지 확인 없으면 -1이 나옴
        data = data.substring(test_index + domain_length, data_length); // 데이터에서 해당 주소를 잘라냄
        test_index = data.indexOf(">", pos); //파일의 이름을 알아낼 index 추출
        get_Data = data.substring(0, test_index - 1); // 데이터의 0번째 자리부터 그림파일 이름 끝자리 추출
        //  console.log(get_Data);
        fix_array[Fix_count] = get_Data;

        Fix_count = Fix_count + 1;
        check_data = "ok";
      } else {
        if (Fix_count == 0) check_data = "not";

        break;
      }
    }

    let Check = 0;
    let count = 0;
    // console.log(Modify_count);
    //  console.log(Fix_count);

    for (let i = 0; i < Modify_count; i++) {
      Check = 0;

      for (let j = 0; j < Fix_count; j++) {
        if (Modify_array[i] === fix_array[j]) {
          Check = 0; // 같은 이름이 있다.
          //   console.log(Check);
          //    console.log(Modify_array[i]+"=="+fix_array[j])
          break;
        } else {
          Check = 1; // 같은 이름이 없다
          //   console.log(Check);
          //    console.log(Modify_array[i]+"!="+fix_array[j])
        }
      }

      if (Check === 1) {
        img_name_array[count] = Modify_array[i];
        count = count + 1;
      }
    }

    // console.log( img_name_array);

    Axios.post(
      "https://www.dawnth.co.kr:443/api/Detail_cancel", //'http://localhost:8000/api/Detail_cancel',//
      {
        img_name: img_name_array,
        check: check_data,
        count: count,
      }
    )
      .then(function (response) {
        //   console.log(response.data);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        //   console.error(e);  // 에러표시
      });
  };

  Updateitem = async () => {
    // 등록 안하고 취소
    // 업로드 된 그림파일 삭제

    let data = this.state.Question_Data;
    let data_length = data.length;

    let domain = "https://www.dawnth.co.kr:443/"; //"http://localhost:8000/";
    let domain_length = domain.length;

    //let server_local_host='http://localhost:8000/api/Board_update';
    let server_local_host = "https://www.dawnth.co.kr:443/api/Board_update";

    let pos = 0;
    let test_index = 0;
    let get_Data = "";

    let Modify_count = 0;
    let check_data = "";

    var Modify_array = [];
    var fix_array = [];
    var img_name_array = [];

    while (true) {
      test_index = data.indexOf(domain, pos); // 데이터에서 domain 주소가 몇번째 index에 있는지 확인
      if (test_index !== -1) {
        //데이터에 도메인 주소 있는지 확인 없으면 -1이 나옴
        data = data.substring(test_index + domain_length, data_length); // 데이터에서 해당 주소를 잘라냄
        test_index = data.indexOf(">", pos); //파일의 이름을 알아낼 index 추출
        get_Data = data.substring(0, test_index - 1); // 데이터의 0번째 자리부터 그림파일 이름 끝자리 추출
        // console.log(get_Data);
        Modify_array[Modify_count] = get_Data;

        Modify_count = Modify_count + 1;
        check_data = "ok";
      } else {
        if (Modify_count == 0) check_data = "not";

        break;
      }
    }

    data = this.props.location.state.Question_Data; // 원래의 데이터
    data_length = data.length;

    pos = 0;
    test_index = 0;
    get_Data = "";
    let Fix_count = 0;
    check_data = "";

    while (true) {
      test_index = data.indexOf(domain, pos); // 데이터에서 domain 주소가 몇번째 index에 있는지 확인
      if (test_index !== -1) {
        //데이터에 도메인 주소 있는지 확인 없으면 -1이 나옴
        data = data.substring(test_index + domain_length, data_length); // 데이터에서 해당 주소를 잘라냄
        test_index = data.indexOf(">", pos); //파일의 이름을 알아낼 index 추출
        get_Data = data.substring(0, test_index - 1); // 데이터의 0번째 자리부터 그림파일 이름 끝자리 추출
        // console.log(get_Data);
        fix_array[Fix_count] = get_Data;

        Fix_count = Fix_count + 1;
        check_data = "ok";
      } else {
        if (Fix_count == 0) check_data = "not";

        break;
      }
    }

    let Check = 0;
    let count = 0;
    //  console.log(Fix_count);
    // console.log(Modify_count);

    for (
      let i = 0;
      i < Fix_count;
      i++ //수정된 데이터
    ) {
      Check = 0;

      for (
        let j = 0;
        j < Modify_count;
        j++ //원래 데이터
      ) {
        //삭제된 이미지 파일 이름을 찾아내야 함

        if (fix_array[i] === Modify_array[j]) {
          // 수정을 한 데이터에서 원래 이미지가 그대로 있는 경우
          Check = 0; // 같은 이름이 있다.
          //console.log(Check);
          break;
        } // 수정한 데이터에 원래 이미지가 삭제된 경우
        else {
          Check = 1; // 같은 이름이 없다
          // console.log(Check);
        }
      }

      if (Check === 1) {
        img_name_array[count] = fix_array[i];
        count = count + 1;
      }
    }

    //  console.log( img_name_array);

    Axios.post(server_local_host, {
      _No: this.state._No,
      Customer_Name: this.state.Customer_Name,
      Password: this.state.Password,

      Question_title: this.state.Question_title,
      Question_Data: this.state.Question_Data,

      phone1: this.state.phone1,
      phone2: this.state.phone2,
      phone3: this.state.phone3,

      email_id: this.state.email_id,
      email_adr: this.state.email_adr,

      reply: this.state.reply,
      date: this.state.date.toLocaleDateString("ko-KR"),
      section: this.props.location.state.section,

      img_name: img_name_array,
      check: check_data,
      count: count,
    })
      .then(function (response) {
        //    console.log(response.data);
        // alert('수정 완료!');
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
      });
  };

  //customer_name
  nameChange = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      Customer_Name: e.target.value,
    });
  };
  phone1Change = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      phone1: e.target.value,
    });
  };
  phone2Change = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      phone2: e.target.value,
    });
  };
  phone3Change = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      phone3: e.target.value,
    });
  };

  email1Change = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      email_id: e.target.value,
    });
  };
  email2Change = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      email_adr: e.target.value,
    });
  };
  titleChange = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      Question_title: e.target.value,
    });
  };
  titlePassword = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      Password: e.target.value,
    });
  };

  componentDidMount() {
    //  console.log('componentDidMount');

    this.setState({
      Customer_Name: this.props.location.state.Customer_Name,
      phone1: this.props.location.state.phone1,
      phone2: this.props.location.state.phone2,
      phone3: this.props.location.state.phone3,
      email_id: this.props.location.state.email_id,
      email_adr: this.props.location.state.email_adr,
      Question_title: this.props.location.state.title,
      Password: this.props.location.state.Password,
      Question_Data: this.props.location.state.Question_Data,
    });
  }

  render() {
    const custom_config = {
      extraPlugins: [MyCustomUploadAdapterPlugin],

      toolbar: {
        items: [
          "heading",
          "|",
          "bold",
          "italic",
          "|",
          "insertTable",
          "|",
          "imageUpload",
          "undo",
          "redo",
        ],
      },
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
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
            <div className="detail_title">문의하기</div>

            <div className="Consult_container">
              <div className="detail_text">이름 * </div>

              <div className="detail_input_container">
                <input
                  value={this.state.Customer_Name}
                  className="detail_input"
                  type="name"
                  placeholder="name"
                  id="user_name"
                  onChange={this.nameChange}
                ></input>
              </div>
            </div>

            <div className="Consult_container">
              <div className="detail_text">연락처 *</div>

              <div className="detail_input_container">
                <input
                  value={this.state.phone1}
                  className="detail_phone_input"
                  type="phone"
                  placeholder=""
                  id="user_phone"
                  onChange={this.phone1Change}
                ></input>

                <div> &nbsp;-&nbsp; </div>

                <input
                  value={this.state.phone2}
                  className="detail_phone_input"
                  type="phone"
                  placeholder=""
                  id="user_phone"
                  onChange={this.phone2Change}
                ></input>

                <div> &nbsp;-&nbsp; </div>

                <input
                  value={this.state.phone3}
                  className="detail_phone_input"
                  type="phone"
                  placeholder=""
                  id="user_phone"
                  onChange={this.phone3Change}
                ></input>
              </div>
            </div>

            <div className="Consult_container">
              <div className="detail_text">이메일 *</div>

              <div className="detail_input_container">
                <input
                  value={this.state.email_id}
                  className="detail_email_id_input"
                  type="email"
                  placeholder=""
                  id="user_email"
                  onChange={this.email1Change}
                ></input>
                <div> &nbsp;@&nbsp; </div>

                <input
                  value={this.state.email_adr}
                  className="detail_email_url_input"
                  type="email"
                  placeholder="직접입력"
                  id="user_email"
                  onChange={this.email2Change}
                ></input>
              </div>
            </div>
            <div className="Consult_container">
              <div className="detail_text">제목 *</div>

              <div className="detail_input_container">
                <input
                  value={this.state.Question_title}
                  className="detail_title_input"
                  type="title"
                  placeholder="title"
                  id="user_title"
                  onChange={this.titleChange}
                ></input>
              </div>
            </div>

            <div className="Consult_container">
              <div className="detail_password">비밀번호 *</div>

              <div className="detail_input_container">
                <input
                  value={this.state.Password}
                  className="detail_Password_input"
                  type="Password"
                  placeholder="Password"
                  id="user_Password"
                  onChange={this.titlePassword}
                ></input>
              </div>
            </div>

            <div className="Consult_container">
              <div className="detail_CKEditor_container">
                {/* $ npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic */}
                {/* 태그 값을 그대로 html안에 표현하기 위해서 $ yarn add node-html-parser 임포트 해준다 */}
                <CKEditor
                  editor={this.state.editor}
                  data={this.props.location.state.Question_Data}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    //console.log( 'Editor is ready to use!', editor );
                  }}
                  config={custom_config}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    //  console.log( { event, editor, data } );

                    this.setState({
                      Question_Data: data,
                    });
                  }}
                />
              </div>
            </div>

            <div className="detail_btn_container">
              <button onClick={this.Updateitem} className="detaile_btn">
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
                  수정
                </Link>
              </button>

              <button onClick={this.Cancel_item} className="detaile_btn">
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

export default Customer_Board_Modify;

class BoardItem extends React.Component {
  render() {
    return (
      <Link
        to={{
          pathname: `/Customer/Customer_Board_list`,
          state: {
            Customer_Name: this.props.row.Customer_Name,
            Password: this.props.row.Password,
            Return_Check: 1,
          },
        }}
        className="Link_Ctl"
      >
        취소
      </Link>
    );
  }
}
/*
이미지 -> 이미지업로드 플러그인 -> 파일 로더 (FileRepository -> 업로드 어댑터 사용)

파일 로더
디스크에서 파일 읽어서 서버에 전송

업로드 어댑터
파일을 서버에 암호화해서 보내고 응답을 다시 파일 로더에 되돌려주는 역할


File repository 플러그인
CKEditor5에서 파일 업로드를 관리하는 핵심 플러그인이다. 
- FileRepository.createUploadAdapter() 팩토리 메서드를 사용하여 에디터 속에서 업로드 어댑터가 활성화 된다.
- 이미지 업로드와 같은 기능들은 유저가 업로드를 요청 할 때 마다 새로운 업로드 어댑터 인스턴스를 만들기 위해서 FileRepository의 API를 사용한다.

 
쉽게 말해서 그냥 업로드 어댑터를 만들어주는 역할이라고 생각하면 될듯.
FileRepository(파일 저장소, 저장된 파일을 서버에 올려야 하니 업로드 어댑터를 만들자) -> Upload Adapter(파일 서버에 전송하는놈)

이미지 업로드 플러그인이란?
유저와 상호작용하는 가장 상위의 플러그인이다.
(예를들면, 유저가 파일을 에디터에 드래그앤 드랍 했을때 그 파일을 서버에 전송하고 컨텐츠에 이미지를 표시하는 역할을 함.)
이미지 업로드 플러그인은 업로드 어댑터를 생성하기 위해서 파일 레파지토리를 사용한다.
이미지 업로드 플러그인 -> File Repository -> upload adapter 와 같은 구조로 되어 있음.
업로드 어댑터의 upload()메소드가 실행되면 서버에 이미지를 업로드하고, 이 함수의 리턴값은 promise인데 이 promise의 리턴값을 활용하여 에디터에 이미지를 표시할 수 있다.


이미지 업로드 플러그인이 하는일
1. image의 palceholder
2. 에디터에 이미지 넣기
3. 프로그레스바 표시
4. 업로드가 끝나기전에 컨텐츠에서 제거되면 업로드 절차를 취소한다.

업로드 어댑터는 Promise를 사용하여 업로드 성공 여부를 에디터에게 노티한다.
또한, 업로드된 이미지의 URL을 이미지 업로드 플러그인에게 전달하고, 에디터 속의 image태그의 src와 srcset속성을 방금 그 URL로 설정한다.

실제로는 예외 처리 라던가, 에디터에 복사 붙여넣기를 처리하는 등 더 복잡하지만 이것을 모두 이미지 업로드 플러그인이 처리해주기 때문에 신경 쓰지 않아도 된다.

에디터에서 이미지 업로드를 위해서는 다음과 같은 2가지가 필요하다.
1. 이미지 업로드 플러그인(officail builds or 커스터마이징 CKEditor5라면 꼭 include하길)
2. 업로드 어댑터가 정의되어야 한다. - 이미 존재하는 업로드 어댑터를 사용하거나, 커스텀 업로드 어댑터를 사용 할 수 있다.

업로드 어댑터 자세히 살펴보기

커스텀 업로드 어댑터는 파일을 서버에 보내고 서버로부터의 응답을 에디터에 설정하는 역할을 한다.
이미지 업로드 어댑터든 파일 업로드 어댑터든 UploadAdapter interface를 구현하여 upload()와 abort()메소드를 구현해야 한다.

upload() 메소드는 promise를 리턴해야만 한다.
- promise는 업로드된 파일에 대한 정보를 담은 객체와 함께 resolved 된다.
- 에러에 의해서 rejected된 경우 에디터 컨텐츠에 아무것도 들어가지 않는다.

커스텀 업로드 어댑터의 가장 간단한 폼은 다음과 같다.


여기서 나오는

server.onUploadProgress()
server.upload()
server.abortUpload() 는 예시일뿐, 사용자가 직접 구현해야 하는 메소드 이다.

*/
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    // 결국엔 사용자가 구현해 주어야 할 것은,
    // FileRepository가 어떤 업로드 어댑터를 사용하게 하느냐만 설정해주면 된다.
    // 나머지 이미지 업로드 플러그인, 파일 로더, FileRepository등등은 이미 만들어져 있다.
    //  console.log(loader);
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    // 파일로더가 업로드 어댑터를 사용해서 이미지를 서버에 전송하기 때문에
    this.loader = loader;
    // URL where to send files.
    // this.url = `${ENV}/Services/SaveImage`;
  }
  // Starts the upload process.
  // 업로드를 시작한다.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._initRequest();
          this._initListeners(resolve, reject, file);
          this._sendRequest(file);
        })
    );
  }

  // Aborts the upload process.
  //중단
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());
    //여기서는 POST 요청과 json으로 응답을 받지만 어떤 포맷으로 하든 너의 선택이다.
    xhr.open("POST", "/upload/", true);
    xhr.responseType = "json";
    //xhr.setRequestHeader('Content-type', 'application/json');
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    // xhr.setRequestHeader('Authorization');
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = "Couldn't upload file:" + ` ${loader.file.name}.`;
    const server_domain = "https://www.dawnth.co.kr:443/"; //"http://localhost:8000/";

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      // 이 예제에서는 XHR서버에서의 response 객체가 error와 함께 올 수 있다고 가정한다.
      // 이 에러는  메세지를 가지며 이 메세지는 업로드 프로미스의 매개변수로 넘어갈 수 있다.

      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // 만약 업로드가 성공했다면, 업로드 프로미스를 적어도 default URL을 담은 객체와 함께 resolve하라.
      // 이 URL은 서버에 업로드된 이미지를 가리키며, 컨텐츠에 이미지를 표시하기 위해 사용된다.

      resolve({
        default: server_domain + response.url,
      });
      //   console.log("upload 응답 확인");
      //   console.log(server_domain+response.url);
    });

    // 파일로더의 진행상황을 업데이트 하자.
    // 파일로더는 uploadTotal과 upload properties라는 속성 두개를 갖는다.
    // 이 두개의 속성으로 에디터에서 업로드 진행상황을 표시 할 수 있다.

    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    // 폼 데이터 준비
    const data = new FormData();
    // 여기가 인증이나 CSRF 방어와 같은 방어 로직을 작성하기 좋은 곳이다.
    // 예를들어, XHR.setREquestHeader()를 사용해 요청 헤더에 CSRF 토큰을 넣을 수 있다.

    let date_ob = new Date();

    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    let now_Date = date + hours + minutes + seconds;

    data.append("upload", file);
    data.append("date", now_Date);

    //   console.log("file 확인");
    //  console.log(file);

    // console.log("FormData 확인");
    // console.log(data);

    this.xhr.send(data);
    /*
       this.loader.file.then(result => {
        data.append('file', result);
        this.xhr.send(data);
        }
      )
      */
  }
}
