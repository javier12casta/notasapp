import React, { useState, } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//paginas import App from './../App';
import { useHistory } from "react-router-dom";

import {BrowserRouter as Router,Switch,Route,Link,Redirect, withRouter} from "react-router-dom";
import { Card } from "react-bootstrap";

export default function register() {


    return (
       <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card my-5">                    
                        <div className="card-body">
                            <h5 className="card-title text-center">Registrar</h5>
                               <Form>
                                <Form.Group controlId="password">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="text"
                                       
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="text"
                                       
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="email"
                                       
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="password"
                                       
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="text"
                                       
                                    />
                                </Form.Group>                              
                                <Form.Group controlId="password">
                                    <Form.Label>Pais</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="text"
                                       
                                    />
                                </Form.Group> 
                        
                                <Button block size="lg" type="submit">
                                    Registrar                                                                                              
                                </Button>
                                
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
