import React, { useEffect, useState } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import axios from 'axios';

function Lawyerdashboard() {
  const [lawyerData, setLawyerData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('yourTokenKey');

        if (!token) {
          // Handle the case where the token is not available
          setError('Token not found. Please log in.');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLawyerData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message || 'An error occurred while fetching user data');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-2xl h-[100px] z-10 relative'>
      <div className='relative'><Navbar2/></div>
      <img className='px-3 mt-9' src="/images/divider.svg" alt="" />

      {/* Lawyer's Dashboard */}
        <div className='mb-12 bg-blue-50 mx-[150px]'>


      {/* Personal Information */}
      <div className='mt-5 grid grid-cols-3'>
        <div className='m-6 rounded-md bg-slate-50'>
        <img src="/images/Rectangle 58.png" alt="" />
        </div>
        
        {lawyerData && (<div className='bg-white col-span-2 m-6 p-3 rounded-lg'>
            <p className='text-3xl border-2 p-4 font-bold mb-3 text-blue-900'>Personal Information</p>
            <div className='text-lg'>
            <p><strong>ID:</strong> {lawyerData._id ? lawyerData._id.toString() : lawyerData.id}</p>
            <p><strong>Name:</strong> {lawyerData.name}</p>
            <p><strong>Bar Association Number:</strong> {lawyerData.barAssociationNumber}</p>
            <p><strong>Legal Specialization:</strong> {lawyerData.legalSpecialization}</p>
            <p><strong>Years of Practice:</strong> {lawyerData.yearsOfPractice} years</p>
            <p><strong>Law School Attended:</strong> {lawyerData.lawSchoolAttended}</p>
            <p><strong>Professional Certifications:</strong> {lawyerData.professionalCertifications}</p>
        </div>
      </div>)}

      {/*Online Presence Section */}
      {lawyerData && (<div className='grid grid-cols-3 gap-2 px-3'>
        <div className='bg-white rounded-md p-3 m-2'>
        <p className='text-3xl border-2 p-4 font-bold mb-3 text-blue-900'>Practice Details</p>
            <div className='text-lg'>
            <p><strong>Law Firm:</strong> {lawyerData.lawFirm}</p>
            <p><strong>Office Address:</strong> {lawyerData.officeAddress}</p>
            <p><strong>Contact Number:</strong> {lawyerData.contactNumber}</p>
            <p><strong>Areas of Practice:</strong> {lawyerData.areasOfPractice}</p>
            </div>
        </div>
        
        <div className='bg-white rounded-md p-3 m-2'>
        <p className='text-3xl border-2 p-4 font-bold mb-3 text-blue-900'>Availablity</p>
            <div className='text-lg'>
            <p><strong>Preferred Contact Hours:</strong> {lawyerData.preferredContactHours}</p>
            <p><strong>Consultation Availability:</strong> {lawyerData.consultationAvailability}</p>
            <p><strong>Your Cases:</strong> No cases assigned yet.</p>
            </div>
        </div>

        <div className='bg-white rounded-md p-3 m-2'>
        <p className='text-3xl border-2 p-4 font-bold mb-3 text-blue-900'>Cases Pending</p>
        <div className='text-lg'>
        <p><strong>Case Number:</strong> 234234dhbdfh65</p>
        <button className='p-2 mt-4 border-2 hover:bg-blue-900 hover:text-white rounded-lg w-[90%] border-blue-900'>Close Case</button>
        </div>
        </div>
      </div>
)}
      </div>

      {/* Footer */}
      <Footer/>
      </div>
    </div>
    </div>
  )
}

export default Lawyerdashboard
