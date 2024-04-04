// Global variable to track the current coin count
let coinCount = 0;

// Resets the coin count to 0 and updates the UI accordingly
export function resetCoinCount() {
    coinCount = 0;
    document.getElementById('coin-count').textContent = coinCount; // Update UI display
}

// Increments the coin count by a specified amount and updates the UI
export function incrementCoinCount(amount) {
    coinCount += amount; // Add the specified amount to the coin count
    updateCoinCountDisplay(); // Refresh the coin count in the UI
}

// Updates the display of the coin count on the UI
function updateCoinCountDisplay() {
    const coinCountElement = document.getElementById('coin-count');
    if (coinCountElement) {
        coinCountElement.textContent = coinCount; // Set UI element to the current coin count
    }
}

// Returns the current coin count
export function getCoinCount() {
    return coinCount; // Return the global coin count
}

// Sets the coin count to a new value and updates the UI
export function setCoinCount(newCount) {
    coinCount = newCount; // Update the global coin count
    updateCoinCountDisplay(); // Reflect the change in the UI
}
