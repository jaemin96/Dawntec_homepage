/*global kakao*/
import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import styled from "styled-components";
import BOTTOM from "../H_Bottom";

class Company_Come extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d1a6ed8619c5a91ae5c4efe04d58b103&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("mymap");
        let options = {
          center: new kakao.maps.LatLng(37.22435614258104, 127.04748761004909),
          level: 2,
        };
        const map = new window.kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
          37.22435614258104,
          127.04748761004909
        );
        // 마커를 생성
        let marker = new kakao.maps.Marker({ position: markerPosition });
        // 마커를 지도 위에 표시
        marker.setMap(map);
      });
    };
  }

  /* <section className="section">
                <div className="Cometitle">오시는 길</div>
                <div className="Explain">
                    망포역 -{'>'} 버스타고 -{'>'} 도운테크</div>
                <Maps className="Mapbox" id="map"></Maps>
            </section> */
  render() {
    return (
      <div className="animate__animated animate__fadeIn  ">
        <div className="Company_Come_Container">
          <div className="come_aside">
            <div className="sidebar_title">회사소개</div>
            {/*<div className = "sidebar_container"><Link to ="/Company_Guide/Company_Year" className="sidebar_link">회사연혁</Link></div>*/}
            <div className="sidebar_container">
              <Link
                to="/Company_Guide/Company_Introduce"
                className="sidebar_link"
              >
                인사말
              </Link>
            </div>
            <div className="sidebar_container">
              <Link to="/Company_Guide/Company_Come" className="sidebar_link">
                오시는 길
              </Link>
            </div>
          </div>

          <div className="Come_header">오시는 길</div>

          <div className="Come_Main">
            <Maps className="Mapbox" id="mymap"></Maps>
          </div>

          <div className="Come_Main2">
            <div className="Come_addr">
              <div className="Come_Font1">
                주소 <br />
                전화
                <br />
                이메일
              </div>

              <div className="Come_Font2">
                &nbsp; 경기도 화성시 기산로 86 도운테크
                <br />
                &nbsp; 070-8871-2866 , 010-2731-1869
                <br />
                &nbsp; dawntech@dawnth.co.kr
              </div>
            </div>
          </div>

          <div className="Come_bottom"></div>
        </div>
      </div>
    );
  }
}
const Maps = styled.div`
  width: auto;
  height: 100%;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default Company_Come;
