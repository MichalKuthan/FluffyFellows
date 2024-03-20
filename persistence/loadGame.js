import { displayGameView } from "../app.js";
import { updatePetImage } from "../actions/petActions.js";
import { startDecreasingHappiness } from "../gameStates/happinessMonitor.js";
import { startDecreasingToilet } from "../gameStates/toiletMonitor.js";

async function updateGameStateUI(gameState) {
    // Update the UI based on the loaded game state
    document.getElementById('player-name').value = gameState.username || '';
    document.getElementById('pet-name').value = gameState.petname || '';
    document.getElementById('coin-count').textContent = gameState.state.coins || 0;
    const happinessMonitor = document.getElementById('happiness-monitor').querySelector('progress');
    happinessMonitor.value = gameState.state.happinessLevel || 0;
    const toiletMonitor = document.getElementById('toilet-monitor').querySelector('progress');
    toiletMonitor.value = gameState.state.toiletLevel || 0;
    
    // Update pet type globally and update UI accordingly
    window.currentPet = gameState.pettype; // Set the global currentPet variable to the loaded pet type
    updatePetUI(window.currentPet); // Update the UI based on the pet type
}

function updatePetUI(petType) {
    console.log(`updatePetUI called with petType: ${petType}`);
    let imageFileName;
    switch(petType) {
        case 'cat':
            imageFileName = 'cat/cat.gif'; 
            break;
        case 'dog':
            imageFileName = 'dog/dog.gif';
            break;
        // Add cases for other pet types 
        }
    if(imageFileName) {
        updatePetImage(imageFileName); // Call the function to update the pet image
    }
}


export async function loadGameState(gameId) {
    try {
        const response = await fetch(`http://localhost:3000/load/${gameId}`);
        if (!response.ok) {
            throw new Error(`Failed to load game state: ${response.statusText}`);
        }
        const gameState = await response.json();

        await updateGameStateUI(gameState);
        
        displayGameView();

        // Start the monitors decreasing after loading the game
        startDecreasingHappiness();
        startDecreasingToilet();

        console.log('Load successful:', gameState);
        alert('Game loaded successfully!');
    } catch (error) {
        console.error('Load error:', error);
        alert('Failed to load game.');
    }
}
