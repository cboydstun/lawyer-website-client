//Importing the libraries for React
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button, Navbar as Nav, Dropdown } from "react-daisyui";
import MapsandDirections from "../components/MapsandDirections";
import RatingsandReviews from "../components/RatingsandReviews";
import News from "../components/News";
import ContactUs from "../components/ContactUs";

//Creating the functions for the Navbar
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate()

  return (
    <>
      <Nav
        className="bg-primary min-w-full w-screen max-w-screen"
        style={{ top: 0 }}
      >
        <div className="flex-none">
          <Button shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <Nav.Start>
          <Button tag="a" color="teal-900 h-5" className="normal-case text-xl">
            Jacqueline R. Kriebel
          </Button>
        </Nav.Start>
        <Nav.End>
          <div className="flex gap-2">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>

            <Link to="/about" className="nav-links" onClick={() => {(
              closeMobileMenu () 
              )}}>
              About
            </Link>
            <Link
              to="/attorneyprofile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Attorney Profile
            </Link>
            <Dropdown horizontal="left" vertical="bottom">
              <Link tag="label" tabIndex={0}>
                Practice Areas
              </Link>

              <Link
              to="/clienttestimonials"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Client Testimonials
            </Link>

              <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
                <Dropdown.Item onClick={() => { 
                  navigate ("/divorce")
                 } }>
                <Link to="/divorce">Divorce </Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/family-law")
                }}>
                <Link to="/family-law">Family Law</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/adoption")
                }}>
                  <Link to="/adoption"> Adoption</Link>
                </Dropdown.Item>
              
                <Dropdown.Item onClick={() => {
                  navigate ("/equitable-distribution")
                }}>
                <Link to="/equitable-distribution">Equitable Distribution</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/alimony")
                }}>
                  <Link to="/alimony">Alimony</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/protection-orders")
                }}>
                  <Link to="/protection-orders">Protection Orders</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/cps")
                }}>
                  <Link to="/cps">Department of Family and Protective Services</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/child-custody")
                }}> 
                  <Link to="/child-custody">Child Custody</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/criminal-law")
                }}>
                  <Link to="/criminal-law">Criminal Law</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/assault")
                }}>
                  <Link to="/assault">Assault</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/domestic-violence")
                }}>
                  <Link to="/domestic-violence">Domestic Violence</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/homicide")
                }}>
                  <Link to="/homicide">Homicide</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/traffic-violations")
                }}>
                  <Link to="/traffic-violations">Traffic Violations</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/drug-crimes")
                }}>
                  <Link to="/drug-crimes">Drug Crimes</Link>
                </Dropdown.Item>
              </Dropdown.Menu>  
            </Dropdown>

            <Dropdown horizontal="left" vertical="bottom">
              <Link tag="label" tabIndex={0}>
                More
              </Link>
              <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
                <Dropdown.Item onClick={() => {
                  navigate ("/news")
                }}> 
                  <Link to="/News">News</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/RatingsandReviews")
                }}>
                  <Link to="/RatingsandReviews">Ratings and Reviews</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/ContactUs")
                }}>
                  <Link to="/ContactUs">Contact Us</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  navigate ("/MapsandDirections")
                }}>
                  <Link to="/MapsandDirections">Maps and Directions</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Nav.End>
      </Nav>
    </>
  );
};

//Exporting the default Navbar
export default Navbar;
