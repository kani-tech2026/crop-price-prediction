const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Mock data for prices
const mockCropData = {
  carrot: { currentPrice: 35, predictedPrice: 38 },
  rice: { currentPrice: 45, predictedPrice: 48 },
  wheat: { currentPrice: 32, predictedPrice: 35 },
  tomato: { currentPrice: 30, predictedPrice: 33 },
  potato: { currentPrice: 25, predictedPrice: 27 },
  onion: { currentPrice: 42, predictedPrice: 45 },
  beans: { currentPrice: 90, predictedPrice: 95 },
  corn: { currentPrice: 38, predictedPrice: 41 }
};

app.post("/predict", (req, res) => {
  const { cropName, location } = req.body;
  
  // Get crop data (case-insensitive)
  const cropKey = cropName?.toLowerCase() || "carrot";
  const cropData = mockCropData[cropKey] || {
    currentPrice: Math.floor(Math.random() * 50) + 20,
    predictedPrice: Math.floor(Math.random() * 50) + 25
  };

  res.json({
    crop: cropName,
    location: location,
    price: cropData.predictedPrice,
    currentPrice: cropData.currentPrice,
    marketRate: cropData.currentPrice,
    weather: "31°C - Sunny",
    success: true
  });
});

// Store contact messages (in-memory for now)
let contactMessages = [];

app.post("/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    subject: subject || '',
    message,
    timestamp: new Date().toISOString(),
    status: 'unread'
  };

  contactMessages.push(newMessage);
  
  console.log('📧 New contact message received:', newMessage);
  
  res.json({ 
    success: true, 
    message: "Thank you! Your message has been sent successfully.",
    messageId: newMessage.id
  });
});

// Get all contact messages (for admin view)
app.get("/contact/messages", (req, res) => {
  res.json({
    success: true,
    messages: contactMessages,
    total: contactMessages.length
  });
});

// Mark message as read
app.put("/contact/messages/:id/read", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = contactMessages.find(m => m.id === messageId);
  
  if (message) {
    message.status = 'read';
    res.json({ success: true, message: "Message marked as read" });
  } else {
    res.status(404).json({ error: "Message not found" });
  }
});