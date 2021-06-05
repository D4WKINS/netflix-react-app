
import './App.css';
import MyGallery from './Components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Nav'
import Footer from './Components/Footer'

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
