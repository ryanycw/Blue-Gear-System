import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container, Col } from 'react-bootstrap'
const axios = require('axios')

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          isSignedUp: false, // <-- initialize the signup state as false
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    handleSubmit(event) {
        console.log(this.state.first_name)
        console.log(this.state.last_name)
        console.log(this.state.email)
        console.log(this.state.password)
        axios.post('http://127.0.0.1:8000/authentication/api/register',{
            username: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }).then((res) => {
            console.log(res)
            /*localStorage.setItem('token', res.data.access);
            localStorage.setItem('user', res.config.data);*/
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
            return <Redirect to = '/login'/>;
        }
        return (
            <Container style={{ marginTop: '100px',}}>
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} xs="3" controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group as={Col} xs="3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} xs="6" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group as={Col} xs="6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }
}