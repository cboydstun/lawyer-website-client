import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar as Nav, Dropdown, Avatar } from "react-daisyui";
import LogoImage from "../assets/kriebellaw.png";

const Navbar = ({ user }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  return (
    <Nav className="bg-red-900 shadow-lg fixed top-0 z-50 px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            shape="square"
            color="ghost"
            className="hover:bg-red-800 transition-colors"
          >
            <Avatar
              shape="circle"
              size="sm"
              src={LogoImage}
              className=" border-gray-200"
            />
          </Button>

          <div className="flex flex-col">
            <div
              className="normal-case text-xl font-serif text-white hover:bg-red-800 transition-colors"
            >
              Jacqueline R. Kriebel
            </div>
          </div>
        </div>

        <Nav.End className="hidden lg:flex items-center space-x-6">
          <Link
            to="/home"
            className="text-white hover:text-yellow-300 transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition-colors"
            onClick={closeMobileMenu}
          >
            About
          </Link>

          <Link
            to="/attorneyprofile"
            className="text-white hover:text-yellow-300 transition-colors"
            onClick={closeMobileMenu}
          >
            Attorney Profile
          </Link>

          <Dropdown horizontal="left" vertical="bottom">
            <Link
              tag="label"
              tabIndex={0}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
            >
              Practice Areas
            </Link>

            <Dropdown.Menu className="menu bg-white shadow-xl rounded-lg p-2 w-64 mt-4">
              {[
                { path: "/divorce", label: "Divorce" },
                { path: "/family-law", label: "Family Law" },
                { path: "/adoption", label: "Adoption" },
                { path: "/equitable-distribution", label: "Equitable Distribution" },
                { path: "/alimony", label: "Alimony" },
                { path: "/protection-orders", label: "Protection Orders" },
                { path: "/cps", label: "Department of Family and Protective Services" },
                { path: "/child-custody", label: "Child Custody" },
                { path: "/criminal-law", label: "Criminal Law" },
                { path: "/assault", label: "Assault" },
                { path: "/domestic-violence", label: "Domestic Violence" },
                { path: "/homicide", label: "Homicide" },
                { path: "/traffic-violations", label: "Traffic Violations" },
                { path: "/drug-crimes", label: "Drug Crimes" },
                { path: "/juvenile-law", label: "Juvenile Law" }
              ].map((item) => (
                <Dropdown.Item
                  key={item.path}
                  className="hover:bg-red-50"
                  onClick={() => {
                    navigate(item.path);
                    closeMobileMenu();
                  }}
                >
                  <Link to={item.path} className="text-gray-700 hover:text-red-900">
                    {item.label}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Link
            to="/clienttestimonials"
            className="text-white hover:text-yellow-300 transition-colors"
            onClick={closeMobileMenu}
          >
            Client Testimonials
          </Link>

          <Dropdown horizontal="left" vertical="bottom">
            <Link
              tag="label"
              tabIndex={0}
              className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
            >
              More
            </Link>
            <Dropdown.Menu className="menu bg-white shadow-xl rounded-lg p-2 w-48 mt-4">
              {[
                { path: "/news", label: "News" },
                { path: "/RatingsandReviews", label: "Ratings and Reviews" },
                { path: "/ContactUs", label: "Contact Us" },
                { path: "/MapsandDirections", label: "Maps and Directions" },
                // { path: "/SignUp", label: "Sign Up" }
              ].map((item) => (
                <Dropdown.Item
                  key={item.path}
                  className="hover:bg-red-50"
                  onClick={() => {
                    navigate(item.path);
                    closeMobileMenu();
                  }}
                >
                  <Link to={item.path} className="text-gray-700 hover:text-red-900">
                    {item.label}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav.End>

        {/* Mobile menu button */}
        <Button
          className="lg:hidden hover:bg-red-800"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {click ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile menu */}
      {click && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-red-900 shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/home"
              className="text-white hover:text-yellow-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              to="/attorneyprofile"
              className="text-white hover:text-yellow-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Attorney Profile
            </Link>
            <Link
              to="/clienttestimonials"
              className="text-white hover:text-yellow-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Client Testimonials
            </Link>
          </div>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
