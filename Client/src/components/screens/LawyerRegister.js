import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from "axios";
const API_URL = "http://localhost:5000/api/users";
function LawyerRegister() {
  const navigate = useNavigate();

  const [lawyerData, setLawyerData] = useState({
    name: '',
    email: '',
    password: '',
    //retypepass: '',
    barAssociationNumber: '',
    legalSpecialization: '',
    yearsOfPractice: '8',
    lawSchoolAttended: '',
    professionalCertifications: '',
    lawFirm: '',
    officeAddress: '',
    contactNumber: '',
    areasOfPractice: [],
    linkedinProfile: '',
    lawFirmWebsite: '',
    preferredContactHours: '',
    consultationAvailability: '',
    bio: '',
  });

  const [token, setToken] = useState('');
  

  const handleInputChange = (e) => {
    setLawyerData({
      ...lawyerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(API_URL, lawyerData);

      console.log('Response:', response);

      if (response.status === 201) {
        const data = response.data;
        console.log('Data:', data);

      // Save the token securely (e.g., in local storage)
      localStorage.setItem('yourTokenKey', data.token);

        // Redirect to the dashboard or any other page after successful registration
        navigate('/Lawyerdashboard');
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error response:', error.response); // Log the error response
    }
  };
  return (
    <div>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-lg h-[100px]'></div>
        <img className='px-3 mt-4' src="/images/divider.svg" alt="" />
      <div className="grid grid-flow-col gap-9 items-center">
    <div className="flex flex-col">
     <div className="rounded-md w-70% px-[140px] mt-20 ">
            <div className="border-b border-stroke pb-2 px-6.5 border-strokedark">
              <h3 className="text-blue-900 font-extrabold text-[36px] mb-8">
                Lawyer Registration Form
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text" name="name" value={lawyerData.name}   required
                    placeholder="Enter your full name"
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email" name='email' value={lawyerData.email}   required
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password" name='password' value={lawyerData.password}   required
                    placeholder="Enter password"
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:focus:border-blue-500"
                  />
                </div>

                {/* <div className="mb-5.5">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Re-type Password
                  </label>
                  <input
                    type="password" name='retypepass' value={lawyerData.retypepass}   required
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark"
                  />
                </div> */}

                <div className="my-4 border-b border-stroke">
  <h2 className="text-blue-900 font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Professional Information</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="barAssociationNumber">Bar Association Registration Number:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="barAssociationNumber" name="barAssociationNumber" value={lawyerData.barAssociationNumber}   required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="legalSpecialization">Legal Specialization:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="legalSpecialization" name="legalSpecialization" value={lawyerData.legalSpecialization}   required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="yearsOfPractice">Years of Practice:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="yearsOfPractice" name="yearsOfPractice" value={lawyerData.yearsOfPractice}   required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lawSchoolAttended">Law School Attended:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="lawSchoolAttended" name="lawSchoolAttended" value={lawyerData.lawSchoolAttended}   required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="professionalCertifications">Professional Certifications:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="professionalCertifications" value={lawyerData.professionalCertifications} name="professionalCertifications"   required />
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="text-blue-900 font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Practice Details</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lawFirm">Law Firm (if applicable):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="lawFirm" value={lawyerData.lawFirm}   name="lawFirm" required/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="officeAddress">Office Address:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="officeAddress" value={lawyerData.officeAddress}   name="officeAddress" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="contactNumber">Contact Number:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="tel" id="contactNumber" value={lawyerData.contactNumber}   name="contactNumber" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="areasOfPractice">Areas of Practice:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" id="areasOfPractice" value={lawyerData.areasOfPractice} name="areasOfPractice" required/>
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="text-blue-900 font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Online Presence</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="linkedinProfile">LinkedIn Profile (if any):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="url" id="linkedinProfile" value={lawyerData.linkedinProfile}   name="linkedinProfile" required />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lawFirmWebsite">Law Firm Website (if any):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="url" id="lawFirmWebsite" value={lawyerData.lawFirmWebsite}   name="lawFirmWebsite" required/>
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="text-blue-900 font-bold text-[30px] pb-6 pt-4 border-b border-stroke mb-8">Availability</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="preferredContactHours">Preferred Contact Hours:</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" value={lawyerData.preferredContactHours}   name="preferredContactHours"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="consultationAvailability">Available for Consultations (Days and Times):</label>
      <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleInputChange} type="text" value={lawyerData.consultationAvailability} id="consultationAvailability"   name="consultationAvailability"/>
    </div>
  </div>
</div>

<div className="my-4">
  <h2 className="block text-gray-700 text-sm font-bold mb-2">Keep bio.</h2>
  <div>
    <textarea name="bio" id="bio" onChange={handleInputChange}  rows="5" placeholder="Write something about yourself..." value={lawyerData.bio} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
  </div>
</div>
{/* <div className="bg-gray-100 p-8">
      <h2 className="text-gray-700 text-xl ml-[-18px] font-bold mb-2">Upload Your Image</h2>

      <div className="flex items-center justify-center">
        <label className="bg-white border-2 border-dashed border-gray-400 rounded-md cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <div className="p-8">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="max-h-48 max-w-full"
              />
            ) : (
              <p className="text-gray-500">Select an image</p>
            )}
          </div>
        </label>
      </div>
    </div> */}


        <Link to="/Lawyerlogin"
          className="flex w-full justify-center text-white rounded-md bg-blue-900 p-3 mt-6 font-medium"
          type="submit"
        >
          Submit Information
        </Link> 
                <p>Already Have an Account? <Link to='/lawyerlogin'>Sign In</Link></p>
              </div>
            </form>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LawyerRegister
