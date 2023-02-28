import React, { Component,useState } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

class SignIn extends Component {
    state = {
     
    };

    loginHandler = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };   ////계산된 속성명 사용
  
   
    render() {
      const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것
      return (
        <>
          {isOpen ? (  
  
           ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
          /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
            ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
          ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
           /// true인 상태로 있어서 화면이 안꺼진다.
            <div>
         <Modal message="&nbsp;&nbsp;&nbsp;Administrator"></Modal>

  
           </div>
           
          ) : null}
        </>
      );
    }
  }
  
  export default SignIn;

  function Modal(props) {
    const { message } = props;
    
    const [ID_,change_IDdata]=useState("");
    const [Password_,change_PWdata]=useState("");
  



    const Admir_ID = (e) => {
      
        change_IDdata(e.target.value);

        //console.log(ID_);
      };   ////계산된 속성명 사용

    const Admir_Password = (e) => {
    
      change_PWdata(e.target.value);

     // console.log(Password_);
    };   ////계산된 속성명 사용

    const btn_click = (e) => {
     // console.log(ID_);
     // console.log(Password_);
     if(("dawntec"===ID_)&&("dw1357"===Password_))
     {
       console.log("같다");
       //<Link to ="/Notice/Notice_Delete_list" className="Admir_Ctl"></Link>
     }
     else
     {
      console.log("다르다");
     }
    };   ////계산된 속성명 사용

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: "4%",
          left: "67.5%",
          width: "50%",
          height: "auto",
          fontSize: "1vw",
        }}
      >
        
        <div
          style={{
            width: "30%",
            height:"auto",
            textAlign: "center",
            borderRadius: 10,
            background: "grey",
            fontSize: "1vw",
            color: "white",
           
          }}
        >
       

       <button 
        style={{
            float: "right",
          }}><Link to={{pathname : `/`,
          state : {
                      STATUS : "close",   
                  }
          }} className="Link_Ctl">X</Link></button>
           
          <div><br/></div>

          
          <p
           style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1vw",
            fontWeight:"bold"
          }}>{message}  </p>
         
          <input
          name="ID"
          type="text"
          placeholder="ID"
          onChange={Admir_ID}
          
          style={{
            width: "70%",
            height:"auto",
            fontSize: "0.8vw",
          }}
          ></input>

          <input
          name="password"
          type="password"
          placeholder="PassWord"
          onChange={Admir_Password}
          style={{
            width: "70%",
            height:"auto",
            fontSize: "0.8vw",
            marginBottom:"20%"
          }} ></input>
        </div>
        <button
           onClick={btn_click}
           style={{
            fontSize: "0.8vw",
            marginTop:"0.2",
            marginBottom:"0.4%",
            display: "flex",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: "auto",
            left: "87.5%",
            width: "10%",
            height:"1.2vw",
       
            bottom: "4%",
          }}>로그인</button>
      </div>
      
    );
  }

  /* <Link to ="/Notice/Notice_Delete_list" className="Admir_Ctl">로그인 </Link>  */


