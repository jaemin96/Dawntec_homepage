import React from "react";
//https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/image-upload.html
import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import CKEditor from "@ckeditor/ckeditor5-react";
import Axios from "axios";
import { Navbar, Button, Image } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import BOTTOM from "../H_Bottom";

//console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

class Company_Variety_Tech extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="Company_Come_Container">
          <div className="come_aside">
            <div className="sidebar_title">회사소개</div>
            {/*<div className = "sidebar_container"><Link to ="/Company_Guide/Company_Year" className="sidebar_link">회사연혁</Link></div>*/}
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

          <div className="Come_header"></div>

          <div className="Come_Main">
            <div className="Tech_Small_box">
              <div className="Tech_Small_title">
                Circuit Design - 회로설계
                <div className="Tech_Small_title_explain">
                  <br />
                </div>
              </div>

              <div className="Tech_Item_box">
                <Image
                  src="../img/circuit1.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/circuit4.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/circuit7.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/circuit8.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
              </div>

              <div className="Tech_Item_box">
                <Image
                  src="../img/circuit2.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/circuit5.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/circuit6.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
              </div>
            </div>

            <div className="Tech_Small_box">
              <div className="Tech_Small_title">
                production - 제작
                <div className="Tech_Small_title_explain"></div>
              </div>

              <div className="Tech_Item_box">
                <Image
                  src="../img/pcb18.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb24.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb29.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb27.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb35.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb5.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb4.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
                <Image
                  src="../img/pcb31.png"
                  alt="img"
                  className="Tech_Item"
                ></Image>
              </div>
            </div>

            <div className="Tech_Small_box">
              <div className="Tech_Small_title">
                Firmware - 펌웨어
                <div className="Tech_Small_title_explain">
                  (모터제어,센서감지,데이터저장,LCD,FND,LED,부저,자이로스코프,유/무선
                  통신 등)
                </div>
              </div>

              <div className="Tech_Item_box">
                <Image
                  src="../img/program4.png"
                  alt="img"
                  className="firm_Item"
                ></Image>
                <Image
                  src="../img/program5.png"
                  alt="img"
                  className="firm_Item"
                ></Image>
                <Image
                  src="../img/program1.png"
                  alt="img"
                  className="firm_Item"
                ></Image>
                <Image
                  src="../img/program2.png"
                  alt="img"
                  className="firm_Item"
                ></Image>
              </div>
            </div>

            <div className="Tech_Small_box">
              <div className="Tech_Small_title">
                User Interface - UI
                <div className="Tech_Small_title_explain">
                  Window User interface, Android App
                </div>
              </div>
              <div className="Tech_Item_box">
                <Image
                  src="../img/Window1.JPG"
                  alt="img"
                  className="UI_Item"
                ></Image>
                <Image
                  src="../img/Window2.JPG"
                  alt="img"
                  className="UI_Item"
                ></Image>
                <Image
                  src="../img/Window3.JPG"
                  alt="img"
                  className="UI_Item"
                ></Image>
                <Image
                  src="../img/App1.JPG"
                  alt="img"
                  className="APP_Item"
                ></Image>
                <Image
                  src="../img/App2.JPG"
                  alt="img"
                  className="APP_Item"
                ></Image>
                <Image
                  src="../img/App4.JPG"
                  alt="img"
                  className="APP_Item"
                ></Image>
              </div>
            </div>

            <div className="Tech_Small_box">
              <div className="Tech_Small_title">
                Communication - 통신
                <div className="Tech_Small_title_explain">
                  Wifi , Bluetooth , RF(Radio Frequency) , RS232,RS485 등
                </div>
              </div>
              <div className="Tech_Item_box">
                <div className="trans_item_box">
                  <div className="trans_item_Size">
                    {" "}
                    <Image
                      src="../img/wifi_img.png"
                      alt="img"
                      className="Tech_Item"
                    ></Image>
                  </div>
                  <div className="trans_item_Size">
                    <Image
                      src="../img/bluetooth_img.png"
                      alt="img"
                      className="Tech_Item"
                    ></Image>
                  </div>
                  <div className="trans_item_Size">
                    <Image
                      src="../img/radio_img.png"
                      alt="img"
                      className="Tech_Item"
                    ></Image>
                  </div>
                  <div className="trans_item_Size">
                    <Image
                      src="../img/usb_img.png"
                      alt="img"
                      className="Tech_Item"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Come_Main2"></div>
        </div>
      </div>
    );
  }
}
export default Company_Variety_Tech;
