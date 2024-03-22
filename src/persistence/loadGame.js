import { displayGameView } from "../utils/uiUtils.js";
import { updatePetImage } from "../utils/petUIUtils.js";
import { startDecreasingHappiness } from "../gameStates/happinessMonitor.js";
import { startDecreasingToilet } from "../gameStates/toiletMonitor.js";

// Updates the game UI with the loaded game state
async function updateGameStateUI(gameState) {
    // Populate UI fields with game state data
    document.getElementById('player-name').value = gameState.username || '';
    document.getElementById('pet-name').value = gameState.petname || '';
    document.getElementById('coin-count').textContent = gameState.state.coins || 0;
    // Update progress bars for happiness and toilet levels
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = gameState.state.happinessLevel || 0;
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = gameState.state.toiletLevel || 0;
    
    // Set global pet type and update pet image
    window.currentPet = gameState.pettype;
    updatePetUI(window.currentPet);
}

// Updates pet image based on pet type
function updatePetUI(petType) {
    console.log(`updatePetUI called with petType: ${petType}`);
    let imageFileName;
    switch(petType) {
        case 'cat':
        case 'dog':
            imageFileName = `${petType}/${petType}.gif`;
            break;
        // Additional pet types can be added here
    }
    if(imageFileName) {
        updatePetImage(imageFileName); // Update the pet's image in the UI
    }
}

// Loads and applies a saved game state by its ID
export async function loadGameState(gameId) {
    try {
        const response = await fetch(`http://localhost:3000/load/${gameId}`);
        if (!response.ok) {
            throw new Error(`Failed to load game state: ${response.statusText}`);
        }
        const gameState = await response.json();

        await updateGameStateUI(gameState); // Update UI with loaded state
        displayGameView(); // Show the game view

        // Reactivate the automatic decrease of happiness and toilet levels
        startDecreasingHappiness();
        startDecreasingToilet();

        console.log('Load successful:', gameState);
        alert('Game loaded successfully!');
    } catch (error) {
        console.error('Load error:', error);
        alert('Failed to load game.');
    }
}
