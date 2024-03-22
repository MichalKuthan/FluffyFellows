// Variable to store the interval ID for decreasing happiness
let happinessIntervalId = null;

// Updates the happiness level based on a change value
export function updateHappiness(change) {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    // Adjust happiness within the 0-20 range
    happinessMonitor.value = Math.min(Math.max(happinessMonitor.value + change, 0), 20);
}

// Starts a timer to decrease happiness at regular intervals
export function startDecreasingHappiness() {
    const decreaseAmount = -1; // Amount to decrease happiness by on each tick
    const intervalTime = 15000; // Interval time in milliseconds

    // Stop any existing interval to prevent multiple instances
    if (happinessIntervalId !== null) {
        clearInterval(happinessIntervalId);
    }

    // Start a new interval for decreasing happiness
    happinessIntervalId = setInterval(() => {
        updateHappiness(decreaseAmount);
    }, intervalTime);
}

// Resets the happiness level to a default value and stops any ongoing decrease
export function resetHappinessMonitor() {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = 10; // Set happiness to a default or starting level

    // Stop the interval for decreasing happiness if it's running
    if (happinessIntervalId !== null) {
        clearInterval(happinessIntervalId);
        happinessIntervalId = null; // Clear the interval ID
    }
}
