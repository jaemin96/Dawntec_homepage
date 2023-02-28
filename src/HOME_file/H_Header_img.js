import React from 'react';
import { Navbar, Button, Image } from "react-bootstrap";

class Header_img extends React.Component{
    render()
    {
        return(
            <div  className="animate__animated animate__fadeIn  ">  
                 <Image src="./img/main.png" fluid />
            </div>
        );
    }
}

export default Header_img;