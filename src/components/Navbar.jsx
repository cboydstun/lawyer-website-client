//Importing the libraries for React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button, Navbar as Nav } from "react-daisyui";

//Creating the functions for the Navbar
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <Nav className="bg-primary min-w-full w-screen" style={{ top: 0 }}>
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

            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
            <Link
              to="/attorneyprofile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Attorney Profile
            </Link>
            <Link
              to="/practieareas"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Practice Areas
            </Link>
            <Link
              to="/clienttestimonials"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Client Testimonials
            </Link>
            <Link to="/more" className="nav-links" onClick={closeMobileMenu}>
              More
            </Link>
          </div>
        </Nav.End>
      </Nav>
    </>
  );
};

//Exporting the default Navbar
export default Navbar;
