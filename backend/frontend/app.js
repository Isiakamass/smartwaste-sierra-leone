fetch('/api/status')
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent = data.message;
    })
    .catch(err => {
        document.getElementById('status').textContent = 'Error connecting to the system';
        console.error(err);
    });
