export function updateToilet(change) {
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = Math.min(Math.max(toiletMonitor.value + change, 0), 20); // Ensure value is within bounds
}

export function startDecreasingToilet() {
    const decreaseAmount = -1; // How much to decrease toilet by each interval
    const intervalTime = 10000; // Decrease every 10000 milliseconds (10 seconds)

    setInterval(() => {
        updateToilet(decreaseAmount);
    }, intervalTime);
}