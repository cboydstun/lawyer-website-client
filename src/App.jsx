import "./App.css";
import "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx"
import Attorneyprofile from "./components/Attorneyprofile.jsx"
import PracticeArea from "./components/PracticeArea.jsx";
import ClienTestimonals from "./components/ClientTestimonals.jsx"
import More from "./components/More.jsx"


function App() {
  return (

  <>
 <Router>
  <Navbar/>
  <div style={{minHeight:"65vh"}}>
  <Routes>
    <Route path='/home' element={<Home/>}/>
  </Routes>
    <Routes>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Routes>
    <Route path='/attorneyprofile' element={<Attorneyprofile/>}/>
    </Routes>

    <Routes>
    <Route path= '/practieareas' element={<PracticeArea/>}/>
    </Routes>

 <Routes>
    <Route path= '/clienttestimonials' element={<ClienTestimonals/>}/>
    </Routes>
    <Routes>
    <Route path= '/more' element={<More/>}/>
    </Routes>
  
  </div>

  <Footer/>
  </Router>
  
  </>
)
}

export default App;
