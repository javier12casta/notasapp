import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class home extends Component {
    render() {
        return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"  width={500} height={300}
      src="https://themidnightgazette.files.wordpress.com/2016/03/game-of-thrones-s-4-banner.jpg?w=1060"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" width={500} height={300}
      src="https://themidnightgazette.files.wordpress.com/2016/03/game-of-thrones-s-4-banner.jpg?w=1060"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" width={500} height={300}
      src="https://themidnightgazette.files.wordpress.com/2016/03/game-of-thrones-s-4-banner.jpg?w=1060"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}
