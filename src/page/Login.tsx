import React from 'react';
import './Login.css'
import {Form, Button} from 'react-bootstrap'
export default class Login extends React.Component {
    handleClick () {};
    render() {
        return (
            <div className={'login-body'}>
                <div className={'login-content'}>
                    <h2>用户登录</h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => {this.handleClick()}}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}