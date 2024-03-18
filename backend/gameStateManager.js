// gameStateManager.js

export async function fetchAndDisplaySavedGames() {
    try {
        const response = await fetch('http://localhost:3000/games');
        if (!response.ok) {
            throw new Error('Failed to fetch saved games');
        }
        const savedGames = await response.json();
        // Display these games in the UI
        // Example: Populate a dropdown or list with these game names/identifiers
        const gamesList = document.getElementById('saved-games-list'); // Ensure you have this element in your HTML
        gamesList.innerHTML = ''; // Clear existing list items
        savedGames.forEach(game => {
            const option = document.createElement('option');
            option.value = game.username; // Assuming each saved game has a username identifier
            option.textContent = game.username; // Display the username in the list
            gamesList.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching saved games:', error);
    }
}

// You might also include the logic for selecting a game and loading its state here
