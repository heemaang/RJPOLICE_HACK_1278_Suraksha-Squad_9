import React, { useEffect, useState } from "react";
import Navbar from "./Navbar2";
import Footer from "./Footer";
import axios from "axios";

function Ticketing() {
  const [lawyerData, setLawyerData] = useState(null);
  const [error, setError] = useState(null);
  const [isTokenGenerated, setIsTokenGenerated] = useState(false);

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

  const handleGenerateTokenClick = () => {
    setIsTokenGenerated(true);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div
        className="card shadow-lg"
        style={{
          width: "50rem",
          height: "32rem",
          position: "absolute",
          top: "8rem",
          left: "24rem",
        }}
      >
        <section
          className="heading text-center m-2"
          style={{ fontSize: "24px", fontWeight: "600" }}
        >
          <p>Please fill out the form below</p>
        </section>

        <section className="form">
          <div className="form-group m-3">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group m-3">
            <label htmlFor="email">Your Email</label>
            <input type="text" className="form-control" />
          </div>

          <form>
            <div className="form-group m-3">
              <label htmlFor="product">Issue</label>
              <select name="product" id="product">
                Issue
                <option value="furniture">Cyber Threats</option>
                <option value="electrical">Cyber Bullying</option>
                <option value="plumbing">Cyber Fund </option>
                <option value="cleaning">Cyber</option>
                <option value="wifi">Cyber</option>
                <option value="mobile">Others</option>
              </select>
            </div>

            <div className="form-group  m-3 ">
              <label htmlFor="description">Description of the issue</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Description"
              ></textarea>
            </div>
            {/* <button
              style={{
                position: "absolute",
                top: "24rem",
                left: "21rem",
                backgroundColor: "Blue",
              }}
              className="btn btn-primary"
              type="button"
              data-bs-target="#collapseWidthExample"
              aria-expanded="true"
              aria-controls="collapseWidthExample"
            >
              Submit
            </button> */}
          </form>
        </section>
      </div>

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
    </>
  );
}

export default Ticketing;
