// Function to collect current game state
function getCurrentGameState() {
    // Fetch values from the input fields
    const playerName = document.getElementById('player-name').value.trim();
    const petName = document.getElementById('pet-name').value.trim();

    // Collect the rest of game's current state
    return {
        username: playerName, // Use the value from the input field
        petname: petName, // Use the value from the input field
        pettype: window.currentPet,
        state: {
            coins: parseInt(document.getElementById('coin-count').textContent, 10),
            // inventory: ["item1", "item2"], // Example, could be replaced with actual game state details
            happinessLevel: document.getElementById('happiness-monitor').querySelector('progress').value,
            toiletLevel: document.getElementById('toilet-monitor').querySelector('progress').value
           
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
