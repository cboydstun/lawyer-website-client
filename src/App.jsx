import React, { useState } from "react"; //Import for REACT
//Import Routes
import "./App.css";
import "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth.jsx";
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
import Divorce from "./components/Practice Area Pages/Divorce.jsx";
import FamilyLaw from "./components/Practice Area Pages/FamilyLaw.jsx";
import ChildCustody from "./components/Practice Area Pages/ChildCustody.jsx";
import CriminalLaw from "./components/Practice Area Pages/CriminalLaw.jsx";
import DomesticViolence from "./components/Practice Area Pages/DomesticViolence.jsx";
import DrugCrimes from "./components/Practice Area Pages/DrugCrimes.jsx";
import EquitableDistribution from "./components/Practice Area Pages/EquitableDistribution.jsx";
import Homicide from "./components/Practice Area Pages/Homicide.jsx";
import ProtectionOrders from "./components/Practice Area Pages/ProtectionOrders.jsx";
import TrafficViolations from "./components/Practice Area Pages/TrafficViolations.jsx";
import Adoption from "./components/Practice Area Pages/Adoption.jsx";
import Alimony from "./components/Practice Area Pages/Alimony.jsx";
import Assault from "./components/Practice Area Pages/Assault.jsx";
import CPS from "./components/Practice Area Pages/CPS.jsx";
import Juvenilelaw from "./components/Practice Area Pages/Juvenilelaw.jsx";

//Function for Navbar
function App() {
  const [sessionToken, setSessionToken] = useState("");
  const updateToken = (token) => {
    console.log("Token updated!");
    localStorage.setItem("token", token);
    setSessionToken(token);
  };

  const clearToken = () => {
    console.log("Token Removed!");
    setSessionToken("");
    localStorage.clear();
  };

  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: "65vh" }}>
          <Routes>
            {" "}
            {/*Establishing Routes*/}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/attorneyprofile" element={<Attorneyprofile />} />
            <Route path="/practiceareas" element={<PracticeArea />} />
            <Route path="/divorce" element={<Divorce />} />
            <Route path="/family-law" element={<FamilyLaw />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/alimony" element={<Alimony />} />
            <Route path="/assault" element={<Assault />} />
            <Route path="/child-custody" element={<ChildCustody />} />
            <Route path="/cps" element={<CPS />} />
            <Route path="/criminal-law" element={<CriminalLaw />} />
            <Route path="/domestic-violence" element={<DomesticViolence />} />
            <Route path="/drug-crimes" element={<DrugCrimes />} />
            <Route
              path="/equitable-distribution"
              element={<EquitableDistribution />}
            />
            <Route path="/juvenile-law" element={<Juvenilelaw />} />
            <Route path="/homicide" element={<Homicide />} />
            <Route path="/protection-orders" element={<ProtectionOrders />} />
            <Route path="/traffic-violations" element={<TrafficViolations />} />
            <Route path="/clienttestimonials" element={<ClienTestimonals />} />
            <Route path="/news" element={<News />} />
            <Route path="/ratingsandreviews" element={<RatingsandReviews />} />
            <Route path="/MapsandDirections" element={<MapsandDirections />} />
            <Route
              path="/SignUp"
              element={<Auth updateToken={updateToken} />}
            />
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
