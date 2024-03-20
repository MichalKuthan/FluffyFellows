// gameStateManager.js

import { loadGameState } from "../persistence/loadGame.js";

export async function fetchAndDisplaySavedGames() {
    try {
        const response = await fetch('http://localhost:3000/games');
        if (!response.ok) {
            throw new Error('Failed to fetch saved games');
        }
        const savedGames = await response.json();
        displaySavedGames(savedGames);
    } catch (error) {
        console.error('Error fetching saved games:', error);
    }
}

function displaySavedGames(savedGames) {
    const gamesList = document.getElementById('saved-games-list');
    gamesList.innerHTML = ''; // Clear any existing options
    savedGames.forEach(game => {
        const option = document.createElement('option');
        option.value = game._id; // Use game ID or any unique identifier
        // Adjust the property names as per your server's response
        // Assuming 'username' and 'petname' are the correct properties
        option.textContent = `${game.username} - ${game.petname}`; 
        gamesList.appendChild(option);
    });
}

// Add event listener for "Load Selected Game" button
document.getElementById('load-selected-game').addEventListener('click', async () => {
    const gamesList = document.getElementById('saved-games-list');
    const selectedGameId = gamesList.value;
    if (selectedGameId) {
        await loadGameState(selectedGameId);
    } else {
        alert('Please select a game to load.');
    }
});
