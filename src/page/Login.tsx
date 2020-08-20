import React from 'react';
import './Login.css'
import {Form, Button} from 'react-bootstrap'
export default class Login extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    };
    componentDidMount(): void {
        this.state = {
            name: '',
            pwd: '',
            tel: ''
        };
    }

    handleClick () {
        console.log('111', this.state.name.current.value)
    };
    render() {
        return (
            <div className={'login-body'}>
                <div className={'login-content'}>
                    <h2>用户登录</h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="name"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>telephone</Form.Label>
                            <Form.Control placeholder="Telephone" />
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