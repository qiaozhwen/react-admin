import React, {FC, useState} from 'react';
import './Login.css';
import {createForm} from "rc-form";
import {Form, Button} from 'react-bootstrap';
import loginFnc from '../api/login'
import {withRouter} from "react-router-dom";
const Login: FC<any> = ({
form: {getFieldDecorator, validateFields},
history
}: any) => {
    const [loginStatus, setLoginStatus] = useState(false);
    function handleClick() {
        validateFields((_err: any, value: any)=>{
            if(!_err){
                const {name, password, telephone} = value;
                loginFnc.login({username: name, password, telephone}).then((res: any)=>{
                    history.push('/app')
                }).catch((err: any)=>{
                    setLoginStatus(true)
                })
            }
        })
    }
     return(
         <div className={'login-body'}>
             <div className={'login-content'}>
                 <div style={{textAlign: "center"}}>
                     <h3>登录</h3>
                 </div>
                 <Form>
                     {getFieldDecorator('name', {
                         initValue: ''
                     })(
                         <Form.Group controlId="formBasicEmail">
                             <Form.Label>Name</Form.Label>
                             <Form.Control type="name" placeholder="name"/>
                         </Form.Group>
                     )}
                     {
                         getFieldDecorator('password', {
                             initValue: ''
                         })(
                             <Form.Group controlId="formBasicPassword">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" placeholder="Password"/>
                             </Form.Group>
                         )
                     }
                     {
                         getFieldDecorator('telephone', {
                             initValue: ''
                         })(
                             <Form.Group controlId="formBasicPassword">
                                 <Form.Label>telephone</Form.Label>
                                 <Form.Control placeholder="Telephone" />
                             </Form.Group>
                         )
                     }
                     <div style={{textAlign: "center"}}>
                         <Button variant="primary" type="submit" onClick={(event) => {event.preventDefault();handleClick()}}>
                             Submit
                         </Button>
                     </div>
                 </Form>
             </div>
         </div>
     )
};
export default createForm()(Login)