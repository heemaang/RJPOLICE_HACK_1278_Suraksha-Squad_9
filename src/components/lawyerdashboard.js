import React, { useState, props, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

function Lawyerdashboard(props) {

  return (
    <>
    <div className="bg-gray-100">

{/* Navigation */}
<nav className="bg-gradient-to-r from-slate-600 to-slate-800 h-26 text-white">
  <div className="container mx-auto inline-block p-6">
    <h1 className="text-3xl font-semibold">Lawyer Dashboard.</h1>
    <div className="flex flex-row-reverse gap-5 mt-[-35px]">
    <h1 className="text-xl font-semibold">Home</h1>
    <h1 className="text-xl font-semibold">My Dashboard</h1>
    </div>
  </div>
</nav>

{/* Lawyer Details Section */}
<section className="container mx-auto mb-2 p-4">
  <h2 className="text-3xl font-bold mb-4">Lawyer Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
      <p><strong>Name:</strong> {props.fullName}</p>
      <p><strong>Bar Association Number:</strong> {props.barAssociationNumber}</p>
      <p><strong>Legal Specialization:</strong> {props.legalSpecialization}</p>
      <p><strong>Years of Practice:</strong> {props.yearsOfPractice}</p>
      <p><strong>Law School Attended:</strong> {props.lawSchoolAttended}</p>
      <p><strong>Professional Certifications:</strong> {props.professionalCertifications}</p>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Practice Details</h3>
      <p><strong>Law Firm:</strong> {props.lawFirm}</p>
      <p><strong>Office Address:</strong> {props.officeAddress}</p>
      <p><strong>Contact Number:</strong> {props.contactNumber}</p>
      <p><strong>Areas of Practice:</strong> {props.areasOfPractice}</p>
    </div>
  </div>
</section>

{/* Online Presence Section */}
<section className="container mx-auto mb-2 p-4">
  <h2 className="text-3xl font-bold mb-4">Online Presence</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">LinkedIn Profile</h3>
      <p><a href={props.linkedinProfile} target="_blank" rel="noopener noreferrer">{props.linkedinProfile}</a></p>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Law Firm Website</h3>
      <p><a href={props.lawFirmWebsite} target="_blank" rel="noopener noreferrer">{props.lawFirmWebsite}</a></p>
    </div>
  </div>
</section>
{/* <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Your Profile</h2>
          <div className="mb-4">
            <img
              src={props.profileImage} // Assuming the image URL is stored in the lawyerDetails object
              alt={`${props.fullName}'s Profile`}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
</div> */}

{/* Availability Section */}
<section className="container mx-auto mb-4 p-4">
  <h2 className="text-3xl font-bold mb-4">Availability</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Preferred Contact Hours</h3>
      <p>{props.preferredContactHours}</p>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Consultation Availability</h3>
      <p>{props.consultationAvailability}</p>
    </div>
  </div>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-[-35px]">
    <section className="container mx-auto my-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Your Cases</h2>
          {/* Add logic to display the lawyer's assigned cases */}
          <p>No cases assigned yet.</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container mx-auto my-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Your Schedule</h2>
          {/* Add logic to display the lawyer's schedule and appointments */}
          <p>No upcoming appointments.</p>
        </div>
    </section>
</div>

</div>
    </>
  )
}

export default Lawyerdashboard
