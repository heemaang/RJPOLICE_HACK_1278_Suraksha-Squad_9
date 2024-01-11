import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isRegisterDropdownOpen, setRegisterDropdownOpen] = useState(false);


  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
    setRegisterDropdownOpen(false);
  };

  const toggleRegisterDropdown = () => {
    setRegisterDropdownOpen(!isRegisterDropdownOpen);
    setServicesDropdownOpen(false);
  };

  return (
    <>
    <div>
    
    <div className="container px-[147px] text-md text-white">
      <div className="flex items-center justify-between py-4">
        <div>
          <button className='font-extrabold text-xl'>1930 HELPLINE.</button>
        </div>

        <div className="hidden font-medium sm:flex gap-4 sm:items-center">
          <button className="mr-4">What is 1930 </button>
          <button onClick={toggleServicesDropdown} className="font-semibold mr-4">Services</button>
          <div
                className={`${
                  isServicesDropdownOpen ? 'block' : 'hidden'
                } absolute bg-white rounded shadow-md mt-60 ml-32 text-md`}
              >
                <Link to="/ai" className="block border hover:bg-gray-200 rounded-t-md px-4 py-2 text-blue-900">
                  Detect Fake Websites
                </Link>
                <Link to="/connect-lawyer" className="border block hover:bg-gray-200 px-4 py-2 text-blue-900">
                  Detect Illegal Credit Cards
                </Link>
                <Link to="/book-appointment" className="block border hover:bg-gray-200 px-4 py-2 text-blue-900">
                  Recover Frozen Funds
                </Link>
                <Link to="/helpdesk" className="block border hover:bg-gray-200 px-4 py-2 text-blue-900">
                  Connect me to a Lawyer
                </Link>
                <Link to="/helpdesk" className="block border hover:bg-gray-200 px-4 py-2 text-blue-900">
                  Connect me to Helpdesk
                </Link>
              </div>
          <button className="mr-4">Our Team</button>
          <button className="">Report Complaint</button>
        </div>

        <div className="hidden sm:flex sm:items-center">
          <Link to="/login" className="border border-indigo-800 rounded-md px-12 py-2 font-semibold mr-4">LOGIN</Link>
          <button onClick={toggleRegisterDropdown} className="font-semibold hover:bg-white border px-12 py-2 rounded-lg hover:text-blue-900">REGISTER</button>
          <div
              className={`${
                isRegisterDropdownOpen ? 'block' : 'hidden'
              } absolute bg-white rounded shadow-md mt-32 w-44 ml-44 text-blue-900 font-medium`}
            >
              <Link to="/lawyerform" className="block hover:bg-gray-100 px-4 py-2 hover:rounded-t-md text-blue-900">
                Lawyer
              </Link>
              <Link to="/login" className="block border hover:bg-gray-100 px-4 py-2 text-blue-900">
                User
              </Link>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
