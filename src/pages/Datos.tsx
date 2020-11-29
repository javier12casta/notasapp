import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Datos() {

    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [pais, setPais] = useState("");

    let history = useHistory();

    function validateForm() {
        return nombres.length > 0 && apellidos.length > 0 && correo.length > 0 && correo.length > 0 && direccion.length > 0 && pais.length > 0;
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
                            <h5 className="card-title text-center">Datos Usuario</h5>
                           
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nombres">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        autoFocus
                                        type="nombres"
                                        value={nombres}
                                        onChange={(e) => setNombres(e.target.value)}  
                                    />
                                </Form.Group>

                                <Form.Group controlId="apellidos">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control
                                        size="lg"                                         
                                        type="apellidos"
                                        value={apellidos}
                                        onChange={(e) => setApellidos(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        size="lg"                                         
                                        type="correo"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="direccion">
                                    <Form.Label>Direcccion</Form.Label>
                                    <Form.Control
                                        size="lg"                                         
                                        type="direccion"
                                        value={direccion}
                                        onChange={(e) => setDireccion(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="pais">
                                    <Form.Label>Pais</Form.Label>
                                    <Form.Control
                                        size="lg"                                         
                                        type="pais"
                                        value={pais}
                                        onChange={(e) => setPais(e.target.value)}
                                    />
                                </Form.Group>

                                <Button block size="lg" type="submit" disabled={!validateForm()} color="green">
                                    Volver                                                                                             
                                </Button>

                                </Form>
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
