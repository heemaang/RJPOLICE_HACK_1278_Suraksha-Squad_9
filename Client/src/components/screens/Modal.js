import React, { useEffect, useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
import { Button } from "semantic-ui-react";
import { FaX } from "react-icons/fa6";
import axios from 'axios';

function Modal({ setPopUp }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();  // Use useNavigate hook
  const [lawyerData, setLawyerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem("yourTokenKey");

        if (!token) {
          // Handle the case where the token is not available
          setError("Token not found. Please log in.");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLawyerData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message || "An error occurred while fetching user data");
      }
    };

    fetchUserData();
  }, []);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleClick = () => {
    navigate("/ticketing");  // Use navigate with the correct route
  };


  return (
    <>
    {lawyerData && (
      <div className="w-screen h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-center items-center">
        <div className="bg-white h-[70%] w-[80%] rounded-md shadow-md mb-20">
          <div className="flex justify-between px-5">
            <FaX
              className="mt-3 cursor-pointer"
              onClick={() => setPopUp(false)}
              color="darkblue"
            />
          </div>
          <h1 className="font-bold text-blue-900 mb-4 text-center text-2xl my-3">
            Connect to Best Lawyers for Cyber Support
          </h1>
        
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="grid grid-cols-3 mb-4 mx-5 h-[80%] gap-4">
                <Link className="w-full bg-white shadow rounded-md ">
                  <div>
                    <img src="/images/main.svg" alt="" />
                  </div>
                  <p className="text-2xl text-blue-900 font-bold flex justify-center">
                    Mr. <span> John Delecki</span>
                  </p>
                  <p className="text-xl mb-4 text-blue-900 font-bold flex justify-center">
                    Corporate Law
                  </p>
                  <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md">
                    Connect Now
                  </Button>
                </Link>
                <Link className="w-full bg-white shadow rounded-md ">
                  <div>
                    <img src="/images/main.svg" alt="" />
                  </div>
                  <p className="text-2xl text-blue-900 font-bold flex justify-center">
                    Mr. <span> John Delecki</span>
                  </p>
                  <p className="text-xl mb-4 text-blue-900 font-bold flex justify-center">
                    Corporate Law
                  </p>
                  <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md" onClick={ handleClick}>
                    Connect Now
                  </Button>
                </Link>
                <Link className="w-full bg-white shadow rounded-md ">
                  <div>
                    <img src="/images/main.svg" alt="" />
                  </div>
                  <p className="text-2xl text-blue-900 font-bold flex justify-center">
                    Mr. <span> John Delecki</span>
                  </p>
                  <p className="text-xl mb-4 text-blue-900 font-bold flex justify-center">
                    Corporate Law
                  </p>
                  <Button className="bg-blue-900 mb-3 w-[80%] text-white mx-9 flex justify-center blue-900 p-3 rounded-md"onClick={ handleClick}>
                    Connect Now
                  </Button>
                </Link>
              </div>
            </Carousel.Item>
          
            
          </Carousel>
        </div>
      </div>
    )}
    </>
  );
}

export default Modal;
