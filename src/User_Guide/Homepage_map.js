
import React, {Component } from 'react';
import { Route,Link, Router } from 'react-router-dom';
import styled from "styled-components";
import BOTTOM from '../H_Bottom';


class Homepage_map extends React.Component{
    componentDidMount() {
      
    }

    render(){
        return(
          <div  className="animate__animated animate__fadeIn  ">  
          <div className="User_Guide_Container" >

            <div className="UG_aside">
                  <div className = "sidebar_title">이용안내</div>
                  <div className = "sidebar_container"><Link to ="/User_Guide/Individual" className="sidebar_link">개인정보취급방침</Link></div>
                  <div className = "sidebar_container"><Link to ="/User_Guide/Email_refuse" className="sidebar_link">이메일무단수집거부</Link></div>
                  <div className = "sidebar_container"><Link to ="/User_Guide/Homepage_map" className="sidebar_link">사이트맵</Link></div>
            </div>

          
            <div className="UG_header">사이트맵</div>

          <div className="UG_Main1"> 
            <div className="map_box">
                <div className="map_title">회사소개</div>
                <div className="map_div"><Link to="/Company_Guide/Company_Introduce" className ="map_link " >인사말</Link></div>
              {/*  <div className="map_div"><Link to="/Company_Guide/Company_Year" className ="map_link " >회사연혁</Link></div>*/}
                <div className="map_div"><Link to="/Company_Guide/Company_Come" className ="map_link " >오시는 길</Link></div>
                
            </div>
          </div>

          <div className="UG_Main2"> 
             <div className="map_box">
                 <div className="map_title">기술자료실</div>
                 <div className="map_div"><Link to="/Company_Tech" className ="map_link " >기술자료실</Link></div>
                 <div className="map_div"><Link to="/Company_Tech/Company_Variety_Tech" className ="map_link " >TECH</Link></div>
             </div>
           </div>

           <div className="UG_Main3"> 
            <div className="map_box">
                <div className="map_title">공지사항</div>
                <div className="map_div"><Link to="/Notice" className ="map_link " >공지사항</Link></div>
            </div>
           </div>

           <div className="UG_Main4"> 
            <div className="map_box">
                <div className="map_title">고객센터</div>
                {/*div className="map_div"><Link to="/Customer/Customer_Guide" className ="map_link " >고객센터 안내</Link></div>*/}
                <div className="map_div"><Link to="/Customer/Customer_Detail" className ="map_link " >문의하기</Link></div>
                <div className="map_div"><Link to="/Customer" className ="map_link " >답변확인</Link></div>
            </div>
           </div>
          
          <div className="UG_bottom">
           
          </div>
            
          <div className="UG_footer"><BOTTOM /></div>
        </div>
        </div>



        )
    }
}

export default Homepage_map;