const Bin = require('../models/bin');

// Create 3 simulated bins
let bins = [
    new Bin(1, 'City Center'),
    new Bin(2, 'Market Square'),
    new Bin(3, 'School Road'),
];

// Automatically update sensors every 5 seconds
setInterval(() => {
    bins.forEach(bin => bin.updateSensors());
}, 5000);

exports.getAllBins = (req, res) => {
    res.json(bins);
};
