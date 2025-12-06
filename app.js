const binForm = document.getElementById('bin-form');
const binsList = document.getElementById('bins-list');

binForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const binName = document.getElementById('bin-name').value;
    const binLevel = document.getElementById('bin-level').value;

    const li = document.createElement('li');
    li.textContent = `${binName} - ${binLevel}% full`;
    binsList.appendChild(li);

    // Clear form
    binForm.reset();
});
console.log("Smart Waste App Loaded Successfully!");
