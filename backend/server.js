// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// To serve static front-end files (HTML, CSS, JS)
app.use(express.static('frontend'));

// Example API endpoint for dashboard data
app.get('/api/data', (req, res) => {
  const dashboardData = {
    users: 120,
    sales: 450,
    messages: 30
  };
  res.json(dashboardData);
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
