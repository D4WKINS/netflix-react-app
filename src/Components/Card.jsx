import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import {Card } from 'react-bootstrap'



class MyCard extends Component {

    state = {
        movielist: [], // empty state
        chosenmovie: {}
        // isLoading: true,
        // isError: false
    }

   

    // what we want for our expensive operations is being able to call the ONCE
    // not only once, but also in a way that doesn't affect the speed of the app
    // the user experience

    componentDidMount = async () => {
        // this is a reserved method, a lifecycle one
        // this will be fired just ONCE, when the component is placed into the DOM
        // and it has finished the mounting process
        // after the INITIAL RENDER of the component
        console.log('COMPONENTDIDMOUNT')
        // componentDidMount is the PERFECT PLACE for our fetch
        // so here we're going to put our fetch()
        try {
            console.log(this.props.name)
            let response = await fetch(`http://www.omdbapi.com/?apikey=819d0c71&s=${this.props.name}`)
            // console.log(response)
            // this is happening AFTER the initial render invocation

            let data = await response.json() //converts our results to a json object
            // /a/ .json() is a method in charge of converting your response body into something usable in JS
            // console.log('RESERVATIONS', newReservations)

           console.log("Selected Movie", data.Search[0])
           let firstResult = data.Search[0]
            this.setState({chosenmovie: firstResult})
            
            
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

//   state = {
//       imgsrc: "https://via.placeholder.com/800x400"
//   }

  render() {
    return (
       <Card style={{ width: '12rem', margin:"0" }}>
            <Card.Img variant="top"  className="img-fluid h-100" src={this.state.chosenmovie.Poster}/>
            {/* <Card.Body>
                <Card.Title>{this.props.movietitle}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
            </Card>)
  }
}

export default MyCard
