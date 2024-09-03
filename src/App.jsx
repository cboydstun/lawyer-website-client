import "./App.css";
import "../../server/index.js";
import "./components/Navbar.jsx"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
  <>
  <h2>Website</h2>
 <Router>
  <Navbar/>
  <Routes>
    
    <Route path='/' exact/>
  </Routes>
  </Router>
  </>
)
}

export default App;
