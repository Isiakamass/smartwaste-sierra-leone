function updateDashboard() {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      document.getElementById('users').textContent = data.users;
      document.getElementById('sales').textContent = data.sales;
      document.getElementById('messages').textContent = data.messages;
    });
}

// Update every 5 seconds
setInterval(updateDashboard, 5000);

// Initial load
updateDashboard();
