class Bin {
    constructor(id, location) {
        this.id = id;
        this.location = location;
        this.fillLevel = Math.floor(Math.random() * 100); // % full
        this.temperature = Math.floor(Math.random() * 40); // °C
        this.lastUpdated = new Date();
    }

    // Simulate sensor updating every few seconds
    updateSensors() {
        this.fillLevel = Math.min(100, this.fillLevel + Math.floor(Math.random() * 10));
        this.temperature = Math.floor(Math.random() * 40);
        this.lastUpdated = new Date();
    }
}

module.exports = Bin;
