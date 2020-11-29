import React, { useState, } from "react";
import './login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//paginas import App from './../App';
import { useHistory } from "react-router-dom";

import {BrowserRouter as Router,Switch,Route,Link,Redirect, withRouter} from "react-router-dom";
import { Card } from "react-bootstrap";
import Service from '../services/user.service';

export interface user {
    nombres: String,
    apellidos: String,
    correo: String,
    direccion: String,
    pais: String,
    password: String,
    address: String,
    privatekey: String,
    publickey: String
}
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);
    datos();

    let history = useHistory();
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        history.push('/');     
    }

    function datos (){
        let data = Service.getAll();
        console.log(data);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card my-5">
                        <Card.Img src="Logo.png" width={250} height={400}/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                               <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="email">
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
                                <Button variant="success" block size="lg" type="submit" disabled={!validateForm()}>
                                    Login                                                                                               
                                </Button>
                                
                            </Form>
                             <br/>
                             <br/>                          
                            <li className="centro">
                                <Link to="/register">Registrarse</Link>
                            </li>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}