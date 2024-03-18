// Assuming you have functions to update your game's UI based on the loaded state
// You'll need to adjust these parts according to your specific game's requirements

async function updateGameStateUI(gameState) {
    // Update the UI based on the loaded game state
    document.getElementById('player-name').value = gameState.username || '';
    document.getElementById('pet-name').value = gameState.petname || '';
    document.getElementById('coin-count').textContent = gameState.state.coins || 0;
    document.getElementById('happiness-monitor').querySelector('progress').value = gameState.state.happinessLevel || 0;
    document.getElementById('toilet-monitor').querySelector('progress').value = gameState.state.toiletLevel || 0;
    // Add more UI updates based on the loaded game state...
}

export async function loadGameState(username) {
    try {
        const response = await fetch(`http://localhost:3000/load/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to load game state: ${response.statusText}`);
        }
        const gameState = await response.json();

        // Assuming you have a function to update the game's UI based on the loaded state
        await updateGameStateUI(gameState);

        console.log('Load successful:', gameState);
        // Provide feedback to the user, if necessary
        alert('Game loaded successfully!');
    } catch (error) {
        console.error('Load error:', error);
        // Provide feedback to the user
        alert('Failed to load game.');
    }
}

// Export the loadGameState function for use in other parts of your application
