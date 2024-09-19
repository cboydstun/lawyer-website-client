import "./App.css";
import "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Attorneyprofile from "./components/Attorneyprofile.jsx";
import PracticeArea from "./components/PracticeArea.jsx";
import ClienTestimonals from "./components/ClientTestimonals.jsx";
import News from "./components/News.jsx";
import ContactUs from "./components/ContactUs.jsx";
import RatingsandReviews from "./components/RatingsandReviews.jsx";
import MapsandDirections from "./components/MapsandDirections.jsx";
import Divorce from "./components/Practice Area Pages/Divorce.jsx"
import FamilyLaw from "./components/Practice Area Pages/FamilyLaw.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: "65vh" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/attorneyprofile" element={<Attorneyprofile />} /> 
            <Route path="/practieareas" element={<PracticeArea />}   />
            <Route path="/divorce" element={<Divorce />} />
            <Route path="/family-law" element={<FamilyLaw />} />
            <Route path="/clienttestimonials" element={<ClienTestimonals />} />
            <Route path="/news" element={<News />} />
            <Route path="/ratingsandreviews" element={<RatingsandReviews />} />
            <Route path="/MapsandDirections" element={<MapsandDirections />} />
        </Routes>

          <div>
            <ContactUs />
          </div>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
