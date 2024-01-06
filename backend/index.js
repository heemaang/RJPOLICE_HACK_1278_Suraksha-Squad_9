const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const cors = require('cors');

const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

// Create a new WhatsApp client
const whatsapp = new Client({
    authStrategy: new LocalAuth()
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API endpoint to trigger the WhatsApp bot
app.post('/api/sendMessage', async (req, res) => {
    try {
        const { message } = req.body;

        // Ensure that the client is ready before interacting with it
        if (whatsapp.isReady()) {
            const chats = await whatsapp.getChats();

            // Example: send the message to the first chat in the session
            const chat = chats[0];
            await chat.sendMessage(message);

            res.json({ success: true, message: 'Message sent to WhatsApp bot' });
        } else {
            res.status(500).json({ success: false, error: 'WhatsApp client not ready yet' });
        }
    } catch (error) {
        console.error('Error sending message to WhatsApp bot', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

// Listen for the ready event
whatsapp.on('ready', () => {
    console.log('WhatsApp client is ready!');
    // Start the Express server after the WhatsApp client is ready
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

// Listen for the QR code event
whatsapp.on('qr', (qr) => {
    qrcode.generate(qr, {
        small: true
    });
});

// Listen for incoming messages
whatsapp.on('message', async (message) => {
    // Handle incoming messages as before
    const userMessage = message.body.toLowerCase();

    // Your message handling logic here
});

// Initialize the WhatsApp client
whatsapp.initialize();
