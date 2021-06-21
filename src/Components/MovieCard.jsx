import React, { Component, } from 'react';
import {withRouter} from 'react-router-dom'
import {Card} from 'react-bootstrap'

class MovieCard extends Component {

    state = {
        movielist: [], // empty state
        singleMovie: {},
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
        this.setState({singleMovie: firstResult})
        
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
            }
        }
    }
    componentDidUpdate =(prevProps)=>{
        if(this.props.img !== prevProps.img){
            console.log("Props Change")
        } 
    }
    movieSelected = (Movie) =>{
            this.setState({selected:!this.state.selected})
            console.log(Movie) 
    }


  render() {
    return (
       <div onClick={()=> this.props.movie ? this.movieSelected(this.props.movie) : this.movieSelected(this.state.singleMovie)}>
       <Card style={{ width: '15rem', margin:"0", border:"0"}} style={{border:this.state.selected ? "solid 2px red":"0"}} >
            <Card.Img variant="top"  className="img-fluid h-100 shadow "  src={this.props.movie? this.props.movie.Poster : this.state.singleMovie.Poster}/>
            </Card>
            </div>)
  }
}

export default withRouter(MovieCard)
