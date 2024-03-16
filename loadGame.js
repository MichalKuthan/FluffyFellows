// Assuming you have functions to update your game's UI based on the loaded state
// You'll need to adjust these parts according to your specific game's requirements

async function updateGameStateUI(gameState) {
    // Example updates, adjust according to your actual UI and state structure
    document.getElementById('coin-count').textContent = gameState.state.coins;
    // Add more UI updates based on loaded game state...
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
