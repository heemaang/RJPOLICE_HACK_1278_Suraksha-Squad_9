// Import necessary libraries and components
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// FrozenDetails.js

const FrozenDetails = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchFrozenEntries = async () => {
      try {
        // Fetch frozen funds data from your MongoDB
        const response = await axios.get('http://localhost:5000/api/users/frozen-funds'); // Replace with your actual API endpoint
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching frozen funds data:', error);
      }
    };

    fetchFrozenEntries();
  }, []);

  return (
    <div>
      <h2>Frozen Funds Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Aadhaar Card Number</th>
            <th>Pan Card Number</th>
            <th>Major Issue Domains</th>
            <th>Account Number</th>
            <th>Account Holder</th>
            <th>IFSC Code</th>
            <th>Mobile</th>
            <th>Fraud Amount</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Locality</th>
            <th>Landmark</th>
            <th>Full Address</th>
            {/* Add more headers based on your data structure */}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.aadhaarCardNumber}</td>
              <td>{entry.panCardNumber}</td>
              <td>{entry.majorIssueDomains}</td>
              <td>{entry.AccountNumber}</td>
              <td>{entry.AccountHolder}</td>
              <td>{entry.IFSCcode}</td>
              <td>{entry.Mobile}</td>
              <td>{entry.FraudAmount}</td>
              <td>{entry.City}</td>
              <td>{entry.Pincode}</td>
              <td>{entry.Locality}</td>
              <td>{entry.LandMark}</td>
              <td>{entry.FullAddress}</td>
              {/* Add more cells based on your data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrozenDetails;
