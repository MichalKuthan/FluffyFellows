let toiletIntervalId = null;

export function updateToilet(change) {
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = Math.min(Math.max(toiletMonitor.value + change, 0), 20); // Ensure value is within bounds
}

export function startDecreasingToilet() {
    const decreaseAmount = -1; // How much to decrease toilet by each interval
    const intervalTime = 15000; // Decrease every 15000 milliseconds (15 seconds)

    // Clear existing interval if it exists
    if (toiletIntervalId !== null) {
        clearInterval(toiletIntervalId);
    }

    toiletIntervalId = setInterval(() => {
        updateToilet(decreaseAmount);
    }, intervalTime);
}

export function resetToiletMonitor() {
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = 10; // Reset to default or starting value

    // Additionally, clear the decreasing interval when resetting
    if (toiletIntervalId !== null) {
        clearInterval(toiletIntervalId);
        toiletIntervalId = null; // Reset the interval ID
    }
}
