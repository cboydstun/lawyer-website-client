import "./App.css";
import "../../server/index.js";
import "./components/Navbar.jsx"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
  <>
 <Router>
  <Navbar/>
  <div style={{minHeight:"65vh"}}>
  <HeroSection/>
  
  
  <Routes>
    <Route path='/' exact/>
  </Routes>
  </div>
  <Footer/>
  </Router>
  
  </>
)
}

export default App;
