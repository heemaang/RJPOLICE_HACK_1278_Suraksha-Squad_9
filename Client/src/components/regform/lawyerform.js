import React, { useState } from 'react';
//import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    barAssociationNumber: '',
    legalSpecialization: '',
    yearsOfPractice: '',
    lawSchoolAttended: '',
    professionalCertifications: '',
    lawFirm: '',
    officeAddress: '',
    contactNumber: '',
    areasOfPractice: '',
    linkedinProfile: '',
    lawFirmWebsite: '',
    preferredContactHours: '',
    consultationAvailability: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lawyer Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields based on the provided data structure */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {/* Add other input fields based on the provided data structure */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { App as lawyerform };
