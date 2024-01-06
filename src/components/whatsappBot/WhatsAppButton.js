import React from 'react';
import axios from 'axios';

const WhatsAppButton = () => {
  const handleWhatsAppButtonClick = async () => {
    try {
      // Make an API call to the backend to trigger the WhatsApp bot
      const response = await axios.post('http://localhost:3001/api/sendMessage', { message: 'Hello from the frontend!' });
      console.log(response.data); // Check the response from the backend

      // Assuming the backend successfully sends a message to the WhatsApp bot,
      // create a link to open WhatsApp with the specified number
      const chatbotNumber = '7067714169'; // Replace with your actual bot number
      const message = 'Hello%20from%20the%20frontend!'; // URL-encoded message

      // Open WhatsApp in a new tab
      window.open(`https://wa.me/${chatbotNumber}?text=${message}`, '_blank');
    } catch (error) {
      console.error('Error triggering WhatsApp bot', error);
    }
  };

  return (
    <div>
      <button onClick={handleWhatsAppButtonClick}>
        <h2>Connect to WhatsApp Bot</h2>
      </button>
    </div>
  );
};

export default WhatsAppButton;
