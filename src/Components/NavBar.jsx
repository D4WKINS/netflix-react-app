import {Container, Navbar, Nav, FormGroup, FormControl, Button} from 'react-bootstrap'
import {Component} from 'react'
import { withRouter, Link} from 'react-router-dom'
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
                <Link to="/"> <img src="/assets/netflix_logo.png" id="logo" alt="logo" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className="nav-link" style={{color:"white"}} to="/">Home</Link>
                        <Link className="nav-link" style={{color:"white"}} to="/">Tv Shows</Link>
                        <Link className="nav-link" style={{color:"white"}} to="/">Movies</Link>
                        <Link className="nav-link" style={{color:"white"}} to="/">Recently Added</Link>
                        <Link className="nav-link" style={{color:"white"}} to="/">My List</Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                    <div className="searchBox">
                        <input className="searchInput"type="text" name="" placeholder="Search" onChange={(e) => this.handleSearch(e.target.value)}/>
                            <button className="searchButton" href="#">
                               <FaSearch style={{width:"1em"}}/>
                            </button>
                    </div>     
                        <Link className="nav-link" style={{color:"white"}} to="/">KIDS</Link>
                        <Link style={{color:"white"}} to="/">
                            <img src="/assets/avatar.png" height="36px" id="avatar" alt="" />
                        </Link>
                    </Nav>
            </Container>
            </Navbar>
        )
    }
}
 
export default withRouter(NavBar) ;