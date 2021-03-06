import React, { Component } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import { Carousel, Row, Col, Container } from 'react-bootstrap'

import MyCard from './Card'


class MyGallery extends Component {

    

  render() {
    return (
    //   <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
    //     <div style={ MyGallery.CARD_STYLE }>
    //       First Card
    //     </div>
    //     <div style={ MyGallery.CARD_STYLE }>
    //       Second Card
    //     </div>
    //     <div style={ MyGallery.CARD_STYLE }>
    //       Third Card
    //     </div>
    //     <div style={ MyGallery.CARD_STYLE }>
    //       Fourth Card
    //     </div>
    //     <div style={ MyGallery.CARD_STYLE }>
    //       Fifth Card
    //     </div>
    //   </ReactCardCarousel>
<Container >
    <Carousel className="my-5">
      
  <Carousel.Item>
  <Row >
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">

    <MyCard name="the good place"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="harry potter"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="die hard"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="luther"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="fast and furious"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="unhinged"/>
    </Col>
    
    </Row>

  </Carousel.Item>
  <Carousel.Item>
  <Row >
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    
    <MyCard name="the flight"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="karate kid"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="princess and the frog"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="lion king"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="love actually"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MyCard name="frozen"/>
    </Col>
    
    </Row>

  </Carousel.Item>
  
  {/* <Carousel.Item>
  <Row>
      
 

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
 
  </Carousel.Item> */}

  
</Carousel>
<Carousel className="my-5">
      
      <Carousel.Item>
      <Row >
            <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        
        <MyCard name="coco"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="the blacklist"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="how i met your mother"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="brooklyn nine"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="fresh prince"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="black mirror"/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
      <Carousel.Item>
      <Row >
            <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        
        <MyCard name="when they see us"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="dead to me"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="black panther"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="black lightening"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="comedians of the world"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="the last czar"/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
      
      {/* <Carousel.Item>
      <Row>
          
     
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
     
      </Carousel.Item> */}
    
      
    </Carousel>
    <Carousel className="my-5">
      
      <Carousel.Item>
      <Row>
            <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        
        <MyCard name="stranger things"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="david letterman"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="money heist"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="good girl"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="dave chappelle"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="the bird dave chappelle "/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
      <Carousel.Item>
      <Row >
            <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        
        <MyCard name="the it crowd"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="tales of the city"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="the standups"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center">
        <MyCard name="kevin hart"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="the wood"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MyCard name="candyman"/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
      
      {/* <Carousel.Item>
      <Row>
          
     
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
     
      </Carousel.Item> */}
    
      
    </Carousel>
</Container>
    );
  }
}

export default MyGallery;