
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { useState } from 'react'
import MovieSearchResults from './Components/MovieSearch.jsx'

function App() {
  
  const [query,setQuery] = useState("")

  const handleSearch = (query) =>{
    console.log(query)
    setQuery(query)
  }
  return (
     
      <div style={{backgroundColor:"black"}}>

      <NavBar search={(query) => handleSearch(query) }/>
      {query ? <MovieSearchResults searchQuery={query}/> : <Home/> }
      <Footer />
      </div>
    

  )

  }

export default App;
