import React from 'react'

const lawyerdashboard = () => {
    const lawyerData = {
        fullName: "John Doe",
        barAssociationNumber: "ABC123",
        legalSpecialization: "Corporate Law",
        yearsOfPractice: "8",
        lawSchoolAttended: "Law University",
        professionalCertifications: "Certified Corporate Lawyer",
        lawFirm: "Legal Solutions LLC",
        officeAddress: "123 Main St, Cityville",
        contactNumber: "555-1234",
        areasOfPractice: "Corporate Law, Contracts",
        linkedinProfile: "https://linkedin.com/johndoe",
        lawFirmWebsite: "https://legalsolutions.com",
        preferredContactHours: "9 AM - 5 PM",
        consultationAvailability: "Mon-Fri: 2 PM - 4 PM",
        profileImage: 'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA',

    };

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
      <p><strong>Name:</strong> {lawyerData.fullName}</p>
      <p><strong>Bar Association Number:</strong> {lawyerData.barAssociationNumber}</p>
      <p><strong>Legal Specialization:</strong> {lawyerData.legalSpecialization}</p>
      <p><strong>Years of Practice:</strong> {lawyerData.yearsOfPractice}</p>
      <p><strong>Law School Attended:</strong> {lawyerData.lawSchoolAttended}</p>
      <p><strong>Professional Certifications:</strong> {lawyerData.professionalCertifications}</p>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Practice Details</h3>
      <p><strong>Law Firm:</strong> {lawyerData.lawFirm}</p>
      <p><strong>Office Address:</strong> {lawyerData.officeAddress}</p>
      <p><strong>Contact Number:</strong> {lawyerData.contactNumber}</p>
      <p><strong>Areas of Practice:</strong> {lawyerData.areasOfPractice}</p>
    </div>
  </div>
</section>

{/* Online Presence Section */}
<section className="container mx-auto mb-2 p-4">
  <h2 className="text-3xl font-bold mb-4">Online Presence</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">LinkedIn Profile</h3>
      <p><a href={lawyerData.linkedinProfile} target="_blank" rel="noopener noreferrer">{lawyerData.linkedinProfile}</a></p>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Law Firm Website</h3>
      <p><a href={lawyerData.lawFirmWebsite} target="_blank" rel="noopener noreferrer">{lawyerData.lawFirmWebsite}</a></p>
    </div>
  </div>
</section>
{/* <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Your Profile</h2>
          <div className="mb-4">
            <img
              src={lawyerData.profileImage} // Assuming the image URL is stored in the lawyerDetails object
              alt={`${lawyerData.fullName}'s Profile`}
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
      <p>{lawyerData.preferredContactHours}</p>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Consultation Availability</h3>
      <p>{lawyerData.consultationAvailability}</p>
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

export default lawyerdashboard
