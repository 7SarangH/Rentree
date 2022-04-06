import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Carousel} from 'react-bootstrap';
import "./Carousel.css";


function Images(){

return(
    <div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
     
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 h-80"
      src = "https://images.pexels.com/photos/7915266/pexels-photo-7915266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-60"
      src="https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
	);
}

export default Images;
