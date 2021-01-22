import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          bgp_class: '',
          cur_country: '',
          cur_city: '',
          email: '',
          phone: '',
          grad_class: '',
          grad_dep: '',
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

        axios.post(`http://127.0.0.1:8000/member/api/create`,{
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
        if(!localStorage.getItem('token')){
            return <Redirect to='login'/>
        }
        return (
            <Container style={{ marginTop: '50px',}}>
                <Form>
                    <Form.Group controlId="formBasicUsername" style={{ width: '300px' }}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="懋中" name="username" value={this.state.username} onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                            
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="0000" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px' }}>
                        <Form.Label>Blue Gear Class</Form.Label>
                        <Form.Control type="text" placeholder="第八屆" name="bgp_class" value={this.state.bgp_class} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px' }}>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="巴西" name="cur_country" value={this.state.cur_country} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px' }}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="里約" name="cur_city" value={this.state.cur_city} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px' }}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="admin@nctu.edu.tw" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px' }}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="+886953679988" name="mobile" value={this.state.phone} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px' }}>
                        <Form.Label>Grad. Class</Form.Label>
                        <Form.Control type="text" placeholder="08級" name="grad_class" value={this.state.grad_class} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicGradClass" style={{ width: '300px', marginBottom: '25px', }}>
                        <Form.Label>Grad. Department</Form.Label>
                        <Form.Control type="text" placeholder="醫學系" name="grad_dep" value={this.state.grad_dep} onChange={this.onChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Save Profile Information
                    </Button>
                </Form>
            </Container>
        )
    }
}