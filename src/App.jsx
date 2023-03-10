import NAV from "./H_Nav";
import BOTTOM from "./H_Bottom";
import ARRAY from "./H_arrow_up";
import Clcok from "./pratice/Clock";
import HOME from "./HOME_file/Page_HOME";
import pruduct from "./Pruduct_Guide/Page_Pruduct";

import Customer from "./Customer/Customer";
import Customer_Detail from "./Customer/Customer_Detail";
import Customer_Confirm from "./Customer/Customer_Confirm";
import Customer_Modify from "./Customer/Customer_Modify";
import Customer_Guide from "./Customer/Customer_Guide";

import Customer_Admir from "./Customer_Admir/Customer_Admir";
import Customer_Reply from "./Customer_Admir/Customer_Reply";
import Customer_reply_complete from "./Customer_Admir/Customer_reply_complete";

import Customer_Board_detail from "./Customer/Customer_Board_detail";
import Customer_Board_list from "./Customer/Customer_Board_list";
import Customer_Board_Confirm from "./Customer/Customer_Board_Confirm";
import Customer_Board_Modify from "./Customer/Customer_Board_Modify";
import Customer_Board_Admir from "./Customer_Admir/Customer_Board_Admir";
import Customer_Board_Reply from "./Customer_Admir/Customer_Board_Reply";
import Customer_Board_reply_complete from "./Customer_Admir/Customer_Board_reply_complete";
import Customer_Board_Confirm_reply from "./Customer/Customer_Board_Confirm_reply";
import Customer_Confirm_reply from "./Customer/Customer_Confirm_reply";

import BoardItem from "./Customer/BoardItem";

import Notice from "./Notice/Notice";
import Notice_Confirm from "./Notice/Notice_Confirm";
import Notice_Admir from "./Notice_Admir/Notice_Admir";
import Notice_Delete_list from "./Notice/Notice_Delete_list";
import Notice_Delete from "./Notice/Notice_Delete";

import Company_introduce from "./Company_Guide/Company_Introduce";
import Company_Come from "./Company_Guide/Company_Come";
import Company_Year from "./Company_Guide/Company_Year";

import Company_Tech from "./Company_Tech/Company_Tech";
import Company_Admir from "./Company_Tech_Admir/Company_Admir";
import Company_Confirm from "./Company_Tech/Company_Confirm";
import Company_Delete from "./Company_Tech/Company_Delete";
import Company_Delete_list from "./Company_Tech/Company_Delete_list";
import Company_Variety_Tech from "./Company_Tech/Company_Variety_Tech";

import CKE_TEST from "./CKE_TEST/CKE_TEST";
import CKE_TEST2 from "./CKE_TEST/CKE_TEST2";
import S3_UPLOAD from "./S3Upload";

import CustormerAdd from "./Image_test/CustomerAdd";

import Homepage_map from "./User_Guide/Homepage_map";
import Individual from "./User_Guide/Individual";
import Email_refuse from "./User_Guide/Email_refuse";
import "./App.css";

//?????? ????????? ?????? ??????????????? ???????????????.
import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

//????????? ?????? ?????? ?????????
//npm add react-helmet
//npm add react-snap  --> package joson?????? "scripts"??? "postbuild":"react-snap" ????????????.
//??? ????????? next.js??? gatsby ????????? ?????? ??? ??????,  ????????? ????????? ???????????? ??????
//AWS S3, Cloudfront ?????? - S3??? ?????? ???????????? ?????? ?????? ?????? ??????, ??? ??????????????? index.html ????????? ???????????? ???????????? ????????? ??? ??? ????????? ????????? ????????? ???????????????
import { Helmet } from "react-helmet";
//?????????????????? - ???????????? ??????
import Meta from "./components/Meta";

const MEDIA_QUERIES = {
  pc: "(min-width: 1200px)",
  pc: "(min-height:500px)",
  mobile: "(max-width: 1199px)",
};

const metaData = {
  lang: "ko",
  title: "????????????",
  //???????????? ???????????? ?????? ????????? ??????????????? ?????????????????? ??????????????? ????????? ?????? ???????????? ?????????(snippet)???????????? ?????????
  description:
    "????????? ????????? ????????? ???????????? ???????????????. ????????????,????????????,PCB??????,???????????????(?????????),????????????,IOT,??????,UI ...",
  image: "./img/dawntec_mainlogo.png",
  canonical: "",
  type: "website",
  width: "512",
  height: "512",
};

class App extends Component {
  render() {
    return (
      <>
        <header className="screen_header">
          <NAV />
        </header>

        <div className="wrapper">
          <Meta data={metaData} />
          <Route path="/" component={HOME} exact />
          <Route path="/pruduct" component={pruduct} exact />
          <Route path="/Customer" component={Customer} exact />
          <Route
            path="/Customer/Customer_Guide"
            component={Customer_Guide}
            exact
          />
          <Route path="/Notice" component={Notice} exact />
          <Route path="/Company_Tech" component={Company_Tech} exact />
          <Route path="/CKE_TEST" component={CKE_TEST} exact />
          <Route path="/Company_Tech_Admir" component={Company_Admir} exact />
          <Route
            path="/Company_Tech/Company_Variety_Tech"
            component={Company_Variety_Tech}
            exact
          />
          <Route path="/Notice_Admir" component={Notice_Admir} exact />
          <Route
            path="/Image_test/CustomerAdd"
            component={CustormerAdd}
            exact
          />
          <Route
            path="/User_Guide/Homepage_map"
            component={Homepage_map}
            exact
          />
          <Route path="/User_Guide/Individual" component={Individual} exact />
          <Route
            path="/User_Guide/Email_refuse"
            component={Email_refuse}
            exact
          />
          <Route
            path="/Company_Guide/Company_Year"
            component={Company_Year}
            exact
          />

          <Route path="/Customer/Customer" component={Customer} exact />
          <Route
            path="/Customer/Customer/:num_id/:user_id/:user_password"
            component={Customer}
          />
          <Route
            path="/Customer/Customer_Detail"
            component={Customer_Detail}
            exact
          />
          <Route
            path="/Customer/Customer_Detail/:num_id/:user_id/:user_password"
            component={Customer_Detail}
          />
          <Route
            path="/Customer/Customer_Confirm"
            component={Customer_Confirm}
            exact
          />
          <Route
            path="/Customer/Customer_Confirm/:user_id"
            component={Customer_Confirm}
          />
          <Route
            path="/Customer/Customer_Modify"
            component={Customer_Modify}
            exact
          />
          <Route
            path="/Customer/Customer_Modify/:num_id/:user_id/:user_password"
            component={Customer_Modify}
          />
          <Route
            path="/Customer/Customer_Board_list"
            component={Customer_Board_list}
            exact
          />
          <Route
            path="/Customer/Customer_Board_list/:num_id/:user_id/:user_password"
            component={Customer_Board_list}
          />
          <Route
            path="/Customer/Customer_Board_detail"
            component={Customer_Board_detail}
            exact
          />
          <Route
            path="/Customer/Customer_Board_detail/:num_id/:user_id/:user_password"
            component={Customer_Board_detail}
          />
          <Route
            path="/Customer/Customer_Board_Confirm"
            component={Customer_Board_Confirm}
            exact
          />
          <Route
            path="/Customer/Customer_Board_Confirm/:user_id"
            component={Customer_Board_Confirm}
          />
          <Route
            path="/Customer/Customer_Board_Modify"
            component={Customer_Board_Modify}
            exact
          />
          <Route
            path="/Customer/Customer_Board_Modify/:num_id/:user_id/:user_password"
            component={Customer_Board_Modify}
          />
          <Route
            path="/Customer/Customer_Board_Confirm_reply"
            component={Customer_Board_Confirm_reply}
            exact
          />
          <Route
            path="/Customer/Customer_Board_Confirm_reply/:user_id"
            component={Customer_Board_Confirm_reply}
          />
          <Route
            path="/Customer/Customer_Confirm_reply"
            component={Customer_Confirm_reply}
            exact
          />
          <Route
            path="/Customer/Customer_Confirm_reply/:user_id"
            component={Customer_Confirm_reply}
          />
          <Route path="/Customer/BoardItem" component={BoardItem} exact />
          <Route
            path="/Customer/BoardItem/:num_id/:user_id/:user_password"
            component={BoardItem}
          />
          <Route
            path="/Customer_Admir/Customer_Admir"
            component={Customer_Admir}
            exact
          />
          <Route
            path="/Customer_Admir/Customer_Admir/:num_id/:user_id/:user_password"
            component={Customer_Admir}
          />
          <Route
            path="/Customer_Admir/Customer_reply_complete"
            component={Customer_reply_complete}
            exact
          />
          <Route
            path="/Customer_Admir/Customer_reply_complete/:num_id/:user_id/:user_password"
            component={Customer_reply_complete}
          />
          <Route
            path="/Customer_Admir/Customer_Reply"
            component={Customer_Reply}
            exact
          />
          <Route
            path="/Customer_Admir/Customer_Reply/:num_id/:user_id/:user_password"
            component={Customer_Reply}
          />
          <Route
            path="/Customer_Admir/Customer_Board_Admir"
            component={Customer_Board_Admir}
            exact
          />
          <Route
            path="/Customer_Admir/Customer_Board_Admir/:num_id/:user_id/:user_password"
            component={Customer_Board_Admir}
          />
          <Route
            path="/Customer_Admir/Customer_Board_reply_complete"
            component={Customer_Board_reply_complete}
            exact
          />
          <Route
            path="/Customer_Admir/Customer_Board_reply_complete/:num_id/:user_id/:user_password"
            component={Customer_Board_reply_complete}
          />
          <Route
            path="/Customer_Admir/Customer_Board_Reply"
            component={Customer_Board_Reply}
            exact
          />
          <Route
            path="/Customer_Admir/Customer_Board_Reply/:num_id/:user_id/:user_password"
            component={Customer_Board_Reply}
          />
          <Route
            path="/Notice/Notice_Confirm"
            component={Notice_Confirm}
            exact
          />
          <Route
            path="/Notice/Notice_Confirm/:user_id"
            component={Notice_Confirm}
          />
          <Route
            path="/Notice/Notice_Delete_list"
            component={Notice_Delete_list}
            exact
          />
          <Route path="/Notice/Notice_Delete" component={Notice_Delete} exact />
          <Route
            path="/Company_Guide/Company_introduce"
            component={Company_introduce}
            exact
          />
          <Route
            path="/Company_Guide/Company_Come"
            component={Company_Come}
            exact
          />
          <Route path="/Company_Guide/Location" component={Location} exact />
          <Route
            path="/Company_Tech/Company_Confirm"
            component={Company_Confirm}
            exact
          />
          <Route
            path="/Company_Tech/Company_Confirm/:user_id"
            component={Company_Confirm}
          />
          <Route
            path="/Company_Tech/Company_Tech"
            component={Company_Tech}
            exact
          />
          <Route
            path="/Company_Tech/Company_Tech/:page"
            component={Company_Tech}
          />
          <Route
            path="/Company_Tech/Company_Delete_list"
            component={Company_Delete_list}
            exact
          />
          <Route
            path="/Company_Tech/Company_Delete"
            component={Company_Delete}
            exact
          />
          <Route path="/CKE_TEST/CKE_TEST2" component={CKE_TEST2} exact />
          <Route path="/CKE_TEST/S3Upload" component={S3_UPLOAD} exact />
          <Route path="/H_Bottom" component={BOTTOM} exact />
          <Route path="/H_Bottom/:data" component={BOTTOM} />
        </div>
        <footer className="screen_footer">
          <BOTTOM />
          {/* <ARRAY /> */}
        </footer>
      </>
    );
  }
}

export default App;
