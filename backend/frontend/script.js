// script.js

// Fetch dashboard data from backend
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    document.getElementById('users').textContent = data.users;
    document.getElementById('sales').textContent = data.sales;
    document.getElementById('messages').textContent = data.messages;
  })
  .catch(error => console.error('Error fetching data:', error));
