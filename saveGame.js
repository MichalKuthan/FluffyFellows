// Function to collect current game state
function getCurrentGameState() {
    // Collect your game's current state here
    // Example structure
    return {
        username: "playerUsername", // Placeholder - replace with actual username
        petname: "playerPetName", // Placeholder - replace with actual pet name chosen by the player
        state: {
            coins: parseInt(document.getElementById('coin-count').textContent, 10),
            inventory: ["item1", "item2"], // Example, replace with actual game state details
            happinessLevel: document.getElementById('happiness-monitor').querySelector('progress').value,
            toiletLevel: document.getElementById('toilet-monitor').querySelector('progress').value
            // Add other relevant game state details
        }
    };
}

// Function to save current game state to the server
export async function saveGameState() {
    const gameState = getCurrentGameState();
    try {
        const response = await fetch('http://localhost:3000/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameState),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Save successful:', data);
        alert('Game saved successfully!');
    } catch (error) {
        console.error('Failed to save game:', error);
        alert('Failed to save game.');
    }
}
