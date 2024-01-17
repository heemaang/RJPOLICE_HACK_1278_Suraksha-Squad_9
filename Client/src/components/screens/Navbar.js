import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Navbar() {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isComplaintDropdownOpen, setComplaintDropdownOpen] = useState(false);
  

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };
  const toggleComplaintDropdown = () => {
    setComplaintDropdownOpen(!isComplaintDropdownOpen);
  };


  return (
    <>
    <div>
    
    <div className="container px-[147px] text-md text-white">
      <div className="flex items-center justify-between py-4">
        <div>
          <Link to='' className='font-extrabold text-xl'>1930 HELPLINE.</Link>
        </div>

        <div className="font-medium sm:flex gap-4 sm:items-center">
          <Link to='/cyber' className="mr-4">Cyber Insights</Link>
          <button onClick={toggleServicesDropdown} className="font-semibold mr-4">Services </button>
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
          <button onClick={toggleComplaintDropdown} className="">Complaint Hub</button>
          <div className={`${
                  isComplaintDropdownOpen ? 'block' : 'hidden'
                } absolute bg-white rounded shadow-md mt-32 ml-96 text-md`}>
                  <Link to="/ai" className="block border hover:bg-gray-200 rounded-t-md px-4 py-2 text-blue-900">
                  File a Complaint
                </Link>
                <Link to="/connect-lawyer" className="border block hover:bg-gray-200 px-4 py-2 text-blue-900">
                  File Anonymous Complaint
                </Link>
          </div>
        </div>

        <div className="hidden sm:flex sm:items-center">
          <Link to="/login" className="font-semibold hover:bg-white border px-12 py-2 rounded-lg hover:text-blue-900 mr-4">LOGIN / SIGN UP</Link>
          <Link to="/lawyerregister" className="font-semibold hover:bg-white border px-12 py-2 rounded-lg hover:text-blue-900">REGISTER as LAWYER</Link>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
