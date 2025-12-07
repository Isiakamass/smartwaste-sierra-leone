const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample API endpoint
app.get('/api/status', (req, res) => {
    res.json({ message: 'Smart Waste Management System is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
