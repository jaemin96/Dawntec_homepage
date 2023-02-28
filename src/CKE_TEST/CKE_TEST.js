import React from "react";
//https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/image-upload.html
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

//npm install --save @ckeditor/ckeditor5-build-classic
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//npm install --save @ckeditor/ckeditor5-editor-classic
//import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import CKEditor from "@ckeditor/ckeditor5-react";
import Axios from "axios";

import { Route, Link } from "react-router-dom";
import BOTTOM from "../H_Bottom";

//import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
//import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
//import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
//import Image from "@ckeditor/ckeditor5-image/src/image.js";
//import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
//import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
//import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
//import ck_Link from "@ckeditor/ckeditor5-link/src/link.js";

//console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

/*
// 선택~
npm i @ckeditor/ckeditor5-adapter-ckfinder
npm i @ckeditor/ckeditor5-alignment
npm i @ckeditor/ckeditor5-autoformat
npm i @ckeditor/ckeditor5-autosave
npm i @ckeditor/ckeditor5-basic-styles
npm i @ckeditor/ckeditor5-block-quote
npm i @ckeditor/ckeditor5-ckfinder
npm i @ckeditor/ckeditor5-dev-utils
npm i @ckeditor/ckeditor5-editor-classic
npm i @ckeditor/ckeditor5-essentials
npm i @ckeditor/ckeditor5-export-pd
npm i @ckeditor/ckeditor5-export-pdf
npm i @ckeditor/ckeditor5-font
npm i @ckeditor/ckeditor5-heading
npm i @ckeditor/ckeditor5-horizontal-line
npm i @ckeditor/ckeditor5-image
npm i @ckeditor/ckeditor5-indent
npm i @ckeditor/ckeditor5-link
npm i @ckeditor/ckeditor5-list
npm i @ckeditor/ckeditor5-media-embed
npm i @ckeditor/ckeditor5-paragraph
npm i @ckeditor/ckeditor5-paste-from-office
npm i @ckeditor/ckeditor5-special-characters
npm i @ckeditor/ckeditor5-table
npm i @ckeditor/ckeditor5-typing


const installedPlugins = [
    Alignment,
    FontColor,
    FontSize,
   // Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
   // ck_Link,

  ];
*/

class CKE_TEST extends React.Component {
  //클래스필드는 2015년 리액트 버전 0.13부터 기본 클래스 문법을 보조하기 위해
  //계획되었다. 클래스필드를 지원하기 전까지 constructor를 정의하고
  // super(props)를 호출하는 것이 항상 임시적인 대안이 되었다.
  constructor(props) {
    super();

    this.state = {
      id: "",
      Password: "",
      Question_title: "",
      Question_Data: "",
      reply: "x",
      date: new Date(),
      section: new Date(),
      editor: ClassicEditor,

      file: null, //byte형태의 데이터 의미
      userName: "",
      fileName: "", //보내고자 하느 파일의 이름

      detailImageFile: null,
      detailImageUrl: null,

      previewImg: [],
      img: [],
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

  Postitem = async () => {
    Axios.post("http://localhost:8000/api/Tech_insert", {
      id: "dawntec",
      Password: "dw1357",

      Question_title: this.state.Question_title,
      Question_Data: this.state.Question_Data,

      date: this.state.date.toLocaleDateString("ko-KR"),
      section: this.state.section,
    })
      .then(function (response) {
        //console.log(response.data);
        // alert('등록 완료!');
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        //console.error(e);  // 에러표시
      });
  };

  titleChange = (e) => {
    //Change 이벤트를 실행시킨다.
    this.setState({
      Question_title: e.target.value,
    });
  };

  /*FileReader 객체는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 
    읽을 파일을 가리키는File 혹은 Blob 객체를 이용해 파일의 내용을(혹은 raw data버퍼로) 
    읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줍니다. */

  insertImg = (e) => {
    let reader = new FileReader();

    if (e.target.files[0]) {
      /*readAsDataURL메서드는, 컨테츠를 특정 Blob이나 File에서 읽어오는 역할을
    하게되고, 읽어오는 read가 종료되는 경우에, readyState의 상태가 DONE이 되고,
    loadend이벤트가 트리거 되면서, base64 인코딩된 스트링 데이터가 result에 담겨지게 된다. */
      reader.readAsDataURL(e.target.files[0]);

      //  //console.log(e.target.files[0])

      //요청한 state의 변경값을 이용하여 같은 이벤트 핸들러 or 메서드 안에서
      // 뭔가를 수행하고자 한다면 어떻게 해야 할까? 세 가지 방법이 있다.

      //ComponentDidUpdate() 안에서 작업을 수행한다.

      this.setState({
        img: [...this.state.img, e.target.files[0]],
      });

      //console.log("img");
      //console.log(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      // //console.log("previewImgUrl");
      // //console.log(previewImgUrl);

      if (previewImgUrl) {
        this.setState({
          previewImg: [...this.state.previewImg, previewImgUrl],
        });
      }
    };
  };

  handleFormSubmit = (event) => {
    event.preventDefault(); //데이터가 서버로 전달됨에 있어 오류가 발생하지 않도록 함.

    const url = "http://localhost:8000/api/customers"; //http://localhost:8000
    const formData = new FormData();
    formData.append("profile_img", event.target.profile_img.files[0]);
    formData.append("name", event.target.name.value);
    this.register(formData);

    //console.log("file data 확인");
    //console.log(event.target.profile_img.files[0]);
    //console.log(formData);
    // 기본적으로 파일이 포함된 데이터를 서버에 전송할 경우 웹표준에 맞는 header를 추가해주어야 한다.
    const config = {
      headers: {
        "content-type": "multipart/form-data", //전달하고자 하는 데이터에 파일이 포함되어 있을 경우 설정함
      },
    };
  };

  register = (regiInfo) => {
    Axios.post("http://localhost:8000/api/customers2", {
      method: "post",
      body: regiInfo,
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg))
      .then((response) => console.log(response));

    window.location.reload(); //테스트용  그냐 페이지를 새로고침해서 고객 데이터 받아올 수 있도록 함
  };

  /*
        handleSubmit = (event) => {
            event.preventDefault();//데이터가 서버로 전달됨에 있어 오류가 발생하지 않도록 함

            //formData로 만들어줘야 multer에서 인식하는 것 같음!
            const formData = new FormData();
            formData.append('profile_img', event.target.profile_img.files[0]);
            formData.append('name', event.target.name.value);
            this.register(formData)
        }
        //headers에 'Content-Type': 'multipart/form-data'을 추가해선 안 됩니다!(에러발생)
        register = (regiInfo) => {
            fetch('http://localhost:8000/api/customers2', {
            method:'post',
            body: regiInfo
            })
            .then(res => res.json())
           .then(data => alert(data.msg))
            .then(response => 
                //console.log(response.file));
            
        }
*/

  deleteImg(index) {
    const convert_img = this.state.img.filter((el, n) => n !== index);
    const convert_previewImg = this.state.previewImg.filter(
      (el, n) => n !== index
    );

    this.setState({
      img: convert_img,
      previewImg: convert_previewImg,
    });

    //  //console.log(index);
    //  //console.log(this.state.img);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // //console.log(this.state.previewImg);
  }

  render() {
    const imgList = this.state.previewImg.map((row, index) => (
      <ul key={index}>
        <img
          className="profile-img2"
          src={this.state.previewImg[index]}
          alt="img"
        ></img>
        <div>{this.state.img[index].name}</div>

        <button onClick={this.deleteImg.bind(this, index)}>❌</button>
      </ul>
    ));

    ////console.log('STATE _', this.state);

    //this is use the ckfinde
    const custom_config = {
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

      ckfinder: {
        uploaded: true,
        // The URL that the images are uploaded to.
        uploadUrl: "/upload",
        // Enable the XMLHttpRequest.withCredentials property.
        withCredentials: true,
        // Headers sent along with the XMLHttpRequest to the upload server.
        headers: {
          "X-CSRF-TOKEN": "CSFR-Token",
          Authorization: "Bearer <JSON Web Token>",
        },
      },
    };

    const custom_config2 = {
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
      image: {
        styles: ["full", "side"],
      },
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
      },
    };
    return (
      <div className="Grid2_Container">
        <div className="Grid2_aside">
          <div className="sidebar_title">관리자</div>
          <div className="sidebar_container">
            <Link to="/Company_Tech/Company_Delete_list/" className="Link_Ctl">
              자료실
            </Link>
          </div>
          <div className="sidebar_container">
            <Link to="/Company_Tech/Company_Admir" className="Link_Ctl">
              작성하기
            </Link>
          </div>
        </div>

        <div className="Grid2_Main">
          <div className="Admir_main_Container">
            <div className="detail_title">기술자료</div>

            <div className="detail_container">
              <div className="detail_text">제목 *</div>

              <div className="detail_input_container">
                <input
                  className="detail_title_input"
                  type="title"
                  placeholder="title"
                  id="user_title"
                  onChange={this.titleChange}
                ></input>
              </div>
            </div>

            <div className="detail_container">
              <div className="detail_CKEditor_container">
                <CKEditor
                  editor={this.state.editor}
                  // data = 최초 실행시 보여줄 문구로 html을 따옴표로 감씬 문자열로 전달
                  //data={`<img src=${this.state.test_Data}></img>`}
                  data={
                    '<p>그림1입니다.</p><figure class="image"><img src="http://localhost:8000/캡처.JPG"></figure><p>그림 2 입니다.</p><figure class="image"><img src="통관번호.PNG"></figure><p>그림 3 입니다.</p><figure class="image image-style-side"><img src="출장 경로6.JPG"></figure>'
                  }
                  config={custom_config2} // 에디터의 설정
                  onReady={(editor) => {
                    // //console.log( 'Editor is ready to use!', editor );
                  }}
                  onInit={(editor) => {
                    // 데이터 최초 실행되면 트리거 된다.
                    //  //console.log( 'Editor is ready to use!', editor );
                  }}
                  onChange={(event, editor) => {
                    // 내용이 입력되면 트리거 된다.
                    const data = editor.getData();
                    ////console.log( { event, editor, data } );
                  }}
                  onBlur={(event, editor) => {
                    //blurred 되었을 때 트리거 됩니다. blurred라는 것은 쉽게 말해서 데이터에서 focus 상태를 벗어나는 것입니다. 에디터가 아닌 다른 곳을 클릭하는 등의 이유로 발생할 수 있겠네요.
                    ////console.log("Blur.", editor);
                  }}
                />
              </div>
            </div>
            <div className="detail_btn_container">
              <button onClick={this.Postitem} className="detaile_btn">
                {" "}
                <Link
                  to="/Company_Tech/Company_Delete_list"
                  className="Link_Ctl"
                >
                  등록
                </Link>
              </button>
              <button className="post_send__Btn">
                {" "}
                <Link
                  to="/Company_Tech/Company_Delete_list"
                  className="Link_Ctl"
                >
                  취소
                </Link>{" "}
              </button>
            </div>
          </div>

          {/* enctype 서버로 데이터 전송하는 방식 */}
          {/**
    <form name='accountFrm' onSubmit={this.handleFormSubmit} encType='multipart/form-data'>
        <p><input type='text' name='name'></input></p>
        
         accept='image/*' 이미지에 해당하는 모든 파일을 허용한다는 의미이다. 
        <p><input type='file' accept='image/jpg,impge/png,image/jpeg,image/gif' name='profile_img'></input></p>
        <p><input type='submit' value='추가'></input></p>
    </form> 
     */}

          {/* input 태그에 type='file'로 지정하고, 업로드를 허용할 파일 확장자명들을 accept에 작성한다.
    작성하지 않는다면 default로 모든 파일을 업로드 할 수 있게 된다.
    accept='image/*' 이미지에 해당하는 모든 파일을 허용한다는 의미이다. */}
          <form name="accountFrm" encType="multipart/form-data">
            <p>
              <input
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                name="profile_img"
                onChange={(e) => this.insertImg(e)}
              ></input>
            </p>
          </form>
          <div>{imgList}</div>
        </div>
      </div>
    );
  }
}
export default CKE_TEST;

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
    //console.log(loader);
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
    const server_domain = "http://localhost:8000/";

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
        default: server_domain + response,
      });
      //console.log("upload 응답 확인_");
      //console.log(server_domain+response.url+new Date());
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

    data.append("upload", file);

    //console.log("file 확인");
    //console.log(file);

    //console.log("FormData 확인");
    //console.log(data);

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
