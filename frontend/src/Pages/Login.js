import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          isSignedUp: false, // <-- initialize the signup state as false
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(event) {
        console.log(this.state.username)
        console.log(this.state.password)
        axios.post(`http://127.0.0.1:8000/authentication/api/token/`,{
            username: this.state.username,
            password: this.state.password,
        }).then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);
            if (res.status === 200) {
                this.setState({ isSignedUp: true }); // after signing up, set the state to true. This will trigger a re-render
            }
        }).catch(function (err){
            console.log(err)
        })
        event.preventDefault();
    }

    render() {
        
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = '/'/>;
        }
        return (
            <Container style={{ marginTop: '100px' }}>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Login
                    </Button>
                </Form>
            </Container>
        )
    }
}