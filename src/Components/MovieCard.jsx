import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import {Card} from 'react-bootstrap'

class MovieCard extends Component {

    state = {
        movielist: [], // empty state
        chosenmovie: {},
        selected:false
        // isLoading: true,
        // isError: false   
    }

    // what we want for our expensive operations is being able to call the ONCE
    // not only once, but also in a way that doesn't affect the speed of the app
    // the user experience

    fetchHomeMovies= async()=>{
        let response = await fetch(`http://www.omdbapi.com/?apikey=819d0c71&s=${this.props.title}`)

        let data = await response.json() //converts our results to a json object

       console.log("Selected Movie", data.Search[0])
       let firstResult = data.Search[0]
        this.setState({chosenmovie: firstResult})
        
    }

    componentDidMount = () => {
        console.log('COMPONENTDIDMOUNT')
       if(this.props.img){
           console.log("Search movies display")
       }else{
        try {
            this.fetchHomeMovies()
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
            }
        }
    }
    componentDidUpdate =(prevProps)=>{
        if(this.props.img !== prevProps.img){

        }
    }
    movieSelected = (img, title) =>{
        console.log(img)
        console.log(title)
        this.setState({selected:!this.state.selected})
    }


  render() {
    return (
       <Card style={{ width: '15rem', margin:"0", border:"0"}} style={{border:this.state.selected ? "solid 2px red":"0"}} onClick={()=> this.props.img ? this.movieSelected(this.props.img,this.props.title) : this.movieSelected(this.state.chosenmovie.Poster,this.props.title)}>
            <Card.Img variant="top"  className="img-fluid h-100 shadow "  src={this.props.img? this.props.img : this.state.chosenmovie.Poster}/>
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

export default MovieCard
