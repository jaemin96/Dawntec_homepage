import React from 'react';
import Axios ,{post} from 'axios'


class CustomerAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            file:null,  //byte형태의 데이터 의미
            userName:"",
            birthday:"",
            gender:"",
            job:"",
            fileName:'' //보내고자 하느 파일의 이름
        }
    }

    handFileChange =(e) =>{
        this.setState({
            file:e.target.files[0], // target 이벤트가 발생한 input값 file중에서 첫번째 값을 설정해줌  , files에서 0 index에 해당하는 데이터를 선택함  // 이 프로그램에서는 1개의 파일만 사용하도록 함
            fileName:e.target.value
        })
    }

    handleValueChange =(e) =>{
        let nextState = {};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);//현재 state값을 갱신
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //formData로 만들어줘야 multer에서 인식하는 것 같음!
        const formData = new FormData();
        formData.append('email',event.target.email.value);
        formData.append('pwd', event.target.pwd.value);
        formData.append('profile_img', event.target.profile_img.files[0]);
        formData.append('name', event.target.name.value);
        formData.append('nickname', event.target.nickname.value);
        formData.append('phone', event.target.phone.value);
    
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
      }


    handleFormSubmit =(e) =>{
        e.preventDefault() //데이터가 서버로 전달됨에 있어 오류가 발생하지 않도록 함
        this.addCustomer()
        .then((Response) => {//서버로 부터 response가 넘어오면 응답
            console.log(Response.data);
        })

        this.setState({
            file:null,
            userName:'',
            birthday:'',
            gender:'',
            job:'',
            fileName:'' //보내고자 하느 파일의 이름
        })
        window.location.reload();//테스트용  그냐 페이지를 새로고침해서 고객 데이터 받아올 수 있도록 함
    }

    addCustomer = () =>{
        const url = 'http://localhost:8000/api/customers'; //http://localhost:8000

        //formData로 만들어줘야 multer에서 인식하는 것 같음!
        const formData = new FormData();
        formData.append('image',this.state.file); // formData라는 객체를 이용해 특정한 데이터를 보낼 수 있도록 함
        formData.append('name',this.state.userName) ;
        formData.append('birthday',this.state.birthday) ;
        formData.append('gender',this.state.gender) ;
        formData.append('job',this.state.job) ;

        // 기본적으로 파일이 포함된 데이터를 서버에 전송할 경우 웹표준에 맞는 header를 추가해주어야 한다.
        const config={
            headers:
            {
                'content-type':'multipart/form-data' //전달하고자 하는 데이터에 파일이 포함되어 있을 경우 설정함
            }
        }
        return Axios.post(url,formData,config);
    }

     render()
    {
        return(
            <div>
           {/*고객 추가 버튼을 누렀을 경우 handleFomeSubmit 함수 동작*/}
            <form onSubmit={this.handleFormSubmit}>
                <hi>고객 추가</hi>
                {/* input태크로 file를 보낸다 .  실제로 데이터가 전달될 경우 name속성에 값을 기준으로 동작 즉 서버에서 file이라는 변수 값을 이용해 file데이터를 추적한다.  */}
                {/* value는 fileName을 보여줄 수 있도록 함   onChange를 이용해 실제 사용자가 파일을 업로드해 보낼 준비가 되었을 떄 handFileChange함수를 이용해 그에 대한 처리결과를 보여주기 위한 것  */}
                프로필 이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handFileChange}></input><br/>
                이름:<input type="text" name="username" value={this.state.userName} onchange={this.handleValueChange} ></input><br/>
                생년월일:<input type="text" name="birthday" value={this.state.birthday} onchange={this.handleValueChange} ></input><br/>
                성별:<input type="text" name="gender" value={this.state.gender} onchange={this.handleValueChange} ></input><br/>
                직업:<input type="text" name="job" value={this.state.job} onchange={this.handleValueChange} ></input><br/>
                {/* 버튼을 누르면 handleFormSubmit함수가 자동으로 불러와짐 */}
                <button type="submit">추가하기</button>
            </form>

            <form name='accountFrm' onSubmit={this.handleSubmit} encType='multipart/form-data'>
                <p><input type='text' name='email'></input></p>
                <p><input type='password' name='pwd'></input></p>
                <p><input type='password' name='pwdcheck'></input></p>
                <p><input type='text' name='name'></input></p>
                <p><input type='text' name='nickname'></input></p>
                <p><input type='text' name='phone'></input></p>
                <p><input type='file' accept='image/jpg,impge/png,image/jpeg,image/gif' name='profile_img'></input></p>
                <p><input type='submit' value='회원가입'></input></p>
            </form> 
        </div>
        );
    }
}

export default CustomerAdd;