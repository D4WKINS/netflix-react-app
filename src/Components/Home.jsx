import React, { Component } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import { Carousel, Row, Col, Container,Card} from 'react-bootstrap'
import MovieCard from './MovieCard'
import Heading from './Heading'
import './../App.css'
  // categories: ["Trending Now", "Watch it again", "New Again","Continue Watching"]
class Home extends Component {

  state={
    selected:false
  }

  render() {
    return (
    //   <ReactCardCarousel >
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
    <>
<Container >
   <Heading text="Trending Now"/>
    <Carousel className="mb-2" autoplay={ true } autoplay_speed={ 2500 }>
     
  <Carousel.Item>
  <Row>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center">
      <MovieCard title="the good place"/>
    </Col>

    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
      <MovieCard title="harry potter"/>
    </Col>

    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
      <MovieCard title="die hard"/>
    </Col>

    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
      <MovieCard title="luther"/>
    </Col>

    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
      <MovieCard title="Joker"/>
    </Col>

    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
      <MovieCard title="Moana"/>
    </Col>
    
    </Row>

  </Carousel.Item>
  
 
  <Carousel.Item>
  <Row >
      <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MovieCard title="the flight"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MovieCard title="karate kid"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MovieCard title="princess and the frog"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MovieCard title="lion king"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MovieCard title="love actually"/>
    </Col>
    <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
    <MovieCard title="frozen"/>
    </Col>
    
    </Row>

  </Carousel.Item>
 
</Carousel>
</Container>

<Container >
<Heading text="Watch it again"/>
<Carousel className="mb-2" >
      
      <Carousel.Item>
      <Row >
            <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MovieCard  title="coco"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MovieCard  title="the blacklist"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MovieCard   title="You"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MovieCard  title="coco" />
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
        <MovieCard  title="fresh prince"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center" >
        <MovieCard   title="black mirror"/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
      <Carousel.Item>
      <Row>
        <Col xm={12} md={3} lg={2} className="d-flex  justify-content-center ">
          <MovieCard title="when they see us"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="dead to me"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="black panther"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="Guardians of the galaxy"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="Afro samurai"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="Seven Pounds"/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
    
      
    </Carousel>
    </Container>

    <Container>
    <Heading text="New Releases"/>
    <Carousel className="mb-2">
      
      <Carousel.Item>
      <Row>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="stranger things"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="david letterman"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="money heist"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="good girl"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="dave chappelle"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="the bird dave chappelle "/>
        </Col>
        
        </Row>
    
      </Carousel.Item>
      <Carousel.Item>
      <Row>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="the it crowd"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="tales of the city"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="the standups"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center">
          <MovieCard title="kevin hart"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="the wood"/>
        </Col>
        <Col xm={12} md={3} lg={2} className="d-flex justify-content-center ">
          <MovieCard title="candyman"/>
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
</>
    );
  }
}

export default Home;