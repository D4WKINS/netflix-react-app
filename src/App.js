import {BrowserRouter as Router,Switch,Route,Link, Redirect} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { useState } from 'react'
import MovieSearchResults from './Components/MovieSearch.jsx'
import MovieDetails from './Components/MovieDetails';

function App() {
  
  const [query,setQuery] = useState("")
  // const [selected,setSelected] = useState(false)

  const handleSearch = (query) =>{
    console.log(query)
    setQuery(query)
  }
  return (
     
      <div style={{backgroundColor:"black"}}>
<Router>
      <NavBar search={(query) => handleSearch(query) }/>
      <Route path="/" exact component={Home}/>
      <Route exact path="/results" render={(routerProps) => <MovieSearchResults {...routerProps} searchQuery={query}/>}/>
      {query ? <Redirect to="/results" /> : <Redirect to="/" /> }
      <Route exact path="/details" render={(routerProps) => <MovieDetails  {...routerProps} />} />
    
      <Footer />
      </Router>
      </div>
    

  )

  }

export default App;
