import React, { Component, } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
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
    componentDidUpdate =(prevProps,prevState)=>{
        if(this.props.img !== prevProps.img){
            console.log("Props Change")
        } else if(this.state.selected !== prevState.selected){

        }
    }
    movieSelected = (img, title) =>{
       
        if(this.state.selected === true){
            this.setState({selected:!this.state.selected})
        }else if(this.state.selected === false){
            this.setState({selected:!this.state.selected})
            console.log(img)
            console.log(title)
        }
          
    }


  render() {
    return (
       <Link to="/details">
       <Card style={{ width: '15rem', margin:"0", border:"0"}} style={{border:this.state.selected ? "solid 2px red":"0"}} onClick={()=> this.props.img ? this.movieSelected(this.props.img,this.props.title) : this.movieSelected(this.state.chosenmovie.Poster,this.props.title)}>
            <Card.Img variant="top"  className="img-fluid h-100 shadow "  src={this.props.img? this.props.img : this.state.chosenmovie.Poster}/>
            </Card>
            </Link>)
        
  }
}

export default MovieCard
