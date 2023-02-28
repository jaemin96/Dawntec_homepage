import React from 'react'
import Axios from 'axios'



class CKE_TEST2 extends React.Component{

    constructor(props) {
        super();

        this.state={

        }
    }

    render(){

    return(
        <div className="Notice_board_Container" >
            <div className="Notice_init_Container" >
                <div className="Select_Bar">
                    <select className="text_size_container">
                        <option value="px_8"  className="text_size_box" >8px</option>
                        <option value="px_10" className="text_size_box">9px</option>
                        <option value="px_10" className="text_size_box">10px</option>
                        <option value="px_11" className="text_size_box">11px</option>
                        <option value="px_12" className="text_size_box">12px</option>
                        <option value="px_13" className="text_size_box">13px</option>
                        <option value="px_14" className="text_size_box">14px</option>
                        <option value="px_15" className="text_size_box">15px</option>
                        <option value="px_16" className="text_size_box">16px</option>
                        <option value="px_17" className="text_size_box">17px</option>
                        <option value="px_18" className="text_size_box">18px</option>
                        <option value="px_19" className="text_size_box">19px</option>
                        <option value="px_20" className="text_size_box">20px</option>
                        <option value="px_21" className="text_size_box">21px</option>
                        <option value="px_22" className="text_size_box">22px</option>
                        <option value="px_23" className="text_size_box">23px</option>
                        <option value="px_24" className="text_size_box">24px</option>
                    </select>  
                </div>
                
                <textarea type="textarea"  className="Write_box" name="note">
                
                
                </textarea>
                
            </div>
        </div>
       );
    }
}

export default CKE_TEST2;

