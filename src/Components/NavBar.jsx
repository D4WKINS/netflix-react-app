import {Container, Navbar, Nav, FormGroup, FormControl, Button} from 'react-bootstrap'
import {Component} from 'react'
import './../App.css'
import { FaSearch } from 'react-icons/fa'

class NavBar extends Component {
    // state = {
    //     searchQuery:""
    //   }

      handleSearch = (query) =>{
          if(query.length > 2){
            this.props.search(query)
            console.log(query)
          }else if(query === ""){
              this.props.search(false)
          }
      }

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
                    <div className="searchBox">
                        <input className="searchInput"type="text" name="" placeholder="Search" onChange={(e) => this.handleSearch(e.target.value)}/>
                            <button className="searchButton" href="#">
                               <FaSearch style={{width:"1em"}}/>
                            </button>
                    </div>     
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