import React, { useState, props } from 'react'
import Navbar from './Navbar'
import { collection, addDoc } from "firebase/firestore";
import Footer from './Footer'
import { Select } from 'semantic-ui-react';

function Complaint(props) {
  const [Complaintdetails, setComplaintDetails] = useState({
    FullName: "",
    Email: "",
    Contact: "",
    PAN: "",
    Aadhaar: "",
    Time: "",
    Date: "",
    Location: "",
    Issue: "",
    Domain: "",
    Loss: "",
    Image: "",
    Additional: "",
    Name: "",
  })
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Issue") {
      if (value.length <= 45) {
        setComplaintDetails(prevDetails => ({
          ...prevDetails,
          [name]: value,
        }))
        setErrorMsg("")
      } else {
        setErrorMsg("Explanation should not exceed 30 characters.")
      }
    } else {
      setComplaintDetails(prevDetails => ({
        ...prevDetails,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(Complaintdetails)
    await addDoc(collection(props.db, "Complaint"), {
      ...Complaintdetails,
      postedOn: new Date(),
    }).then(function (res) {
      alert("Document written with ID: " + res.id)
    }).catch(function (err) {
      alert("Error adding document: ")
    })
  }

  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-2xl h-[100px] relative">
        <div><Navbar /></div>
        <img className='px-3 mt-4' src="/images/divider.svg" alt="Complaint" />

        <div className="p-8">
          <h1 className="text-4xl ms-5 font-bold mb-6 text-blue-900 border-b p-3">File your Complaint</h1>
          <form className='shadow p-20 m-5' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="FullName">
                Full Name
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="FullName" type="text" name="FullName" value={Complaintdetails.FullName} onChange={handleChange} placeholder="Enter your full name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Email">
                Email
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="email" name="Email" value={Complaintdetails.Email} onChange={handleChange} placeholder="Enter your email address" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Contact">
                Contact
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Contact" type="tel" name="Contact" value={Complaintdetails.Contact} onChange={handleChange} placeholder="Enter your contact number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="PAN">
                PAN
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="PAN" type="text" name="PAN" value={Complaintdetails.PAN} onChange={handleChange} placeholder="Enter your PAN number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Aadhaar">
                Aadhaar
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Aadhaar" type="text" name="Aadhaar" value={Complaintdetails.Aadhaar} onChange={handleChange} placeholder="Enter your Aadhaar number" />
            </div>
            <p className="mb-4 text-blue-900 text-3xl font-bold">Incident Details</p>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Time">
                Time
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Time" type="time" name="Time" value={Complaintdetails.Time} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Date">
                Date
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="Date" name="Date" value={Complaintdetails.Date} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Location">
                Location
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Location" type="text" name="Location" value={Complaintdetails.Location} onChange={handleChange} placeholder="Enter the location" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Issue">
                Issue
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Issue" type="text" name="Issue" value={Complaintdetails.Issue} onChange={handleChange} placeholder="Enter the issue" />
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Domain">
                Type of Cyber Crime you are complaining
              </label>
              <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Domain" type="text" name="Domain" value={Complaintdetails.Domain} onChange={handleChange} placeholder="Enter the domain">
              <option value="" disabled hidden selected>--select Major Cyber Crime--</option>
              <option value="Phishing Fraud">Phishing Fraud</option>
              <option value="Identity Theft">Identity Theft</option>
              <option value="Online Fraud">Online Fraud</option>
              <option value="Ransomware Attacks">Ransomware Attacks</option>
              <option value="Child Exploitation">Child Exploitation</option>
              <option value="Cyber bullying">Cyber bullying</option>
              <option value="Others">Others</option>
              </select>
              
            </div>
            <p className="mb-4 text-blue-900 text-3xl font-bold">Financial Details</p>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Loss">
                Loss
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Loss" type="text" name="Loss" value={Complaintdetails.Loss} onChange={handleChange} placeholder="Enter the loss" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Image">
                Image
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Image" type="file" name="Image" value={Complaintdetails.Image} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2" htmlFor="Additional">
                Additional Details
              </label>
              <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Additional" name="Additional" value={Complaintdetails.Additional} onChange={handleChange} placeholder="Enter any additional details" ></textarea>
            </div>
            <div className="mb-4 mt-4 flex justify-end">
              <input className="appearance-none mt-4 flex justify-center rounded w-[40%] border-b py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" name="Name" value={Complaintdetails.Name} onChange={handleChange} placeholder="Signature: Digital Signature or Typed Full Name" />
            </div>
            <div className="mb-4 flex inline-block">
              <input type='checkbox' name="CheckBox" onChange={handleChange} />
              <p className='ms-3'>I hereby declare that the information provided above is true and accurate to the best of my knowledge. I understand that providing false information may have legal consequences.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-900 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Complaint