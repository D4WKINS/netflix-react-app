import {Container,Navbar,Nav} from 'react-bootstrap'
import {Component} from 'react'
import Card from './Card'

class NavBar extends Component {
    // state = {
    //     filteredMovies: []
    //   }
    //   filterMovies = (query) => {
    //     const newArray = this.props.data.filter(movie => this.state.query === '' ? true : data.Search.Title.toLowerCase().includes(query.toLowerCase()))
    //     this.setState({ filteredMovies: newArray})
    // console.log(filteredMovies)

    render() { 
        return ( 
            <Navbar style={{backgroundColor:"black"}} className="text-white pb-3"  expand="lg">
            <Container >
                <Navbar.Brand href="/">
                <img src="/assets/netflix_logo.png" id="logo" alt="logo" />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link style={{color:"white"}} href="/tv-shows">Home</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/tv-shows">Tv Shows</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/register">Movies</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/register">Recently Added</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/register">My List</Nav.Link>
                    </Nav>
        
                </Navbar.Collapse>
                <Nav className="ml-auto">
                        <input type="text" className="my-auto" style={{height:"35px"}} placeholder="search" onChange={(e) => this.filterMovies(e.target.value)}/>
                        <Nav.Link style={{color:"white"}} href="/kids">KIDS</Nav.Link>
                        <Nav.Link style={{color:"white"}} href="/account">
                            <img src="/assets/avatar.png" height="36px" id="avatar" alt="" />
                        </Nav.Link>
                    </Nav>
            </Container>
           
            </Navbar>
        )
    }
}
 
export default NavBar ;