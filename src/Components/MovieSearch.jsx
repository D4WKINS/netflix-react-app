import {Component} from 'react'
import MovieCard from './MovieCard'
import {Container, Row, Col} from 'react-bootstrap'
import Heading from './Heading'
import './../App.css'
class MovieSearchResults extends Component {
   
    state={
        results:[]
    }

    // handleSearchResults =(searchresults)=>{
    //     this.setState({results:searchresults})
    //     console.log(this.state.results)
    // }

 
    fetchMoviesBySearch = async() =>{
        console.log(this.props.searchQuery)
        let response = await fetch(`http://www.omdbapi.com/?apikey=819d0c71&s=${this.props.searchQuery}`)
        let data = await response.json()
        console.log(data)
            this.setState({results:data.Search})
           console.log(this.state.results)
    }
    componentDidMount = async () => {
       
        console.log(this.props.searchQuery)
        try {
            this.fetchMoviesBySearch()
        } catch (error) {
            console.log(error)
        }
    }

    componentDidUpdate = (prevProps,prevState) =>{
        if(this.props.searchQuery !== prevProps.searchQuery){
            this.fetchMoviesBySearch()
            console.log("Props change detected")
        }
    }


    render() { 
        return (  
            <Container style={{minHeight:"100vh"}}>
                {/* {this.state.selected && <MovieDetails/>} */}
                <Heading text={`Results For: ${this.props.searchQuery}`}/>
            <Row>
            <Heading text={this.state.results && "Movies"}/>
                {this.state.results? this.state.results.filter(movies => !movies.Poster.includes("N/A") && movies.Type.includes("movie") ).map((movie) =>
                    <Col xs={3} md={3} lg={2} className="d-flex movieCard my-4 justify-content-center">
                    <MovieCard title={movie.Title} img={movie.Poster}/>
                  </Col>
                ): console.log(`No sir! not me! - Rick Ross`)}
            </Row>
            <Row>
            <Heading text={this.state.results && "Series"}/>
                {this.state.results? this.state.results.filter(movies => !movies.Poster.includes("N/A") && movies.Type.includes("series")).map((movie) =>
                    <Col xs={3} md={3} lg={2} className="d-flex  my-4 justify-content-center">
                    <MovieCard title={movie.Title} img={movie.Poster}/>
                  </Col>
                ): console.log(`No sir! not me! - Rick Ross`)}
            </Row>
            </Container>
        );
    }
}
 
export default MovieSearchResults;