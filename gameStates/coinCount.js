let coinCount = 0;

export function resetCoinCount() {
    coinCount = 0;
    document.getElementById('coin-count').textContent = coinCount;
}

// Function to increment the coin count
export function incrementCoinCount(amount) {
    coinCount += amount; // Increment the coin count by the specified amount
    updateCoinCountDisplay(); // Update the display with the new coin count
}

// Function to update the coin count display in the UI
function updateCoinCountDisplay() {
    const coinCountElement = document.getElementById('coin-count'); // Assuming this is the ID for your coin count display element
    if (coinCountElement) {
        coinCountElement.textContent = coinCount; // Update the text content with the new coin count
    }
}

// Optionally, to access or modify the coin count from other parts of application,
// this can be exported/imported to get and set the coin count.
export function getCoinCount() {
    return coinCount;
}

export function setCoinCount(newCount) {
    coinCount = newCount;
    updateCoinCountDisplay(); // Make sure to update the display whenever the count is set
}