let happinessIntervalId = null;

export function updateHappiness(change) {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = Math.min(Math.max(happinessMonitor.value + change, 0), 20); // Ensure value is within bounds
}

export function startDecreasingHappiness() {
    const decreaseAmount = -1; // How much to decrease happiness by each interval
    const intervalTime = 15000; // Decrease every 15000 milliseconds (15 seconds)

    // Clear existing interval if it exists
    if (happinessIntervalId !== null) {
        clearInterval(happinessIntervalId);
    }

    happinessIntervalId = setInterval(() => {
        updateHappiness(decreaseAmount);
    }, intervalTime);
}

export function resetHappinessMonitor() {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = 10; // Reset to default or starting value

    // Additionally, clear the decreasing interval when resetting
    if (happinessIntervalId !== null) {
        clearInterval(happinessIntervalId);
        happinessIntervalId = null; // Reset the interval ID
    }
}
