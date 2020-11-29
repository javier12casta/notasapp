import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'

export default class home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <img
                    className="d-flex w-100" width={400} height={200}
                    src="Banner.JPG"
                    alt="First slide"
                />
            </div>
           
            
              )
    }
}
