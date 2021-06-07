
import './App.css';
import MyGallery from './Components/Gallery.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Nav'
import Footer from './Components/Footer'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faSearch, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faRocket, faSearch, faThumbsUp, faThumbsDown)


function App() {
  
  return (
     
      <div style={{backgroundColor:"black"}}>
      <NavBar/>
      <MyGallery/>
      <Footer />
      </div>
    

  )

  }

export default App;
