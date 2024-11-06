const express = require('express');
const mongoose = require('mongoose');
const donorRoutes = require('./src/routes/donorRoutes'); // Update path to donor routes
const recipientRoutes = require('./src/routes/recipientRoutes'); // Update path to recipient routes
const bloodAvailabilityRoutes = require('./src/routes/bloodAvailabilityRoutes'); // Update path to blood availability routes
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file if available

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/donors', donorRoutes); // API route for donors
app.use('/api/recipients', recipientRoutes); // API route for recipients
app.use('/api/blood-availability', bloodAvailabilityRoutes); // API route for blood availability

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
