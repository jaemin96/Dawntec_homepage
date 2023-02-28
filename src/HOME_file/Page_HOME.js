import React, { useState, useRef } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import BOTTOM from "../H_Bottom";
import SignIn from "../Signln";
import { Route, Link, Router } from "react-router-dom";
//모달 관리자 로그인 창 구현하기 위한 라이브러리
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import material_Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "animate.css";
const styles = (theme) => ({
  hidden: {
    display: "none",
  },
});

class HOME extends React.Component {
  img_ref = React.createRef();
  img_ref2 = React.createRef();
  Homepage_Title = React.createRef();
  //생성자 명시
  constructor(props) {
    //props 전달 받은 것을 초기화
    super(props);

    this.state = {
      number: 0,
      image_Array: "./img/chip_circuit_ic.png",
      timeout: 3000,

      Select_Btn1: false,
      Select_Btn2: false,
      Select_Btn3: false,
      Select_Btn4: false,
      Select_Btn5: false,

      get_close_data: "",
      title_num: 0,

      isModalOpen: false,
      open: false,
      Admir_ID: "",
      Admir_Password: "",
    };
    //모달 로그인 창 on off
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleID = this.handleID.bind(this);
    this.handlePasswrod = this.handlePasswrod.bind(this);
    this.Admir_login_init = this.Admir_login_init.bind(this);

    this.Fast_Price_Inquiry = this.Fast_Price_Inquiry.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }

  handleID(e) {
    this.setState({ Admir_ID: e.target.value });
  }

  handlePasswrod(e) {
    this.setState({ Admir_Password: e.target.value });
  }

  Admir_login_init(e) {
    if (
      "dawntec" === this.state.Admir_ID &&
      "dw1357" === this.state.Admir_Password
    ) {
      //window.location.assign("Notice/Notice_Delete_list");
      //window.location.href = 'http://localhost:443/Notice/Notice_Delete_list';
      this.props.history.push("/Notice/Notice_Delete_list");
    } else {
      alert("ID 및 Password를 다시 작성해 주십시오.");
    }
  }

  Fast_Price_Inquiry(e) {
    if (e === 0) this.props.history.push("/Company_Tech");
    //자료실
    else if (e === 1) this.props.history.push("/Customer/Customer_Detail");
    // 견적문의
    else if (e === 2) this.props.history.push("/Notice"); // 공지사항
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  eeeset = () => {
    ////console.log(this.props.location.state.STATUS);
  };

  pointClick(msg) {
    this.setState({
      number: msg,
    });

    switch (msg) {
      case 0:
        this.img_ref.current.style.transform = "translate(0vw)";
        this.setState({
          Select_Btn1: true,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: false,
        });
        break;

      case 1:
        this.img_ref.current.style.transform = "translate(-30vw)";
        this.setState({
          Select_Btn1: false,
          Select_Btn2: true,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: false,
        });
        break;

      case 2:
        this.img_ref.current.style.transform = "translate(-60vw)";
        this.setState({
          Select_Btn1: false,
          Select_Btn2: false,
          Select_Btn3: true,
          Select_Btn4: false,
          Select_Btn5: false,
        });
        break;

      case 3:
        this.img_ref.current.style.transform = "translate(-90vw)";
        this.setState({
          Select_Btn1: false,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: true,
          Select_Btn5: false,
        });
        break;

      case 4:
        this.img_ref.current.style.transform = "translate(-120vw)";
        this.setState({
          Select_Btn1: false,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: true,
        });
        break;
    }
  }

  Title_cycle() {
    let num = this.state.title_num;

    switch (num) {
      case 0:
        this.setState({
          title_num: 1,
        });
        this.Homepage_Title.current.style.transform = "translate(-3vh)";
        this.Homepage_Title.current.style.transition = "50ms";
        this.Homepage_Title.current.style.opacity = "0";

        this.img_ref.current.style.transition = "0ms";
        this.img_ref.current.style.opacity = "0";

        this.title_timeout();
        break;

      case 1:
        this.Homepage_Title.current.style.transform = "translate(0vh)";
        this.Homepage_Title.current.style.transition = "1600ms";
        this.Homepage_Title.current.style.opacity = "1";

        this.img_ref.current.style.transition = "900ms";
        this.img_ref.current.style.opacity = "1";
        break;
    }
  }

  Imgcycle() {
    let current_number = this.state.number;

    switch (current_number) {
      case 0:
        this.img_ref.current.style.transform = "translate(0vw)";
        this.img_ref.current.style.transition = "0ms";
        // this.img_ref.current.style.transition="0ms";

        this.img_ref2.current.style.transform = "translate(0vw)";
        this.img_ref2.current.style.transition = "0ms";
        current_number = 1;

        this.setState({
          timeout: 0,
          title_num: 0,
          Select_Btn1: true,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: false,
        });

        break;

      case 1:
        this.img_ref.current.style.transform = "translate(-30vw)";
        this.img_ref.current.style.transition = "0ms";
        //  this.img_ref.current.style.transition="500ms";

        this.img_ref2.current.style.transform = "translate(-15vw)";
        this.img_ref2.current.style.transition = "500ms";
        current_number = 2;

        this.setState({
          timeout: 3000,
          title_num: 0,
          Select_Btn1: false,
          Select_Btn2: true,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: false,
        });

        break;

      case 2:
        this.img_ref.current.style.transform = "translate(-60vw)";
        this.img_ref.current.style.transition = "0ms";
        //  this.img_ref.current.style.transition="500ms";

        this.img_ref2.current.style.transform = "translate(-30vw)";
        this.img_ref2.current.style.transition = "500ms";
        current_number = 3;

        this.setState({
          title_num: 0,
          Select_Btn1: false,
          Select_Btn2: false,
          Select_Btn3: true,
          Select_Btn4: false,
          Select_Btn5: false,
        });

        break;

      case 3:
        this.img_ref.current.style.transform = "translate(-90vw)";
        this.img_ref.current.style.transition = "0ms";
        //  this.img_ref.current.style.transition="500ms";

        this.img_ref2.current.style.transform = "translate(-45vw)";
        this.img_ref2.current.style.transition = "500ms";
        current_number = 4;

        this.setState({
          title_num: 0,
          Select_Btn1: false,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: true,
          Select_Btn5: false,
        });

        break;

      case 4:
        this.img_ref.current.style.transform = "translate(-120vw)";
        this.img_ref.current.style.transition = "0ms";
        //   this.img_ref.current.style.transition="500ms";

        this.img_ref2.current.style.transform = "translate(-60vw)";
        this.img_ref2.current.style.transition = "500ms";
        current_number = 5;

        this.setState({
          title_num: 0,
          Select_Btn1: false,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: true,
        });

        break;

      case 5:
        this.img_ref.current.style.transform = "translate(-150vw)";
        this.img_ref.current.style.transition = "0ms";
        //   this.img_ref.current.style.transition="500ms";

        this.img_ref2.current.style.transform = "translate(-75vw)";
        this.img_ref2.current.style.transition = "500ms";
        current_number = 0;

        this.setState({
          title_num: 0,
          Select_Btn1: true,
          Select_Btn2: false,
          Select_Btn3: false,
          Select_Btn4: false,
          Select_Btn5: false,
        });

        break;
    }
    this.setState({
      number: current_number,
    });
    this.Title_cycle();
    this.img_timeout();
  }

  img_timeout() {
    let timer = this.state.timeout;
    this.Changecycle = setTimeout(() => {
      this.Imgcycle();
    }, timer);
  }
  title_timeout() {
    this.Changecycle2 = setTimeout(() => {
      this.Title_cycle();
    }, 50);
  }

  componentWillMount() {
    ////console.log('Component WILL MOUNT!')
    //this.setState({get_close_data:this.props.location.state.STATUS});
    //////console.log(this.state.get_close_data);
  }
  //lifecycle에서 즉 컴포넌트가 초기화가 끝났을 경우 자동적으로 불러져 들어오는 함수임
  //render가 호출된 이후 호출되는 메소드
  componentDidMount() {
    // this.Changecycle = setInterval(() => { this.Imgcycle()}, 3000);
    this.Imgcycle();
  }

  // 리소스 낭비 없애기 위해 Component가 unmount될 경우 이용이 끝났을 경우 interval을 종료한다.
  componentWillUnmount() {
    clearInterval(this.Changecycle);
    clearInterval(this.Changecycle2);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="animate__animated animate__fadeIn --animate-duration:1s; ">
        <div className="home_Backimg">
          <Image src="./img/main.png" className="Home_tile_img" fluid />

          <div className="Grid3_Container">
            <div className="Grid3_Header"> </div>
            <div className="grid3_outer1"></div>

            <div className="section">
              <div className="Grid3_Main">
                <div className="Top_section">
                  <div className="Top_section__container">
                    <div className="slider">
                      <div className="Container_img" ref={this.img_ref}>
                        <div className="img_ani">
                          <a
                            href=""
                            className="Container_init1"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb4.png"
                              alt="img"
                              className="img_size1"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani">
                          <a
                            href=""
                            className="Container_init1"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb5.png"
                              alt="img"
                              className="img_size1"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani">
                          <a
                            href=""
                            className="Container_init1"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb18.png"
                              alt="img"
                              className="img_size1"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani">
                          <a
                            href=""
                            className="Container_init1"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb35.png"
                              alt="img"
                              className="img_size1"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani">
                          <a
                            href=""
                            className="Container_init1"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb31.png"
                              alt="img"
                              className="img_size1"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani">
                          <a
                            href=""
                            className="Container_init1"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb4.png"
                              alt="img"
                              className="img_size1"
                              fluid
                            ></Image>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*https://animate.style/ 참고 */}
                  <div className="Top_section__container">
                    <div
                      className="Top_section__container2"
                      ref={this.Homepage_Title}
                    >
                      <div className="animate__animated animate__fadeIn  ">
                        <div className="top_title">
                          회로 설계,기술 개발,최상의 서비스
                        </div>
                        <h1 className="top_h1">도운테크가 약속드립니다.</h1>
                        <h3 className="top_h3">
                          최고의 품질과 최상의 서비스로 신속하게 <br />
                          고객여러분께 공급하고자 노력하고 있습니다.
                          <br />
                          <br />
                        </h3>
                      </div>
                    </div>

                    <div className="work__categories">
                      <button
                        onClick={this.pointClick.bind(this, 0)}
                        className={
                          this.state.Select_Btn1
                            ? "backcolor_On"
                            : "backcolor_Off"
                        }
                      >
                        <span className="category__count"></span>
                      </button>
                      <button
                        onClick={this.pointClick.bind(this, 1)}
                        className={
                          this.state.Select_Btn2
                            ? "backcolor_On"
                            : "backcolor_Off"
                        }
                      >
                        <span className="category__count"></span>
                      </button>
                      <button
                        onClick={this.pointClick.bind(this, 2)}
                        className={
                          this.state.Select_Btn3
                            ? "backcolor_On"
                            : "backcolor_Off"
                        }
                      >
                        <span className="category__count"></span>
                      </button>
                      <button
                        onClick={this.pointClick.bind(this, 3)}
                        className={
                          this.state.Select_Btn4
                            ? "backcolor_On"
                            : "backcolor_Off"
                        }
                      >
                        <span className="category__count"></span>
                      </button>
                      <button
                        onClick={this.pointClick.bind(this, 4)}
                        className={
                          this.state.Select_Btn5
                            ? "backcolor_On"
                            : "backcolor_Off"
                        }
                      >
                        <span className="category__count"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bottom_section">
                  <div className="bottom_section__container">
                    <div className="slider2">
                      <div className="Container_img2" ref={this.img_ref2}>
                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb2.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb1.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb29.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb24.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb27.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb2.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>

                        <div className="img_ani2">
                          <a
                            href=""
                            className="Container2_init"
                            target=""
                            data-type="Front-end"
                          >
                            <Image
                              src="./img/pcb1.png"
                              alt="img"
                              className="img_size2"
                              fluid
                            ></Image>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom_Quick_container">
                    <div className="bottom_Quick_Menu">QUICK MENU</div>

                    <div className="Qucik_img_container">
                      <div className="Quick_small_container">
                        <Image
                          src="./img/folder_img.png"
                          alt="img"
                          onClick={this.Fast_Price_Inquiry.bind(this, 0)}
                          className="Quick_img_ctl"
                          fluid
                        ></Image>
                        <br />
                        <br />
                        <div className="Quick_img_text">자료실</div>
                      </div>

                      <div className="Quick_small_container">
                        <Image
                          src="./img/flat-img.png"
                          alt="img"
                          onClick={this.Fast_Price_Inquiry.bind(this, 1)}
                          className="Quick_img_ctl"
                          fluid
                        ></Image>{" "}
                        <br /> <br />
                        <div className="Quick_img_text">문의</div>
                      </div>

                      <div className="Quick_small_container">
                        <Image
                          src="./img/loudspeaker_img.png"
                          alt="img"
                          onClick={this.Fast_Price_Inquiry.bind(this, 2)}
                          className="Quick_img_ctl"
                          fluid
                        ></Image>{" "}
                        <br /> <br />
                        <div className="Quick_img_text">공지사항</div>
                      </div>
                    </div>
                  </div>

                  <div className="CSCENTER__container"> </div>
                </div>
              </div>
            </div>

            <div className="grid3_outer2"></div>

            <div className="page_footer">
              <div className="admir_bottom_container">
                <material_Button
                  variant="contained"
                  color="Black;"
                  className="Admir_Ctl"
                  onClick={this.handleClickOpen}
                >
                  {" "}
                  OPEN{" "}
                </material_Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>Administrator</DialogTitle>

                  <DialogContent>
                    <TextField
                      label="ID"
                      type="text"
                      name="userID"
                      value={this.state.Admir_ID}
                      onChange={this.handleID}
                    ></TextField>
                    <br />
                    <TextField
                      label="Password"
                      type="password"
                      name="userPassword"
                      value={this.state.Admir_Password}
                      onChange={this.handlePasswrod}
                    ></TextField>
                  </DialogContent>

                  <DialogActions>
                    <material_Button
                      variant="contained"
                      color="primary"
                      onClick={this.Admir_login_init}
                    >
                      로그인
                    </material_Button>
                    <material_Button
                      variant="outlined"
                      color="primary"
                      onClick={this.handleClose}
                    >
                      닫기
                    </material_Button>
                  </DialogActions>
                </Dialog>
              </div>

              <BOTTOM />

              {/* 
           <button onClick={this.openModal} className="Admir_Ctl">Admir</button>
            <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
        */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HOME;
