import React from 'react';
import { Navbar, Button, Image } from "react-bootstrap";


class Work extends React.Component{
    render()
    {
        return(
            <div  className="animate__animated animate__fadeIn  ">  
            <section  className="section">
                <div className="section__container">
       
                <div className="work__projects" >
                    <a href="" className="project" target="" data-type="Front-end">            
                        <Image src="./img/chip_circuit_ic.png" alt="dog" className="project__img" fluid />
                        <div className="project_description">
                            <h3> what the..</h3>
                            <span> what??</span>
                        </div>
                    </a>        
                </div>
    
                <div className="work__categories">
                        <button className="category__Btn selected" data-filter="*">
                            All <span className="category__count">21</span></button>
                        <button className="category__Btn" data-filter="Front-end">
                            Front-end<span className="category__count">1</span></button>
                        <button className="category__Btn" data-filter="Back-end">
                            Back-end<span className="category__count">0</span></button>
                        <button className="category__Btn" data-filter="Circuit design">
                            Circuit design<span className="category__count">10</span></button>
                        <button className="category__Btn" data-filter="Firmware">
                            Firmware <span className="category__count">10</span></button>
                    </div>
                </div>
    
            </section>
    
        
    
        </div>
        );
    }
}

export default Work;