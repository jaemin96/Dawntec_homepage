import * as React from 'react';
import Axios from 'axios'
import { Route,Link, Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//import {useHistory} from 'react-router-dom';
//npm i react-bootstrap-table --save 
//위에 오류난다면 npm i react-bootstrap-table --save --legacy-peer-deps 하면됨

import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//모달 관리자 로그인 창 구현하기 위한 라이브러리
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class BoardItem extends React.Component{
    constructor(props) {
        super();

        this.state={
            open:false,
            Admir_Password:"",
            check:"",
            path:"",
        };


        this.handleClose = this.handleClose.bind(this)
        this.handlePasswrod = this.handlePasswrod.bind(this);
        this.password_check = this.password_check.bind(this);
    }

    

    handleClickOpen1(msg) {
        this.setState({
            open: true,
            Admir_Password:"",
            check:msg,
            path:"/Customer/Customer_Board_Confirm"
        });
    }

    handleClickOpen2(msg) {
        this.setState({
            open: true,
            Admir_Password:"",
            check:msg,
            path:"/Customer/Customer_Board_Confirm_reply"
        });
    }

    handleClose() {this.setState({open: false, check:""});}
    handlePasswrod(e) 
    {
        this.setState(
        {Admir_Password: e.target.value}
    );}

    password_check(e) 
    {
        if(this.props.row.Password===this.state.Admir_Password)
        {
            console.log(this.state.path);
            //this.props.history.push("/Notice/Notice_Delete_list");

            
            this.props.history.push({
                pathname : this.state.path,
                state : {
                        title : this.props.row.Question_title,
                        date : this.props.row.date,
                        id:this.props.row.id,
                        Customer_Name:this.props.row.Customer_Name,
                        Password:this.props.row.Password,
                        data:this.props.row.Question_Data,
                        section : this.props.row.section,
                        reply:this.props.row.reply,
                        admir_reply_Data:this.props.row.admir_reply_Data
                    }}
                    )   
        }
        else
        {
            alert("Password를 다시 작성해 주십시오.");
        }
        
    }

    
    

    render(){
        var tmp = this.props.row.Customer_Name;
        var name_=tmp.replace(tmp.charAt(1),"*")
        var title_ ="";
        var else1="";
        var else2="";
        var else3="";
        var else4="";
        var else5="";

       
          title_ =   <div>
                        <Link onClick={this.handleClickOpen1.bind(this,1)} className="Link_Ctl">
                        {this.props.row.Question_title}
                        </Link>

                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <DialogTitle>Password</DialogTitle>

                            <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="userPassword"
                                label="Password"
                                type="Password"
                                fullWidth
                                variant="standard"
                                
                                value={this.state.Admir_Password} 
                                onChange={this.handlePasswrod}
                            />
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={this.password_check}>Enter</Button>
                                <Button onClick={this.handleClose}>Cancel</Button>
                            </DialogActions>

                        </Dialog>
                    </div>
                 
        

        if(this.props.row.reply === "x")
        {
            else1="";
            else2="";
            else3="";
            else4="";
            else5="";
        }
        else
        {
            else1=<tr><td className='Database_else1'>&nbsp;</td></tr>

            else2=<tr><td className='Database_else2'>
                    <Link onClick={this.handleClickOpen2.bind(this,2)} className="Link_Ctl">
                        ↳ 답변완료
                        </Link>

                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <DialogTitle>Password</DialogTitle>

                            <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="userPassword"
                                label="Password"
                                type="Password"
                                fullWidth
                                variant="standard"
                                
                                value={this.state.Admir_Password} 
                                onChange={this.handlePasswrod}
                            />
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={this.password_check}>Enter</Button>
                                <Button onClick={this.handleClose}>Cancel</Button>
                            </DialogActions>

                        </Dialog>
                    
                    </td></tr>

            else3=<tr><td className='Database_else3'>&nbsp;</td></tr>
            else4=<tr><td className='Database_else4'>&nbsp;</td></tr>
            else5=<tr><td className='Database_else5'>&nbsp;</td></tr>
        }
        
        

        return(
                <tr>
                    <td className="Database_no">
                        {this.props.index} 
                        {else1}
                    </td>
                
                    <td className="Database_title">       
                        {title_} 
                        {else2}
                    </td>

                    <td className="Database_name">
                        {name_}
                        {else3}
                    </td>            
                    
                    <td className="Database_date">
                        {this.props.row.date}
                        {else4}
                    </td>
                    
                    <td className="Database_reply">
                        {this.props.row.reply}
                        {else5}
                    </td>  
                </tr>   
        );
    }
}
export default withRouter(BoardItem);