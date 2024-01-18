// FrozenFunds.js
import React, { useState, props, useEffect } from "react";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
const API_URL = "http://localhost:5000/api/users/FrozenFundsEntry";

function FrozenFunds() {
  const navigate = useNavigate();
  const [lawyerData, setLawyerData] = useState(null);
  const [error, setError] = useState(null);
  const [isTokenGenerated, setIsTokenGenerated] = useState(false);

  const [fundsData, setfundsData] = useState({
    name: "",
    email: "",
    aadhaarCardNumber: "",
    panCardNumber: "",
    majorIssueDomains: "",
    AccountNumber: "",
    AccountHolder: "",
    IFSCcode: "",
    Mobile: "",
    FraudAmount: "",
    evidence: [],
    City: "",
    Pincode: "",
    Locality: "",
    LandMark: "",
    FullAddress: "",
  });

  const [token, setToken] = useState("");

  const handleInputChange = (e) => {
    setfundsData({
      ...fundsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, fundsData);

      console.log("Response:", response);

      if (response.status === 201) {
        const data = response.data;
        console.log("Data:", data);

        // Save the token securely (e.g., in local storage)
        localStorage.setItem("yourTokenKey", data.token);

        // Redirect to the dashboard or any other page after successful registration
        navigate("/");
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error response:", error.response); // Log the error response
    }
  };
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

  //const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("File Read Result:", reader.result);
        setfundsData({
          ...fundsData,
          evidence: file, // Save the actual file object
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleGenerateTokenClick = () => {
    setIsTokenGenerated(true);
  };
  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-2xl h-[100px] z-10 relative">
        <div>
          <Navbar2 />
        </div>
        <img className="px-3 mt-9" src="/images/divider.svg" alt="" />

        <form
          className="bg-white p-14 shadow-lg m-12 border-1"
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <div>
            <div className="flex flex-row gap-4">
              <div className="w-[50%]">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  value={fundsData.name}
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  value={fundsData.email}
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-[25px]">
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Aadhaar Card Number
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your Aadhaar Card no."
                  value={fundsData.aadhaarCardNumber}
                  type="text"
                  name="aadhaarCardNumber"
                  id="aadhaarCardNumber"
                />
              </div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  PAN Card Number
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your PAN Card no."
                  value={fundsData.panCardNumber}
                  type="text"
                  name="panCardNumber"
                  id="panCardNumber"
                />
              </div>
            </div>
            <div className="w-full mt-[25px]">
              <label className="text-gray-700 text-sm font-bold mb-2">
                Major Issue Domains
              </label>
              <select
                className="border p-2 rounded-lg w-full text-gray-500"
                onChange={handleInputChange}
                name="majorIssueDomains"
                id="majorIssueDomains"
                value={fundsData.majorIssueDomains}
              >
                <option value="">
                  Select your Major Issues from the selected domains
                </option>
                <option value="d">df gfgdbg</option>
                <option value="d2">df gfgdbg</option>
                <option value="d3">df gfgdbg</option>
                <option value="d4">df gfgdbg</option>
              </select>
            </div>
            <div className="flex flex-row gap-4 mt-[25px]">
              <div className="w-[50%]">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Your Account Number
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your Account Number."
                  value={fundsData.AccountNumber}
                  type="text"
                  name="AccountNumber"
                  id="AccountNumber"
                />
              </div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Your IFSC code
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your IFSC code."
                  value={fundsData.IFSCcode}
                  type="text"
                  name="IFSCcode"
                  id="IFSCcode"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-[25px]">
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Account Holder name
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter Name of the account Holder"
                  value={fundsData.AccountHolder}
                  type="text"
                  name="AccountHolder"
                  id="AccountHolder"
                />
              </div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Your Mobile Number
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your Mobile Number"
                  value={fundsData.Mobile}
                  type="text"
                  name="Mobile"
                  id="Mobile"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-[25px]">
              <div className="w-50"></div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Enter the Fraud Amount
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter the Amount you have been Frauded with"
                  value={fundsData.FraudAmount}
                  type="text"
                  name="FraudAmount"
                  id="FraudAmount"
                />
              </div>
            </div>

            {/* Upload Image */}

            <div className="mt-[25px] border-2 border-dashed border-gray-400 p-4">
              <h2 className="text-gray-700 text-md font-bold mb-2">
                Upload all of Your Evidences
              </h2>

              <div className="flex items-center justify-center">
                <label className="bg-white border-2 border-dashed border-gray-400 rounded-md cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                    name="pdfFile"
                  />
                  <div className="p-8">
                    {fundsData.evidence ? (
                      <p className="text-gray-500">
                        PDF Selected: {fundsData.evidence.name}
                      </p>
                    ) : (
                      <p className="text-gray-500">Select a PDF file</p>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Upload Image ends here */}

            <h1 className="text-blue-900 font-bold text-2xl mt-[25px]">
              ADDRESS DETAILS
            </h1>
            <div className="flex flex-row gap-4 mt-[25px]">
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Your City
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enyer Your City name"
                  value={fundsData.City}
                  type="text"
                  name="City"
                  id="City"
                />
              </div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Enter Your Pincode
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your Pincode"
                  value={fundsData.Pincode}
                  type="text"
                  name="Pincode"
                  id="Pincode"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-[25px]">
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Your Locality / main road
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your Locality / Main area"
                  value={fundsData.Locality}
                  type="text"
                  name="Locality"
                  id="Locality"
                />
              </div>
              <div className="w-50">
                <label className="text-gray-700 text-sm font-bold mb-2">
                  Your LandMark
                </label>
                <input
                  className="border p-2 rounded-lg w-full"
                  onChange={handleInputChange}
                  placeholder="Enter your Landmark"
                  value={fundsData.LandMark}
                  type="text"
                  name="LandMark"
                  id="LandMark"
                />
              </div>
            </div>
          </div>
          <div className="mt-[25px]">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Your Full Address
            </label>
            <textarea
              className="border p-2 rounded-lg w-full"
              onChange={handleInputChange}
              placeholder="Enter your Full Address here"
              value={fundsData.FullAddress}
              name="FullAddress"
              id="FullAddress"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div className="mt-[25px]">
            <input type="checkbox" name="" id="" />
            <span className="text-gray-500 text-md ml-1">
              I hereby declare that the information provided above is true and
              accurate to the best of my knowledge. I understand that providing
              false information may have legal consequences.
            </span>
          </div>
          {lawyerData && (
          <div className="w-full mt-[25px]">
            <button className="bg-blue-900 rounded-lg w-full text-white font-bold h-14" onClick={handleGenerateTokenClick} >
              REPORT MY COMPLAINT
            </button>
          </div>)}
        </form>
        {lawyerData && (
        <div className="bg-white col-span-2 m-6 p-3 rounded-lg">
          <p>
            <button
              style={{
                position: "absolute",
                top: "32rem",
                left: "42rem",
                backgroundColor: "Blue",
              }}
              className="btn btn-primary"
              type="button"
              data-bs-target="#collapseWidthExample"
              aria-expanded="true"
              aria-controls="collapseWidthExample"
              onClick={handleGenerateTokenClick}
            >
              Generate Your Token ID
            </button>
          </p>
          {isTokenGenerated && (
            <p style={{ position: "absolute", top: "35rem", left: "39rem" }}>
              <strong style={{ color: "Green", fontSize: "16px" }}>
                Your Token has been generated Successfully
              </strong>
              <span
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "3rem",
                  color: "Red",
                  fontSize: "16px",
                  fontWeight: "800",
                }}
              >
                {lawyerData._id ? lawyerData._id.toString() : lawyerData.id}
              </span>
            </p>
          )}
          {isTokenGenerated && (
            <div className="alert alert-success text-center" role="alert">
              Lawyer has been assigned to your case. Please note your Token ID
            </div>
          )}
        </div>
      )}
        

        <Footer />
      </div>
    </div>
  );
}

export default FrozenFunds;
