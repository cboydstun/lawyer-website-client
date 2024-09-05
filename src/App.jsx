import "./App.css";
import "../../server/index.js";
import "./components/Navbar.jsx"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";

function App() {
  return (
  <>

 <Router>
  <Navbar/>
  <HeroSection/>
  <Routes>
    <Route path='/' exact/>
  </Routes>
  </Router>

  </>
)
}

export default App;
