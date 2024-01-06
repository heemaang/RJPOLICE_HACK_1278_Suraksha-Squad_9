import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isRegisterDropdownOpen, setRegisterDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setServicesDropdownOpen(false);
    setRegisterDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
    setRegisterDropdownOpen(false);
  };

  const toggleRegisterDropdown = () => {
    setRegisterDropdownOpen(!isRegisterDropdownOpen);
    setServicesDropdownOpen(false);
  };

  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <div className={`container mx-auto flex justify-between items-center ${isMobileMenuOpen ? 'flex-col' : 'lg:flex'}`}>
          <Link to="/" className="text-3xl font-extrabold text-indigo-600">
            1930 HelpLine.
          </Link>
          <button
            className="lg:hidden px-2 py-1 text-blue-700 border rounded border-blue-500"
            type="button"
            onClick={toggleMobileMenu}
          >
            Menu
          </button>
          <div className={`lg:flex space-x-12 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-blue-700">
              Home
            </Link>
            <Link to="/aboutus" className="text-blue-700">
              About Us
            </Link>
            <div className="group relative">
              <button
                className="text-blue-700 group-hover:bg-gray-200"
                onClick={toggleServicesDropdown}
              >
                Services
              </button>
              <div
                className={`${
                  isServicesDropdownOpen ? 'block' : 'hidden'
                } absolute bg-white rounded shadow-md mt-2`}
              >
                <Link to="/ai" className="block px-4 py-2 text-blue-500">
                  AI Legal Decision System
                </Link>
                <Link to="/connect-lawyer" className="block px-4 py-2 text-blue-500">
                  Connect me to a Lawyer
                </Link>
                <Link to="/book-appointment" className="block px-4 py-2 text-blue-500">
                  Book an Appointment
                </Link>
                <Link to="/helpdesk" className="block px-4 py-2 text-blue-500">
                  Connect to Helpdesk
                </Link>
              </div>
            </div>
            <Link to="/team" className="text-blue-500">
              Our Team
            </Link>
            <Link to="/blog" className="text-blue-500">
              Report a Cyber Fraud
            </Link>
          </div>
          <div className="group relative">
            <button className="text-white bg-blue-500 px-4 py-2 rounded" onClick={toggleRegisterDropdown}>
              Register
            </button>
            <div
              className={`${
                isRegisterDropdownOpen ? 'block' : 'hidden'
              } absolute bg-white rounded shadow-md mt-2`}
            >
              <Link to="/lawyerform" className="block px-4 py-2 text-blue-500">
                Lawyer
              </Link>
              <Link to="/login" className="block px-4 py-2 text-blue-500">
                User
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
