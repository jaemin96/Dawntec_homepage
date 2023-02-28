import React from 'react';

import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//font Awesome 패키지 설치
//npm i @fortawesome/fontawesome-svg-core // SVG 기반 아이콘을 활성화 시키기 위한 기본 패키지

//Font Awesome 아이콘 대한 패키지 //무료로 제공되는 Solid, Regular Brands 3개의 카테고리에 대한 패키지만 설치
//npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons

//Font Awesome을 React 컴포넌트 형태로 사용할 수 있도록 해주는 @fortawesome/react-fontawesome 이라는 패키지는 설치
//npm i @fortawesome/react-fontawesome
class Arrow_up extends React.Component{
    render()
    {
        return(
            <div className="arrow_position">
                <button className="arrow-up">
                    <FontAwesomeIcon  icon={faArrowCircleUp} ></FontAwesomeIcon>
                </button>
            </div>
        );
    }
}
export default Arrow_up;