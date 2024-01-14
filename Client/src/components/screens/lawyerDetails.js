// LawyersDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LawyersDetails = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    // Fetch lawyers data from your MongoDB
    const fetchLawyers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/lawyers'); // Replace with your actual API endpoint
        setLawyers(response.data);
      } catch (error) {
        console.error('Error fetching lawyers data:', error);
      }
    };

    fetchLawyers();
  }, []);

  return (
    <div className=''>
      <h2 className='text-blue-900 font-bold text-xl  border p-3 m-3'>Lawyers Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Bar Association Number</th>
            <th>Legal Specialization</th>
            <th>Years of Practice</th>
            <th>Law School Attended</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {lawyers.map((lawyer) => (
            <tr key={lawyer._id}>
              <td>{lawyer.name}</td>
              <td>{lawyer.email}</td>
              <td>{lawyer.barAssociationNumber}</td>
              <td>{lawyer.legalSpecialization}</td>
              <td>{lawyer.yearsOfPractice}</td>
              <td>{lawyer.lawSchoolAttended}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LawyersDetails;
