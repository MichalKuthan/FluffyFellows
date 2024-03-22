// Tracks the interval ID for automatically decreasing the toilet need
let toiletIntervalId = null;

// Updates the toilet need based on a given change
export function updateToilet(change) {
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    // Adjust toilet need value to stay within the 0-20 range
    toiletMonitor.value = Math.min(Math.max(toiletMonitor.value + change, 0), 20);
}

// Initiates a recurring decrease in toilet need over time
export function startDecreasingToilet() {
    const decreaseAmount = -1; // Decrease amount per tick
    const intervalTime = 15000; // Time between decreases in milliseconds

    // Prevent multiple intervals from being set
    if (toiletIntervalId !== null) {
        clearInterval(toiletIntervalId);
    }

    // Set up a new interval for decreasing toilet needs
    toiletIntervalId = setInterval(() => {
        updateToilet(decreaseAmount);
    }, intervalTime);
}

// Resets the toilet need to a default value and stops the automatic decrease
export function resetToiletMonitor() {
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = 10; // Set toilet need to a default starting level

    // Clear any ongoing interval to stop decreasing toilet needs
    if (toiletIntervalId !== null) {
        clearInterval(toiletIntervalId);
        toiletIntervalId = null; // Ensure the interval ID is cleared
    }
}
