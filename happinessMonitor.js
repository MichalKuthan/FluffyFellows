export function updateHappiness(change) {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = Math.min(Math.max(happinessMonitor.value + change, 0), 20); // Ensure value is within bounds
}

//Happiness decreas over time
export function startDecreasingHappiness() {
    const decreaseAmount = -1; // How much to decrease happiness by each interval
    const intervalTime = 10000; // Decrease every 10000 milliseconds (10 seconds)

    setInterval(() => {
        updateHappiness(decreaseAmount);
    }, intervalTime);
}
// reset monitor
export function resetHappinessMonitor() {
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = 10; // Reset to default or starting value
}
