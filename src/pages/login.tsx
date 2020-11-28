import React, { useState, } from "react";
import './login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//paginas import App from './../App';
import { useHistory } from "react-router-dom";

import {BrowserRouter as Router,Switch,Route,Link,Redirect, withRouter} from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);

    let history = useHistory();
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        history.push('/');     
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="password">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        size="lg"                                         
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button block size="lg" type="submit" disabled={!validateForm()}>
                                    Login                                                                                               
                                </Button>
                                
                            </Form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}